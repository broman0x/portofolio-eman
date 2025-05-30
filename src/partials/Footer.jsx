import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p>Sulaeman &copy; 2024</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/broman0x"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eman-pedia-b6862b33b/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
          <a
            href="https://www.instagram.com/0xeman/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="foot-icon" />
            &nbsp;&nbsp;Instagram
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
