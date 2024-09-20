import { Container,Row,Col } from "react-bootstrap"

function About()
{
    return(
        <Container fluid>
            <Container>
                <Row className="mt-5 text-start">
                    <Col className="col-12 col-lg-6">
                        <div className="aboutpagepic"></div>
                    </Col>

                    <Col className="col-12 col-lg-6 mt-5 mt-lg-0 ps-lg-4">
                        <h6>ABOUT US</h6>
                        <h1 className="mb-4">Welcome to eLEARNING</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <Row className="mt-4">
                            <Col className="col-12 col-md-6"><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short " viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>
                                Skilled Instructors</p>
                            </Col>
                          
                            <Col className="col-12 col-md-6"><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short " viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>
                                 Online Classes</p>
                            </Col>

                            <Col className="col-12 col-md-6"><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short " viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>
                                 International Certificate</p>
                            </Col>

                            <Col className="col-12 col-md-6"><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short " viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>
                                 Skilled Instructors</p>
                            </Col>

                            <Col className="col-12 col-md-6"><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short " viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>
                                 Online Classes</p>
                            </Col>

                            <Col className="col-12 col-md-6"><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short " viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>
                                 International Certificate</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <button className="btn btn-primary p-3 ps-5 pe-5">Read More</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About;