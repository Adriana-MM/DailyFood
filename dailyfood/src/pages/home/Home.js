import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import Header from "../../componets/header/Header";
import Footer from "../../componets/footer/Footer";

import ima1 from "../../img/img5.jpg";
import ima2 from "../../img/img4.jpg";
import ima3 from "../../img/img3.jpg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
    return(
        <div className="Home">
        <Header/>
        <Container fluid>
            <Row  className='secondSection'>
                <Col lg={9}>
                    <Carousel className='carousel'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ima1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Siempre lo mejor</h3>
                            <p>Solo lo mejro en tu mesa.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={ima2}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>¿Te puede interesar?</h3>
                            <p>Desafia tus gustos.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={ima3}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Lo hacemos saludable</h3>
                            <p>
                                Nos importa cuidarte.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col lg={2} className='information'>
                    <p>
                    <center>DailyFood</center> <hr/>
                    Sabemos lo que te gusta, por eso hemos decido hacer mas dinamico el proceso para poder ver el menú. <hr/>
                    Encuentre toda la información pertinente por cada uno de los días de la semana. <hr/>
                    Recuerde comida sana cuerpo sano
                    </p>
                </Col>

            </Row>
        </Container>

        <Container>
            <Row col={12} className='informationDown' >
            <p>Nos encontramos ubicados en la ciudad de Bogotá <br/> Envios a cualquier localidad de Bogotá <hr/> Nuesto personal se encuentra 100% capacitado para brindarle una de las mejores experencias en cuanto a la gastronomia. Sabemos lo que valen nuestros clientes por tal motivo cada día tratamos de mejorar para ustedes. Nos importa sus opiniones, sus recomendaciones recuerde que usted es nuestra prioridad.    </p>
            </Row>
        </Container>

        <Footer/>
        </div>
    );
}

export default Home;