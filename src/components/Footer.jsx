import { FaStackOverflow,FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
        <a href="https://github.com/ksytwu100/react-portfolio-karol-sytwu">
        <FaGithub />
        </a>
       <a href="https://www.linkedin.com/in/karol-sytwu-2398179a"> 
       <FaLinkedin />
       </a>

        <a href="https://stackoverflow.com/users/29183758/karol-sytwu">
        <FaStackOverflow />
        </a>
    </footer>
  )
}
