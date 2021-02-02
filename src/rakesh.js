import React from "react";
import "./index";
import Footer from "./Footer";

function Rakesh() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Careers
                </a>
              </li>
              <svg
                width="0.6em"
                height="0.6em"
                viewBox="0 0 16 16"
                className="bi bi-circle-fill ml-1 mt-3 pt-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News
                </a>
              </li>
              <svg
                width="0.6em"
                height="0.6em"
                viewBox="0 0 16 16"
                className="bi bi-circle-fill ml-1 mt-3 pt-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
              <svg
                width="0.6em"
                height="0.6em"
                viewBox="0 0 16 16"
                className="bi bi-circle-fill ml-1 mt-3 pt-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Investors
                </a>
              </li>

              <li className="nav-item">
                <span
                  className="fa fa-globe ml-1 mt-2 pt-1"
                  aria-hidden="true"
                ></span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Worldwide
                </a>
              </li>
              <li className="nav-item">
                <span
                  className="fa fa-search ml-1 mt-2 pt-1"
                  aria-hidden="true"
                ></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="showcase1">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item carousel-image-1 active">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-left col-md-3 mt-3">
                  <h1 className="display-3">Welcome</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur at blanditiis atque iste itaque natus aperiam
                    corrupti soluta nobis nemo!
                  </p>
                  <a href="#" className="btn btn-success btn-lg">
                    See How
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-image-2">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-left col-md-3">
                  <h1 className="display-3">Heading 2</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur at blanditiis atque iste itaque natus aperiam
                    corrupti soluta nobis nemo!
                  </p>
                  <a href="#" className="btn btn-success bt-lg">
                    See How
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-image-3">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-left col-md-3">
                  <h1 className="display-3">Heading 3</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur at blanditiis atque iste itaque natus aperiam
                    corrupti soluta nobis nemo!
                  </p>
                  <a href="#" className="btn btn-success bt-lg">
                    See How
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-image-4">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-left col-md-3">
                  <h1 className="display-3">Heading 4</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur at blanditiis atque iste itaque natus aperiam
                    corrupti soluta nobis nemo!
                  </p>
                  <a href="#" className="btn btn-success bt-lg">
                    See How
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-image-5">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-left col-md-3">
                  <h1 className="display-3">Heading 5</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur at blanditiis atque iste itaque natus aperiam
                    corrupti soluta nobis nemo!
                  </p>
                  <a href="#" className="btn btn-success bt-lg">
                    See How
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-image-6">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-left col-md-3">
                  <h1 className="display-3">Heading 6</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur at blanditiis atque iste itaque natus aperiam
                    corrupti soluta nobis nemo!
                  </p>
                  <a href="#" className="btn btn-success bt-lg">
                    See How
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              className="bi bi-caret-left"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              className="bi bi-caret-right"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
              />
            </svg>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Rakesh;
