import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Ali Jawed </span>
                        from <span className="purple">korangi Crossing , Pakistan. </span>
                        <br />
                        I have completed a web development course at Saylani Mass IT Training (SMIT) 
                        <br />
                        and hold a pre-engineering HSc degree. My passion lies in crafting innovative and user-centric web solutions, showcasing my dedication to the field of web development.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Writing Tech Blogs
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Ali Jawed</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;