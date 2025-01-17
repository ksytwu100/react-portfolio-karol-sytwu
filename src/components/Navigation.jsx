import { Link, useLocation } from "react-router-dom";


export default function Navigation() {
  let location = useLocation();

  console.log(location.pathname);

  return (
    <nav>
      <Link to="/" className={`${location.pathname === '/'? 'highlight' : ''}`}>About</Link>
      <Link to="/portfolio" className={`${location.pathname === '/portfolio'? 'highlight' : ''}`}>Portfolio</Link>
      <Link to="/contact" className={`${location.pathname === '/contact'? 'highlight' : ''}`}>Contact</Link>
      <Link to="/resume" className={`${location.pathname === '/resume'? 'highlight' : ''}`}>Resume</Link>  
    </nav>
  )
}
