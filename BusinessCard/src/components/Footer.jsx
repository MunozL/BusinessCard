import "font-awesome/css/font-awesome.min.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <a
        className="footerIcon"
        href="https://www.linkedin.com/in/lizette-munoz-3b40b8235/"
      >
        <FaLinkedin size={25} color="white" />
      </a>
      <a className="footerIcon" href="https://github.com/MunozL">
        <FaGithub size={25} color="white" />
      </a>
    </footer>
  );
}
