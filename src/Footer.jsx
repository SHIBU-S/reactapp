import { Container,Row,Col } from "react-bootstrap";

function Footer()
{
    return(
        <Container fluid className="footer">
            <Container className="border p-3">
                <Row className="border">
                    <Col className="border mt-5">
                        <h4 className="text-white text-start">Quick Link</h4>
                        <div>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short " viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>
                                Skilled Instructors</p>
                        </div>
                    </Col>

                    <Col></Col>

                    <Col></Col>

                    <Col></Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;