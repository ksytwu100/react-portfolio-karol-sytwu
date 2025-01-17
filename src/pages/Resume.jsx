import {Button} from 'react-bootstrap';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <a href="https://drive.google.com/file/d/1b_FuCfbzT8nBut0zWYt8Gc6YV_OEPZtZ/view?usp=sharing" download><Button>Download Resume</Button></a>
      <h3 className="mt-4">My Proficiencies</h3>
      <div className="skills">
      <i className="fa-brands fa-html5"></i>
      <i className="fa-brands fa-css3-alt"></i>
      <i className="fa-brands fa-react"></i>
      <i className="fa-brands fa-node"></i>
      <i className="fa-brands fa-js-square"></i>
      <i className="fa-brands fa-bootstrap"></i>
      </div>
    </div>
  )
}
