import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">

        <div class="bg-white padding margin-bottom">
          <div class="row">
            <div class="col-sm-12 col-md-3 col-lg-4 text-center-xs text-center-sm text-right">
              <div class="margin-quarter text-xl text-bold no-wrap">
                  zyxneo gefällt Dir?
              </div>
            </div>
            <div class="col-sm-12 col-md-8 col-lg-4 text-center text-white">
              <a class="circle-md-double link-google" href="mailto:zyxneo@gmail.com?subject=Kununu frontend test" target="_blank"><i class="icon-google3"><span class="sr-only">E-Mail</span></i></a>
              <a class="circle-md-double link-github" href="https://github.com/zyxneo" target="_blank"><i class="icon-github"><span class="sr-only">Github</span></i></a>
              <a class="circle-md-double link-linkedin" href="https://www.linkedin.com/in/bal%C3%A1zs-szil%C3%A1gyi-112987121/" target="_blank"><i class="icon-linkedin"><span class="sr-only">Linkedin</span></i></a>
            </div>
          </div>
        </div>

        <div class="container-fluid">
         footer
        </div>
      </footer>
    )
  }
}
