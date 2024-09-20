import { Container,Row,Col } from "react-bootstrap";

function Body(){
    return(
        <Container fluid className="bodypic">
            <Container className="top-25 d-flex align-items-center" style={{height:"700px"}}>
                <Row>
                    <Col style={{height:"300px"}}>
                        <h5 className="text-start">BEST ONLINE COURSES</h5> 
                        <h2 className="text-start bodydesc">Get Educated Online from <br /> Your Home</h2>
                        <p className="text-start bodypara">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo <br /> clita et kasd rebum sea sanctus eirmod elitr.</p>
                        <div className="d-flex grid gap-3">
                            <button type="button" className="btn btn-primary p-1 p-md-3" style={{width:"25%"}}>Read More</button>
                            <button type="button" className="btn btn-light p-1 p-md-3" style={{width:"25%"}}>Join Now</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Body;