import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../services/UserService'

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [role, setRole] = useState('')
    const [address, setAddress] = useState('')

    const [msg, setMsg] = useState('')

    const navigate = useNavigate()

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
        role: '',
        address: ''
    })

    const Register = async (e) => {
        e.preventDefault();
        const user = {
            username, email, password, gender, role, address
        };

        if (validateForm()) {
            try {
                const response = await createUser(user);
                console.log(response.data);
                setMsg(response.data);
                navigate("/login");
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
                setMsg(error.response ? error.response.data : error.message);
            }
        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors }

        if (username.trim()) {
            errorsCopy.username = '';
        } else {
            errorsCopy.username = "Username is required";
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = "Email is required";
            valid = false;
        }

        if (password.trim()) {
            errorsCopy.password = '';
        } else {
            errorsCopy.password = "Password is required";
            valid = false;
        }

        if (gender.trim()) {
            errorsCopy.gender = '';
        } else {
            errorsCopy.gender = "Gender is required";
            valid = false;
        }

        if (role.trim()) {
            errorsCopy.role = '';
        } else {
            errorsCopy.role = "Role is required";
            valid = false;
        }

        if (address.trim()) {
            errorsCopy.address = '';
        } else {
            errorsCopy.address = "Address is required";
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    return (
        <div style={{
            background: 'url("https://th.bing.com/th/id/R.06267fc47d3d0f5e6182da405650563b?rik=2EVHxqp%2bh%2foZYA&riu=http%3a%2f%2fwww.karmanews.it%2fwp-content%2fuploads%2f2014%2f02%2fnotes-music.jpg&ehk=X1IaJ%2bEh7%2bOCfw93lEuOYnqQS%2bWYxlBsn0vvpnvfWb8%3d&risl=&pid=ImgRaw&r=0")',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="card col-md-8 shadow-lg">
                        <h2 className='text-center m-3'>Register Here</h2>
                        <div className="card-body">
                            <form onSubmit={Register} method='post'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Username:</label>
                                            <input type="text"
                                                placeholder='Enter Username'
                                                name='firstName'
                                                value={username}
                                                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                                onChange={(e) => { setUsername(e.target.value) }}
                                                required
                                            />
                                            {errors.username && <div className='invalid-feedback'>{errors.username}</div>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>User Email:</label>
                                            <input type="text"
                                                placeholder='Enter Email'
                                                name='lastName'
                                                value={email}
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Password:</label>
                                            <input type="password"
                                                placeholder='Enter Password'
                                                name='password'
                                                value={password}
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Gender:</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender"
                                                    value='male'
                                                    onChange={(e) => setGender(e.target.value)}
                                                />
                                                <label className="form-check-label">
                                                    Male
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender"
                                                    value='female'
                                                    onChange={(e) => setGender(e.target.value)}
                                                />
                                                <label className="form-check-label">
                                                    Female
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender"
                                                    value='other'
                                                    onChange={(e) => setGender(e.target.value)}
                                                />
                                                <label className="form-check-label">
                                                    Other
                                                </label>
                                            </div>
                                            {errors.gender && <div className='text-danger mt-1'>{errors.gender}</div>}
                                        </div>

                                        <div className="form-group mb-3">
                                            <label className='form-label'>Role:</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                    value='admin'
                                                    onChange={(e) => setRole(e.target.value)}
                                                    disabled
                                                />
                                                <label className="form-check-label">
                                                    Admin
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                    value='customer'
                                                    onChange={(e) => setRole(e.target.value)}
                                                />
                                                <label className="form-check-label">
                                                    Customer
                                                </label>
                                            </div>
                                            {errors.role && <div className='text-danger mt-1'>{errors.role}</div>}
                                        </div>

                                        <div className="form-group mb-3">
                                            <label className='form-label'>Address:</label>
                                            <textarea
                                                rows="3"
                                                placeholder='Enter Address'
                                                name='address'
                                                value={address}
                                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                            {errors.address && <div className='invalid-feedback'>{errors.address}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className='text-center mt-3'>
                                    <button className='btn btn-success px-4 py-2 rounded-pill' type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                        {msg && <h6 className="text-center border border-dark p-2 rounded text-danger mx-4 mb-3">{msg}</h6>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
