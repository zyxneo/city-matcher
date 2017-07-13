import React from "react";
import style from "./footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>

        <div className={`${style.footerTop} padding margin-bottom`}>
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-4 text-center-xs text-center-sm text-right">
              <div className={`${style.marginQuarter} ${style.textXl} ${style.textBold}`}>zyxneo gefällt Dir?</div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-4 text-center text-white">
              <a className={`${style.circleMdDouble} ${style.linkGoogle}`} href="mailto:zyxneo@gmail.com?subject=Kununu frontend test" target="_blank" rel="noopener noreferrer">
                <i className="icon-google3">
                  <span className="sr-only">E-Mail</span>
                </i>
              </a>
              <a className={`${style.circleMdDouble} ${style.linkGithub}`} href="https://github.com/zyxneo" target="_blank"rel="noopener noreferrer">
                <i className="icon-github">
                  <span className="sr-only">Github</span>
                </i>
              </a>
              <a className={`${style.circleMdDouble} ${style.linkLinkedin}`} href="https://www.linkedin.com/in/bal%C3%A1zs-szil%C3%A1gyi-112987121/" target="_blank"rel="noopener noreferrer">
                <i className="icon-linkedin">
                  <span className="sr-only">Linkedin</span>
                </i>
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-2">
              <div className="h3 text-muted hidden-xs no-margin-top">Techniques used</div>
              <ul className={`${style.footerNav} nav-sm`} role="navigation">
                <li>
                  <a href="https://kununu.github.io/nukleus">kununu - nukleus</a>
                  <a href="https://github.com/css-modules/css-modules">css-modules</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-2">
              <div className="h3 text-muted hidden-xs no-margin-top">Techniques not used</div>
              <ul className={`${style.footerNav} nav-sm`} role="navigation">
                <li>
                  <a href="http://bem.info">BEM</a>
                </li>
                <li>
                  <a href="http://cssnext.io/">CSSNext</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-2">
              <div className="h3 text-muted hidden-xs no-margin-top">Partially used</div>
              <ul className={`${style.footerNav} nav-sm`} role="navigation">
                <li>
                  <a href="http://getbootstrap.com/">Bootstrap</a>
                </li>
                <li>
                  <a href="http://leejordan.github.io/reflex/docs/">Reflex</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${style.footerNavbar}`}>
            <p>This project on <a href="https://github.com/zyxneo/city-matcher/">github</a></p>
          </div>
        </div>
      </footer>
    );
  }
}
