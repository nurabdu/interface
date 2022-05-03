import React from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import Slider from "./Components/Slider";
import Jumbo from "./Components/Jumbo";
import socks from "./socks.jpg";
import male2 from "./male2.jpg";
import holiday from "./holiday.jpg";

export const Home = () => (
   <>
     <Slider/>
      <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
         <Row>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={holiday}/>
                    <Card.Body>
                        <Card.Title> socks store</Card.Title>
                        <Card.Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={male2}/>
                    <Card.Body>
                        <Card.Title> socks store</Card.Title>
                        <Card.Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={socks}/>
                    <Card.Body>
                        <Card.Title> socks store</Card.Title>
                        <Card.Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
         </Row>
       </Container>
       <Jumbo/>
    </>
)

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navibar  from './Components/Navibar';
// import Footer  from './Components/Footer';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes, 

// } from "react-router-dom";

// import { Home } from './Home';
// import { Users } from './Users';
// import { About } from './About';

// function App() {
//   return (
//   <>
//    <Router>
//    <Navibar/>
//    <Routes>
//      <Route exact path="/"element={<Home />} />
//      <Route path="/users" element={<Users/>}/>
//      <Route path="/about" element={<About/>}/>
//    </Routes>
//    </Router>
//    <Footer/>
//    </>
//   );
// }

// export default App;
