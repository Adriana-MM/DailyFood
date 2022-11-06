
import './footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import gorro from "../../img/gorro.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer(){
    return(

        <div className='Footer'>
            <Container fluid>

                <Row >
                    <Col lg={6}>
                    <p>Telefono 300-000-00-00</p>
                    </Col>

                    <Col lg={6}>
                        <p>Ubicación Bogotá </p>   
                    </Col>

                    <Col lg={12}>
                        <p>                     
                            <img
                            className=""
                            src={gorro}
                            alt="Imagen"
                            />
                            DailyFood - Bienvenidos 
                            <img
                            className=""
                            src={gorro}
                            alt="Imagen"
                            />
                        </p>   
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;