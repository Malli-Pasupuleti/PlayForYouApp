import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'url("https://th.bing.com/th/id/R.06267fc47d3d0f5e6182da405650563b?rik=2EVHxqp%2bh%2foZYA&riu=http%3a%2f%2fwww.karmanews.it%2fwp-content%2fuploads%2f2014%2f02%2fnotes-music.jpg&ehk=X1IaJ%2bEh7%2bOCfw93lEuOYnqQS%2bWYxlBsn0vvpnvfWb8%3d&risl=&pid=ImgRaw&r=0")',
            paddingBottom: '50px'
        }}>
            <header className="bg-dark text-white py-5">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col md={8}>
                            <h1 className="display-4">Welcome to My Music Application</h1>
                            <p className="lead">Discover, Listen, and Enjoy Great Music!</p>
                            <Button variant="primary" size="lg">Get Started</Button>
                        </Col>
                    </Row>
                </Container>
            </header>

            <section className="py-5">
                <Container>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="shadow h-100">
                                <Card.Body>
                                    <Card.Title>🎧 Discover</Card.Title>
                                    <Card.Text>Explore a wide range of music genres and artists.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow h-100">
                                <Card.Body>
                                    <Card.Title>🎼 Listen</Card.Title>
                                    <Card.Text>Stream your favorite songs and albums of wide varieties.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow h-100">
                                <Card.Body>
                                    <Card.Title>🎉 Enjoy</Card.Title>
                                    <Card.Text>Immerse yourself in the world of music and enjoy the experience.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-light py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h2>🚀 Unlock Premium Features!</h2>
                            <p className="mb-3">
                                Buy the premium subscription for just <strong>Rs.99</strong> to unlock unlimited streaming of your favorite songs!
                            </p>
                            <Button variant="success" size="lg">Buy Now</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Home;
