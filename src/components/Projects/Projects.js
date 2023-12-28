import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/calculator.png";
import emotion from "../../Assets/Projects/dragon.jpeg";
import editor from "../../Assets/Projects/login.jpg";
import chatify from "../../Assets/Projects/quizapp.jpg";
import suicide from "../../Assets/Projects/todo.webp";
import bitsOfCode from "../../Assets/Projects/weather.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Quiz App"
              description=
              "Developed a dynamic quiz application utilizing HTML, CSS, and JavaScript, showcasing a seamless blend of front-end technologies. Designed an interactive and user-friendly interface for an engaging quiz experience, highlighting my proficiency in web development."
              ghLink="https://github.com/aliJawed657/Quiz-App"
              demoLink="https://quiz-app-ten-sepia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App"
              description="Crafted a sleek and functional weather app using HTML, CSS, and JavaScript, demonstrating proficiency in front-end development. Implemented responsive design for seamless user experience, offering real-time weather information with intuitive interface design."
              ghLink="https://github.com/aliJawed657/Weather-App"
              demoLink="https://weather-app-elgk.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Login Sign Up Using Backend Mongodb Database "
              description=
              "Engineered a secure and scalable user authentication system with a MongoDB backend and Node.js, showcasing my full-stack development skills. Implemented seamless login and signup functionalities, ensuring robust data management and enhancing user experience."
              ghLink="https://github.com/aliJawed657/Login-SignUp-With-Mongodb"
              demoLink="https://login-sign-up-with-mongodb.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Calculator"
              description=
              "Designed and developed a sleek and functional calculator using HTML, CSS, and JavaScript, showcasing my proficiency in front-end web development. The intuitive user interface and accurate calculations demonstrate my commitment to creating user-friendly applications."
              ghLink="https://github.com/aliJawed657/CALCULATOR"
              demoLink="https://calculator-7vi7rywdk-alis-projects-0a5d5b2e.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Todo App Using Firebase"
              description="Engineered a responsive login/signup todo app with React.js and Firebase, combining front-end elegance with secure back-end functionality. Demonstrated proficiency in modern web development, delivering a seamless user experience with real-time data synchronization."
              ghLink="https://github.com/aliJawed657/Login-SignUp-TodoApp-With-FIREBASE"
              demoLink="https://login-sign-up-todo-app-with-firebase.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dragon Game"
              description=
              "Crafted an immersive dragon game using HTML, CSS, and JavaScript, showcasing creativity in design and interactivity. The engaging user interface and dynamic gameplay underscore my skills in front-end web development."
              ghLink="https://github.com/aliJawed657/Dragon-Game"
              demoLink="https://dragon-game-one.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
