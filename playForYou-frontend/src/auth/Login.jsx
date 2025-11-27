import React, { useState } from 'react'
import { loginUser } from '../services/UserService';
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginData = {
            email, password
        }

        try {
            const response = await loginUser(loginData);
            console.log(response);
            if (response === 'adminHome') {
                navigate('/admin')
                console.log('Redirecting to adminHome');
            } else if (response === 'customerHome') {
                localStorage.setItem('userEmail', loginData.email);
                navigate('/customer')
                console.log('Redirecting to customerHome');
            } else {
                setError('Login failed');
            }
        } catch (error) {
            console.error('Error logging in: ', error);
            setError('Login failed !! Invalid Credentials');
        }
    }

    return (
        <div style={{
            minHeight: '100vh',
        background : 'url("https://th.bing.com/th/id/R.06267fc47d3d0f5e6182da405650563b?rik=2EVHxqp%2bh%2foZYA&riu=http%3a%2f%2fwww.karmanews.it%2fwp-content%2fuploads%2f2014%2f02%2fnotes-music.jpg&ehk=X1IaJ%2bEh7%2bOCfw93lEuOYnqQS%2bWYxlBsn0vvpnvfWb8%3d&risl=&pid=ImgRaw&r=0")',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div className="card col-md-6 col-lg-5 shadow-lg p-4 rounded-4" style={{ backgroundColor: 'white' }}>
                <h2 className='text-center mb-4 text-primary'>Login</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor='email' className='form-label'>User Email:</label>
                            <input
                                type="text"
                                placeholder='Enter Email'
                                name='email'
                                value={email}
                                className="form-control rounded-pill px-3 py-2"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor='password' className='form-label'>Password:</label>
                            <input
                                type="password"
                                placeholder='Enter Password'
                                name='password'
                                value={password}
                                className="form-control rounded-pill px-3 py-2"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-success btn-lg px-4 rounded-pill' onClick={handleLogin}>
                                Login
                            </button>
                        </div>
                    </form>
                    {error && <div className="text-danger text-center mt-3">{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default Login
