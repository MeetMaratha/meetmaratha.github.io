import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Data Scientist", "Software Developer", "Web Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text,])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={12} xl={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Meet, a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Data Scientist", "Software Developer", "Web Develoepr" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Versatile Technologist specializing in AI-driven cloud solutions, full-stack development, and synthetic data systems. Proven expertise in designing high-availability cloud applications using AWS, Docker, and Kubernetes. Developing scalable web platforms using React/Django, and engineering AI/ML workflows using PyTorch, RAG, and LLMs.</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
