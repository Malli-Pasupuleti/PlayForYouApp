import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import AddSong from '../admin/AddSong';
import Songs from '../pages/Songs';
import Customers from './Customers';
import { logoutUser } from '../services/UserService';
import Footer from '../Components/Footer';

const AdminHome = () => {
    const [showAddSong, setShowAddSong] = useState(false);
    const [showSongs, setShowSongs] = useState(false);
    const [showCust, setShowCust] = useState(true);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            localStorage.clear();
            sessionStorage.clear();
            await logoutUser();
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div style={{ background: 'url("https://th.bing.com/th/id/R.06267fc47d3d0f5e6182da405650563b?rik=2EVHxqp%2bh%2foZYA&riu=http%3a%2f%2fwww.karmanews.it%2fwp-content%2fuploads%2f2014%2f02%2fnotes-music.jpg&ehk=X1IaJ%2bEh7%2bOCfw93lEuOYnqQS%2bWYxlBsn0vvpnvfWb8%3d&risl=&pid=ImgRaw&r=0")', minHeight: '100vh', paddingTop: '20px' }}>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Admin Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" aria-label="Toggle navigation" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Row className="w-100">
                        <Col className="col-lg-6">
                            <Nav className="mr-auto">
                                <Nav.Link onClick={() => { setShowAddSong(true); setShowSongs(false); setShowCust(false); }}>AddSong</Nav.Link>
                                <Nav.Link onClick={() => { setShowAddSong(false); setShowSongs(true); setShowCust(false); }}>Songs</Nav.Link>
                                <Nav.Link onClick={() => { setShowAddSong(false); setShowSongs(false); setShowCust(true); }}>Customers</Nav.Link>
                            </Nav>
                        </Col>
                        <Col className="col-lg-6">
                            <Nav className="ml-auto justify-content-end">
                                <Button variant="secondary" className="p rounded-sm text-white" onClick={handleLogout}>Logout</Button>
                            </Nav>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Navbar>

            {showCust && <Customers />}
            {showAddSong && <AddSong />}
            {showSongs && <Songs />}
            <Footer />
        </div>
    );
};

export default AdminHome;
