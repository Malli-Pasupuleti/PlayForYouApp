import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdatePasswordForm() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/updatePassword', {
                email,
                password: newPassword
            });
            console.log(response.data);
            setError(response.data); // Assuming the response contains a success message
        } catch (error) {
            console.error('Error updating password:', error);
        }
    };

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        setEmail(userEmail);
    }, []);

    return (
         <div style={{ 
            minHeight: '100vh', 
            background: 'url("https://th.bing.com/th/id/R.06267fc47d3d0f5e6182da405650563b?rik=2EVHxqp%2bh%2foZYA&riu=http%3a%2f%2fwww.karmanews.it%2fwp-content%2fuploads%2f2014%2f02%2fnotes-music.jpg&ehk=X1IaJ%2bEh7%2bOCfw93lEuOYnqQS%2bWYxlBsn0vvpnvfWb8%3d&risl=&pid=ImgRaw&r=0")',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <h2 className="card-header text-center">Update Password</h2>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">User Email:</label>
                                        <input
                                            type="text"
                                            id="userEmail"
                                            className="form-control"
                                            value={email}
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="newPassword" className="form-label">New Password:</label>
                                        <input
                                            type="password"
                                            id="newPassword"
                                            className="form-control"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            className="form-control"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    {error && <div className="text-danger mb-3 text-center">{error}</div>}
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Update Password</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdatePasswordForm;
