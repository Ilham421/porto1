import React from "react";

const Footer = () => {

  return (
    <footer className="footer-distributed">
        <div className="footer-left ">
            <h3>Junior Web <span>Developer</span></h3>
            <p className="footer-links">
                <a href="/">Home </a>
                |
                <a href="/about"> About</a>
                |
                <a href="/skills"> Skills </a>
                |
                <a href="/projects"> Project </a>
                |
                <a href="/contact"> Contact </a>
            </p>
            <p className="footer-company-name">Copyright &copy; <span className="yearsCopyright"></span> <strong>MohamadIlham</strong> All rights reserved</p>
        </div>
        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>Bekasi, West Java</span>
                    Indonesian</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+62 813 8508 5695</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:ilhammohamad614@gmail.com">ilhammohadmad614@gmail.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About the portofolio</span>
                <strong>Mohamad Ilham :</strong> I am student majoring in Software Engineering from the 1st Public Vocational School Babelan.
            </p>
            <div className="footer-icons">
                <a href="https://facebook.com/mohamad.ilham.7334504" title="Facebook" target="_blink"><i className="bi bi-facebook"></i></a>
                <a href="https://instagram.com/ham_aj2" title="Instagram" target="_blink"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/mohamad-ilham-839163242" title="Linkedin" target="_blink"><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/Ilham421" title="Github" target="_blink"><i className="bi bi-github"></i></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
