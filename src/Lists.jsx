// import { Container,Row,Col } from "react-bootstrap";
// import Listpic1 from './Listpic1.png';

// import { Container, Row } from "react-bootstrap";

// function Lists(){
//     return(
//         <Container fluid>
//             <Container className="pt-5">
//                 <Row className="mt-5">
//                     <Col className="border lists mb-3 col-12 col-md-6 col-lg-3">
//                         <div className="listspic1 ms-4 mt-5 mb-3 border"> </div>
//                         <div>   <h5 className="mb-3">Skilled Instructors</h5>    </div>
//                         <div>   <p className="pb-3">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>   </div>
//                     </Col>

//                     <Col className="lists border mb-3 col-12 col-md-6 col-lg-3">
//                         <div className="listspic2 ms-4 mt-5 mb-3"></div>
//                         <div>   <h5 className="mb-3">Online Classes</h5>     </div>
//                         <div>   <p className="pb-3">Diam elitr kasd sed at elitr sed  ipsum justo dolor sed clita amet diam</p>   </div>
//                     </Col>

//                     <Col className="lists border mb-3 col-12 col-md-6 col-lg-3">
//                         <div className="listspic3 ms-4 mt-5 mb-3"></div>
//                         <div>   <h5 className="mb-3">Home Projects</h5>  </div>
//                         <div>   <p className="pb-3">Diam elitr kasd sed at elitr sed  ipsum justo dolor sed clita amet diam</p>   </div>
//                     </Col>

//                     <Col className="lists border mb-3 col-12 col-md-6 col-lg-3">
//                         <div className="listspic4 ms-4 mt-5 mb-3"></div>
//                         <div>   <h5 className="mb-3">Book Library</h5>   </div>
//                         <div>   <p>Diam elitr kasd sed at elitr sed  ipsum justo dolor sed clita amet  diam</p>   </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </Container>
//     )
// }

// export default Lists;

import {Container,Row,Col} from "react-bootstrap";
import Listpic1 from './Listpic1.png';
import Listpic2 from './Listpic2';
import Listpic3 from './Listpic3';
import Listpic4 from './Listpic4';

function Lists(){
    return(
            <Container fluid className="border p-5">
                <Row className="border  gap-5">
                    <Col   className="border p-5">
                        <div><img src={Listpic1} style={{height:"80px"}} alt="" /></div>
                        <div><h5 className="mb-3">Skilled Instructors</h5></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo repudiandae libero alias eaque saepe aut incidunt, labore ratione aspernatur perspiciatis distinctio in placeat ab vero nam eveniet ipsum dolor?</p></div>
                        <div><h6>Result..</h6></div>
                    </Col>
                    <Col  className="border p-5">
                        <div><img src={Listpic2} style={{height:"80px"}} alt="" /></div>
                        <div><h5 className="mb-3">Online Classes</h5> </div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo repudiandae libero alias eaque saepe aut incidunt, labore ratione aspernatur perspiciatis distinctio in placeat ab vero nam eveniet ipsum dolor?</p></div>
                        <div><h6>Result..</h6></div>
                    </Col>
                    <Col  className="border p-5">
                        <div><img src={Listpic3} style={{height:"80px"}} alt="" /></div>
                        <div>   <h5 className="mb-3">Home Projects</h5></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo repudiandae libero alias eaque saepe aut incidunt, labore ratione aspernatur perspiciatis distinctio in placeat ab vero nam eveniet ipsum dolor?</p></div>
                        <div><h6>Result..</h6></div>
                    </Col>
                    <Col  className="border p-5">
                        <div><img src={Listpic4} style={{height:"80px"}} alt="" /></div>
                        <div><h5 className="mb-3">Book Library</h5></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo repudiandae libero alias eaque saepe aut incidunt, labore ratione aspernatur perspiciatis distinctio in placeat ab vero nam eveniet ipsum dolor?</p></div>
                        <div><h6>Result..</h6></div>
                    </Col>
                </Row>
            </Container>
    )
}

export default Lists;