import { Container,Row,Col } from "react-bootstrap";

function Testimonial()
{
    return(
        <Container fluid>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h6>TESTIMONIAL</h6>
                        <h1>Our Students Say!</h1>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col className="col-12 col-md-6 col-lg-4">
                        <div className=" d-flex justify-content-center">   <div className="logo1 border border-dark rounded-circle"></div>     </div>
                        <div>
                            <h5>Client Name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="border p-3">
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </Col>

                    <Col className=" col-12 col-md-6 col-lg-4">
                        <div className="d-flex justify-content-center"><div className="logo2 border border-dark rounded-circle"></div></div>
                        <div>
                            <h5>Client Name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="border p-3">
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </Col>
                    
                    <Col className=" col-12 col-md-6 col-lg-4">
                        <div className="d-flex justify-content-center"><div className="logo3 border border-dark rounded-circle"></div></div>
                        <div>
                            <h5>Client Name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="border p-3">
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Testimonial;