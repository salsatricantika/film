import { Row, Col, Container } from 'react-bootstrap';
import Gambar from '.././assets/images/trending/Logo.gif';
const Footer = () => {
    return (
        <div className='bg-dark text-muted py-5 footer'>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <img src={Gambar} alt="gambar.jpg" width={1000} />
                        <p>Copyright &copy; Salsa Tri Cantika - 2022</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer;