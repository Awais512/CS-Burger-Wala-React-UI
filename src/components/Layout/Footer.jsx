import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>CS Burgerwala</h2>
        <p>We are trying to give you the best burger in town</p>
        <br />
        <em>We give attention to real feedback.</em>
        <strong>All rights reserved @CS Burgerwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://www.github.com/awais512">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
