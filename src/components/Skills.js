import react from "../assets/img/react-logo.png";
import pytorch from "../assets/img/pytorch-logo.png";
import gcp from "../assets/img/gcp-logo.png";
import aws from "../assets/img/aws-logo.png";
import cpp from "../assets/img/c++-logo.png";
import java from "../assets/img/java-logo.png";
import rust from "../assets/img/rust-logo.png";
import csharp from "../assets/img/csharp-logo.png";
import azure from "../assets/img/azure-logo.png";
import javascript from "../assets/img/javascript-logo.png";
import tf from "../assets/img/tf-logo.png";
import opencv from "../assets/img/opencv-logo.png";
import sklearn from "../assets/img/sklearn-logo.png";
import flask from "../assets/img/flask-logo.png";
import django from "../assets/img/django-logo.png";
import python from "../assets/img/python-logo.png";
import mysql from "../assets/img/mysql-logo.png";
import mongodb from "../assets/img/mongodb-logo.png";
import hadoop from "../assets/img/hadoop-logo.png";
import postgis from "../assets/img/postgis-logo.png";
import dynamodb from "../assets/img/dynamodb-logo.png";
import cognos from "../assets/img/cognos-logo.png";
import linux from "../assets/img/linux-logo.png";
import godot from "../assets/img/godot-logo.png";
import unreal from "../assets/img/unreal-logo.png";
import asam from "../assets/img/asam-logo.png";
import webots from "../assets/img/webots-logo.png";
import prom from "../assets/img/prom-logo.png";
import qgis from "../assets/img/qgis-logo.png";
import docker from "../assets/img/docker-logo.png";
import kubernetes from "../assets/img/kubernetes-logo.png";
import arduino from "../assets/img/arduino-logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="slide-group">
                                    <div className="carousel-row">
                                        <div className="item">
                                            <img src={python} width="50" alt="Image" />
                                            <h5>Python</h5>
                                        </div>
                                        <div className="item">
                                            <img src={aws} alt="Image" />
                                            <h5>AWS Cloud</h5>
                                        </div>
                                        <div className="item">
                                            <img src={mysql} alt="Image" />
                                            <h5>MySQL</h5>
                                        </div>
                                        <div className="item">
                                            <img src={unreal} alt="Image" />
                                            <h5>Unreal Engine</h5>
                                        </div>
                                        <div className="item">
                                            <img src={kubernetes} alt="Image" />
                                            <h5>Kubernetes</h5>
                                        </div>
                                        <div className="item">
                                            <img src={arduino} alt="Image" />
                                            <h5>Embedded Systems</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-group">
                                    <div className="carousel-row">
                                        <div className="item">
                                            <img src={cpp} width="50" alt="Image" />
                                            <h5>C++</h5>
                                        </div>
                                        <div className="item">
                                            <img src={gcp} alt="Image" />
                                            <h5>Google Cloud</h5>
                                        </div>
                                        <div className="item">
                                            <img src={hadoop} alt="Image" />
                                            <h5>Hadoop</h5>
                                        </div>
                                        <div className="item">
                                            <img src={godot} alt="Image" />
                                            <h5>Godot Engine</h5>
                                        </div>
                                        <div className="item">
                                            <img src={linux} alt="Image" />
                                            <h5>Linux</h5>
                                        </div>
                                        <div className="item">
                                            <img src={prom} alt="Image" />
                                            <h5>Process Mining Workbench</h5>
                                        </div>

                                    </div>
                                </div>
                                <div className="slide-group">
                                    <div className="carousel-row">
                                        <div className="item">
                                            <img src={java} width="50" alt="Image" />
                                            <h5>Java</h5>
                                        </div>
                                        <div className="item">
                                            <img src={azure} alt="Image" />
                                            <h5>Azure</h5>
                                        </div>
                                        <div className="item">
                                            <img src={mongodb} alt="Image" />
                                            <h5>MongoDB</h5>
                                        </div>
                                        <div className="item">
                                            <img src={cognos} alt="Image" />
                                            <h5>IBM Cognos</h5>
                                        </div>
                                        <div className="item">
                                            <img src={asam} alt="Image" />
                                            <h5>ASAM Standard</h5>
                                        </div>
                                        <div className="item">
                                            <img src={webots} alt="Image" />
                                            <h5>Webots</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-group">
                                    <div className="carousel-row">
                                        <div className="item">
                                            <img src={javascript} width="50" alt="Image" />
                                            <h5>Java Script</h5>
                                        </div>
                                        <div className="item">
                                            <img src={pytorch} alt="Image" />
                                            <h5>PyTorch</h5>
                                        </div>
                                        <div className="item">
                                            <img src={dynamodb} alt="Image" />
                                            <h5>DynamoDB</h5>
                                        </div>
                                        <div className="item">
                                            <img src={django} alt="Image" />
                                            <h5>Django</h5>
                                        </div>
                                        <div className="item">
                                            <img src={opencv} alt="Image" />
                                            <h5>OpenCV</h5>
                                        </div>
                                        <div className="item">
                                            <img src={qgis} alt="Image" />
                                            <h5>QGIS</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-group">
                                    <div className="carousel-row">
                                        <div className="item">
                                            <img src={csharp} width="50" alt="Image" />
                                            <h5>C#</h5>
                                        </div>
                                        <div className="item">
                                            <img src={rust} width="50" alt="Image" />
                                            <h5>Rust</h5>
                                        </div>
                                        <div className="item">
                                            <img src={flask} alt="Image" />
                                            <h5>Flask</h5>
                                        </div>
                                        <div className="item">
                                            <img src={postgis} alt="Image" />
                                            <h5>PostGIS</h5>
                                        </div>
                                        <div className="item">
                                            <img src={react} alt="Image" />
                                            <h5>React</h5>
                                        </div>
                                        <div className="item">
                                            <img src={docker} alt="Image" />
                                            <h5>Docker</h5>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
