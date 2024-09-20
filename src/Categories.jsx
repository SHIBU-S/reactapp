import { Container,Row,Col } from "react-bootstrap";

function Categories(){
    return(
        <Container fluid>
            <Container className="mt-5">
                <Row className=" mt-5">
                    <Col className="col-12">   <h6>CATEGORIES</h6> </Col>
                    <Col className="col=12">   <h1>Courses Categories</h1> </Col>
                </Row>

                <Row className="mt-5 d-flex">
                    <Col className="col-12 col-lg-7 border me-3">
                        <Row>   
                            <Col className="webdesign_pic ms-2 "></Col>   
                        </Row>
                        <Row className="mt-3 gap-2">
                            <Col className="graphicdesign_pic ms-2"></Col>
                            <Col className="videoediting_pic ms-2"></Col>
                        </Row>
                    </Col>

                    <Col className=" onlinemarketing_pic">    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Categories;