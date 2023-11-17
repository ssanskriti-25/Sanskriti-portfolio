import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/face-recognition img.jpg";
import projImg2 from "../assets/img/debuggerking.jpeg";
import projImg3 from "../assets/img/e-commerce img.png";
import projImg4 from "../assets/img/create-jokes.jpeg";
import projImg5 from "../assets/img/netflix.jpg";
import projImg6 from "../assets/img/temp-convertor.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Face- Recognition Project",
      description: "Introducing a cutting-edge face recognition project leveraging OpenCV and face recognition libraries to revolutionize college student attendance tracking, ensuring accuracy and efficiency through innovative technology.",
      imgUrl: projImg1,
    },
    {
      title: "College Society Website",
      description: "Unveil the Debugger King website—a hub for coding enthusiasts, offering a platform to engage, compete, and showcase technical prowess through coding events and challenges.",
      imgUrl: projImg2,
      link: "https://ssanskriti-25.github.io/society-website/",
    },
    {
      title: "E-Commerce Website",
      description:"An interactive showcase of diverse online retail solutions and successful e-commerce projects, highlighting expertise in web development for online stores.",
      imgUrl: projImg3,
      link: "https://ssanskriti-25.github.io/E-Commerce-Website/",
    },
    {
      title: "Create Jokes",
      description: "Unlock the comedic potential of coding with our Create Jokes project, blending HTML, CSS, and JS for a dose of web-based humor!",
      imgUrl: projImg4,
      link: "https://ssanskriti-25.github.io/Create-Jokes/",

    },
    {
      title: "Netflix Clone",
      description: "Experience the magic of entertainment with our Netflix clone webpage, seamlessly crafted using HTML and CSS. Dive into a user-friendly interface that mirrors the allure of the beloved streaming giant.",
      imgUrl: projImg5,
      link: "https://ssanskriti-25.github.io/Netflix-Clone/",
    },
    {
      title: "Temperature Convertor",
      description: "Experience temperature conversion made elegant with our stylish and intuitive web page. Input in Celsius or Fahrenheit, press convert, and watch the magic unfold!",
      imgUrl: projImg6,
      link: "https://ssanskriti-25.github.io/Temperature-Convertor/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I've harnessed creativity and technical expertise to bring unique ideas to life. These projects, born out of a passion for innovation, showcase my ability to independently conceive, plan, and execute initiative. Web development and experimental tech integrations, each project represents a personal investment in staying abreast of industry trends and emerging technologies. These endeavors not only demonstrate my technical skills but also underscore my commitment to continuous learning and a proactive approach to problem-solving. This collection of personal projects serves as a testament to my self-driven initiative and the capacity to turn ideas into tangible, well-executed solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
