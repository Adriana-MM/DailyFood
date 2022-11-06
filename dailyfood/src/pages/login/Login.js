import './login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Header from "../../componets/header/Header";
import Footer from "../../componets/footer/Footer";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gorro from "../../img/gorro.png";

function Login(){
    return(
        <div className='loginL'>
        <Header/>
        <Container fluid className='loginC'>
            <Row className='justify-content-center'>
            <Col lg={6} >
                <center>
                    <p>Iniciar sesión                             
                        <img
                        className=""
                        src={gorro}
                        alt="Imagen"
                        />
                    </p>

                    <form>
                        <label>Usuario</label>
                        <input type="number" name="usuario" id="usuario" placeholder='Ingrese su usario'/><br/>
                        <label>Contraseña</label>
                        <input type="password" name="contra" id="contra" placeholder='Contraseña del usuario'/> <br/>
                        <button name="iniciosesion"  type="submit">Iniciar sesión</button>
                    </form>
                </center>
            </Col>
            </Row>
        </Container>
        <Footer/>
        </div>
    )
}

export default Login;