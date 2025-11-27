import React from 'react'
import { useNavigate } from 'react-router-dom'

function Entry() {

    const navigate = useNavigate()

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'url("https://th.bing.com/th/id/R.06267fc47d3d0f5e6182da405650563b?rik=2EVHxqp%2bh%2foZYA&riu=http%3a%2f%2fwww.karmanews.it%2fwp-content%2fuploads%2f2014%2f02%2fnotes-music.jpg&ehk=X1IaJ%2bEh7%2bOCfw93lEuOYnqQS%2bWYxlBsn0vvpnvfWb8%3d&risl=&pid=ImgRaw&r=0")',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className='container'>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 bg-light shadow-lg">
                        <div className="card-body text-center">
                            <h1 className='lead display-4'>Welcome to PlayForYou Music App</h1>
                            <h2><strong>Get Started</strong></h2>
                            <div className='d-grid gap-2 mt-4'>
                                <button className='btn btn-success rounded-pill p-3' onClick={() => {
                                    navigate("/register")
                                }} >Sign Up</button>
                                <button className='btn btn-success rounded-pill p-3' onClick={() => {
                                    navigate("/login")
                                }} >Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entry
