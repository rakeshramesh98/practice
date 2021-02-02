import React from "react";
export default function Footer() {
  return (
    <div>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Get in Touch
                  </h3>
                  <p>
                    Don’t miss any updates of our new templates and extensions.!
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Links</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="/Pageheaders">Pageheaders</a>
                    </li>
                    <li>
                      <a href="/Paginations">Paginations</a>
                    </li>
                    <li>
                      <a href="/Menus">Menus</a>
                    </li>
                    <li>
                      <a href="/Dropdowns">Dropdowns</a>
                    </li>
                    <li>
                      <a href="/Buttons">Buttons</a>
                    </li>
                    <li>
                      <a href="/Breadcrumbs">Breadcrumbs</a>
                    </li>
                    <li>
                      <a href="/Navigations">Navigations</a>
                    </li>
                    <li>
                      <a href="/Typo">Typography</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; conditions</a>
                    </li>
                    <li>
                      <a href="#">Reporting</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                    <li>
                      <a href="#">Support Policy</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Team Solutions
                  </h3>
                  <div className="f_social_icon">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-pinterest"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">
                  © Rakesh Inc.. 2021 All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
