import { Container, Row, Col } from 'react-bootstrap';
const Detailjoker = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className='bg-light p-3 rounded'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zAGVQLHvwOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.
                        <hr />
                        Director Todd Phillips
                        <hr />
                        Writers Todd PhillipsScott SilverBob Kane(based on characters created by)
                        <hr />
                        Stars Joaquin PhoenixRobert De NiroZazie Beetz
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col className='text-light'>
                        <h3 className='mt-5'>SINOPSIS</h3>
                        <hr />
                        “Perjalanan pahlawan yang penuh mitos dan emosional, Dune bercerita tentang Paul Atreides, seorang pemuda yang berbakat dan bertalenta yang lahir dalam takdir yang luar biasa, yang harus melakukan perjalanan ke planet paling berbahaya di alam semesta untuk memastikan masa depan keluarganya dan orang-orangnya. Ketika kekuatan jahat meledak menjadi konflik atas pasokan eksklusif sumber daya paling berharga di planet ini.”
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}
export default Detailjoker;