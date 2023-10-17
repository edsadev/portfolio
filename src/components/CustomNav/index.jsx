import { Link } from "react-router-dom";

const index = () => {
  // Todo: Send to contact page

  return (
    <nav className="absolute">
      <ul>
        <li><Link to="/"><img /></Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Let&apos;s talk</Link></li>
      </ul>
    </nav>
  )
}

export default index
