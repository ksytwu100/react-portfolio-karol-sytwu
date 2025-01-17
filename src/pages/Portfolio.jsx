import Project from "../components/Project";
import Map from "../assets/TravelMapWeather.png";
import EPayroll from "../assets/EPayroll.png";
import TaskBoard from "../assets/TaskBoard.png";
import GoogleBooks from "../assets/google-books-app.png";
import MongoDBSocial from "../assets/MongoDBSocialNetwork.png";
import texteditor from "../assets/TextEditor.png";
import {Row,Col} from "react-bootstrap";


export default function Portfolio() {
  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      <Row className = "projects justify-content-center" >
       <Col className = "project-col" sm={12} md={6} lg={4}><Project item={{ name: "USA Travel Locations and Weather Dashboard", image: Map, deployed:"https://ksytwu100.github.io/project1-group5/", github:"https://github.com/ksytwu100/project1-group5"}} /></Col>
       
       <Col className = "project-col" sm={12} md={6} lg={4}><Project item={{ name: "Employee Payroll Tracker", image: EPayroll, deployed:"https://ksytwu100.github.io/curly-potato/", github:"https://github.com/ksytwu100/curly-potato" }} /></Col>

       <Col className = "project-col" sm={12} md={6} lg={4}><Project item={{ name: "Task Board", image: TaskBoard, deployed:"https://ksytwu100.github.io/musical-happiness/", github:"https://github.com/ksytwu100/musical-happiness"}} /></Col> 

       <Col className = "project-col" sm={12} md={6} lg={4}><Project item={{ name: "Google Books App", image: GoogleBooks, deployed:"https://google-books-app-gkig.onrender.com/", github:"https://github.com/ksytwu100/google-books-app"}} /></Col> 

       <Col className = "project-col" sm={12} md={6} lg={4}><Project item={{ name: "MongoDB Social Network", image: MongoDBSocial, deployed:"https://drive.google.com/file/d/1MNz4jeZFl_AWFKSJKVRAVKpx0KM7mZx3/view", github:"https://github.com/ksytwu100/MongoDB-social-network"}} /></Col>  

       <Col className = "project-col" sm={12} md={6} lg={4}><Project item={{ name: "Text Editor", image: texteditor, deployed:"https://text-editor-zyei.onrender.com", github:"https://github.com/ksytwu100/text-editor"}} /></Col>
    
      </Row>
    </div>
  );
}
