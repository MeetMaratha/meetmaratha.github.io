import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import solidWasteProject from "../assets/img/solid-waste-project.png";
import soundGan from "../assets/img/sound-gan-project.png";
import nlp from "../assets/img/nlp-project.png";
import gravitationalGlitchClassification from "../assets/img/gravitational-glitch-classification-project.png";
import ragChatBot from "../assets/img/rag-chatbot.png";
import windowKBeam from "../assets/img/window-kbeam.png";
import geospatial from "../assets/img/geospatial-project.png";
import communitySmellDetector from "../assets/img/community-smell-detector.png";
import solarDashboard from "../assets/img/solar-dashboard.png";
import minesweeper from "../assets/img/minesweeper.png";
import covidTracker from "../assets/img/covid-tracker.png";
import espAnalysis from "../assets/img/esp-analysis.png";
import lorawanAnalysis from "../assets/img/lorawan-analysis.png";
import snake from "../assets/img/snake.png";
import rlATC from "../assets/img/rl-atc.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const dataScienceProjects = [
        {
            title: "Solid Waste Management Optimization",
            description: "Optimize Waste Collection Routes in Resource-Constrained Cities",
            imgUrl: solidWasteProject,
            githubUrl: "https://github.com/MeetMaratha/Solid-Waste-Collection"
        },
        {
            title: "Window K-Beam Search",
            description: "Analyze a new method for text generation",
            imgUrl: windowKBeam,
            githubUrl: "https://github.com/MeetMaratha/Windowed-K-Beam-Search-Algorithm"
        },
        {
            title: "RAG Powered Zig Programming Language Chat Bot",
            description: "A RAG-powered Cloud-based Zig Programming Language Chat Bot",
            imgUrl: ragChatBot,
            githubUrl: "https://github.com/MeetMaratha/RAG-Powered-Zig-Programming-Language-Chat-Bot"
        },
        {
            title: "Generative Adversarial Network For Audio",
            description: "Syntthetic Audio Generation using Image Generation ML Model",
            imgUrl: soundGan,
        },
        {
            title: "Reinforcement Learning ATC Game",
            description: "Compare RL Models in playing ATC Game",
            imgUrl: rlATC,
            githubUrl: "https://github.com/MeetMaratha/Reinforcement-Learning-for-Air-Traffic-Control-Game"
        },
        {
            title: "Sentiment Classification",
            description: "Classify Sentiment of New Headlines using NLP Techniques",
            imgUrl: nlp,
            githubUrl: "https://github.com/MeetMaratha/NLP-News-Headline-Classification"
        },
        {
            title: "Gravitation Glitch Classification",
            description: "Classify Gravitation Glitch based on Numerical Data",
            imgUrl: gravitationalGlitchClassification,
            githubUrl: "https://github.com/MeetMaratha/Gravitational-Glitch-Classification"
        },
        {
            title: "GeoSpatial Data Analysis",
            description: "Perform Geospatial Data Analysis on John Snow Cholera Data",
            imgUrl: geospatial,
        },
        {
            title: "Reinforcement Learning in Snake Game",
            description: "Train a RL model to play Snake Game",
            imgUrl: snake,
            githubUrl: "https://github.com/MeetMaratha/Snake-Game"
        },
    ];

    const projects2 = [
        {
            title: "Community Smells Detector",
            description: "Detect community smells in github repository",
            imgUrl: communitySmellDetector,
            githubUrl: "https://github.com/CSCI5308/course-project-g01"
        },
        {
            title: "Solar Panels IoT Dashboard",
            description: "Dashboard for tracking solar panels status",
            imgUrl: solarDashboard,
        },
        {
            title: "Cloud-Native Minesweeper",
            description: "Godot-Powered, Cloud-Native, Highly Available Minesweeper Game",
            imgUrl: minesweeper,
        },
        {
            title: "ESP32 Covid Tracking Device",
            description: "IoT Device for tracking Covid patients interaction",
            imgUrl: covidTracker,
        },
        {
            title: "ESP32 RSSI Analysis",
            description: "Analysis of Theoretical VS Experimental RSSI values recorded by ESP32",
            imgUrl: espAnalysis,
        },
        {
            title: "LoRAWAN RSSI Analysis",
            description: "Analysis of Theoretical VS Experimental RSSI VS Distance values recorded by LoRAWAN Technology",
            imgUrl: lorawanAnalysis,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Data Science Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Software and Web Developer Projects</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        dataScienceProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}
