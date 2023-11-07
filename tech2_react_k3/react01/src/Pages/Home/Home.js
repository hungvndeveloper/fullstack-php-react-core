import React from "react";
import Headers from "./Components/Headers/Headers";
import Preloader from "./Components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      {/*====== PRELOADER PART ENDS ======*/}
      {/*====== HEADER PART START ======*/}
      <Headers />
      {/*====== HEADER PART ENDS ======*/}
      {/*====== BRAND PART START ======*/}
      <div className="brand-area pt-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-logo d-flex align-items-center justify-content-center justify-content-md-between">
                <div
                  className="single-logo mt-30 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img src="/assets/images/brands/uideck.svg" alt="brand" />
                </div>
                {/* single logo */}
                <div
                  className="single-logo mt-30 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <img src="/assets/images/brands/ayroui.svg" alt="brand" />
                </div>
                {/* single logo */}
                <div
                  className="single-logo mt-30 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <img src="/assets/images/brands/graygrids.svg" alt="brand" />
                </div>
                {/* single logo */}
                <div
                  className="single-logo mt-30 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <img src="/assets/images/brands/lineicons.svg" alt="brand" />
                </div>
                {/* single logo */}
                <div
                  className="single-logo mt-30 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  <img
                    src="/assets/images/brands/ecommerce-html.svg"
                    alt="brand"
                  />
                </div>
                {/* single logo */}
              </div>
              {/* brand logo */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/*====== BRAND PART ENDS ======*/}
      {/*====== SERVICES PART START ======*/}
      <section id="features" className="services-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center pb-40">
                <div className="line m-auto" />
                <h3 className="title">
                  Clean and simple design,
                  <span> Comes with everything you need to get started!</span>
                </h3>
              </div>
              {/* section title */}
            </div>
          </div>
          {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="services-icon">
                  <img
                    className="shape"
                    src="/assets/images/services/services-shape.svg"
                    alt="shape"
                  />
                  <img
                    className="shape-1"
                    src="/assets/images/services/services-shape-1.svg"
                    alt="shape"
                  />
                  <i className="lni lni-baloon"> </i>
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <a href="javascript:void(0)">Clean</a>
                  </h4>
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.
                  </p>
                  <a className="more" href="javascript:void(0)">
                    Learn More <i className="lni lni-chevron-right"> </i>
                  </a>
                </div>
              </div>
              {/* single services */}
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="services-icon">
                  <img
                    className="shape"
                    src="/assets/images/services/services-shape.svg"
                    alt="shape"
                  />
                  <img
                    className="shape-1"
                    src="/assets/images/services/services-shape-2.svg"
                    alt="shape"
                  />
                  <i className="lni lni-cog"> </i>
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <a href="javascript:void(0)">Robust</a>
                  </h4>
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.
                  </p>
                  <a className="more" href="javascript:void(0)">
                    Learn More <i className="lni lni-chevron-right"> </i>
                  </a>
                </div>
              </div>
              {/* single services */}
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="services-icon">
                  <img
                    className="shape"
                    src="/assets/images/services/services-shape.svg"
                    alt="shape"
                  />
                  <img
                    className="shape-1"
                    src="/assets/images/services/services-shape-3.svg"
                    alt="shape"
                  />
                  <i className="lni lni-bolt-alt"> </i>
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <a href="javascript:void(0)">Powerful</a>
                  </h4>
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.
                  </p>
                  <a className="more" href="javascript:void(0)">
                    Learn More <i className="lni lni-chevron-right"> </i>
                  </a>
                </div>
              </div>
              {/* single services */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </section>
      {/*====== SERVICES PART ENDS ======*/}
      <section id="about">
        {/*====== ABOUT PART START ======*/}
        <div className="about-area pt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-content mt-50 wow fadeInLeftBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="section-title">
                    <div className="line" />
                    <h3 className="title">
                      Quick &amp; Easy <span>to Use Bootstrap Template</span>
                    </h3>
                  </div>
                  {/* section title */}
                  <p className="text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    seiam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                  </p>
                  <a href="javascript:void(0)" className="main-btn">
                    Try it Free
                  </a>
                </div>
                {/* about content */}
              </div>
              <div className="col-lg-6">
                <div
                  className="about-image text-center mt-50 wow fadeInRightBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="/assets/images/about/about1.svg" alt="about" />
                </div>
                {/* about image */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
          <div className="about-shape-1">
            <img src="/assets/images/about/about-shape-1.svg" alt="shape" />
          </div>
        </div>
        {/*====== ABOUT PART ENDS ======*/}
        {/*====== ABOUT PART START ======*/}
        <div className="about-area pt-70">
          <div className="about-shape-2">
            <img src="/assets/images/about/about-shape-2.svg" alt="shape" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-last">
                <div
                  className="about-content ms-lg-auto mt-50 wow fadeInLeftBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="section-title">
                    <div className="line" />
                    <h3 className="title">
                      Modern design <span> with Essential Features</span>
                    </h3>
                  </div>
                  {/* section title */}
                  <p className="text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    seiam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                  </p>
                  <a href="javascript:void(0)" className="main-btn">
                    Try it Free
                  </a>
                </div>
                {/* about content */}
              </div>
              <div className="col-lg-6 order-lg-first">
                <div
                  className="about-image text-center mt-50 wow fadeInRightBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="/assets/images/about/about2.svg" alt="about" />
                </div>
                {/* about image */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
        </div>
        {/*====== ABOUT PART ENDS ======*/}
        {/*====== ABOUT PART START ======*/}
        <div className="about-area pt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-content mt-50 wow fadeInLeftBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="section-title">
                    <div className="line" />
                    <h3 className="title">
                      <span>Crafted for</span> SaaS, App and Software Landing
                      Page
                    </h3>
                  </div>
                  {/* section title */}
                  <p className="text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    seiam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                  </p>
                  <a href="javascript:void(0)" className="main-btn">
                    Try it Free
                  </a>
                </div>
                {/* about content */}
              </div>
              <div className="col-lg-6">
                <div
                  className="about-image text-center mt-50 wow fadeInRightBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="/assets/images/about/about3.svg" alt="about" />
                </div>
                {/* about image */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
          <div className="about-shape-1">
            <img src="/assets/images/about/about-shape-1.svg" alt="shape" />
          </div>
        </div>
        {/*====== ABOUT PART ENDS ======*/}
      </section>
      {/*====== VIDEO COUNTER PART START ======*/}
      <section id="facts" className="video-counter pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-last">
              <div
                className="counter-wrapper mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="counter-content">
                  <div className="section-title">
                    <div className="line" />
                    <h3 className="title">
                      Cool facts <span> about this app</span>
                    </h3>
                  </div>
                  {/* section title */}
                  <p className="text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    seiam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                {/* counter content */}
                <div className="row no-gutters">
                  <div className="col-4">
                    <div className="single-counter counter-color-1 d-flex align-items-center justify-content-center">
                      <div className="counter-items text-center">
                        <span
                          className="count countup text-uppercase"
                          cup-end={125}
                        />
                        <p className="text">Downloads</p>
                      </div>
                    </div>
                    {/* single counter */}
                  </div>
                  <div className="col-4">
                    <div className="single-counter counter-color-2 d-flex align-items-center justify-content-center">
                      <div className="counter-items text-center">
                        <span
                          className="count countup text-uppercase"
                          cup-end={87}
                        />
                        <p className="text">Active Users</p>
                      </div>
                    </div>
                    {/* single counter */}
                  </div>
                  <div className="col-4">
                    <div className="single-counter counter-color-3 d-flex align-items-center justify-content-center">
                      <div className="counter-items text-center">
                        <span
                          className="count countup text-uppercase"
                          cup-end={59}
                        />
                        <p className="text">User Rating</p>
                      </div>
                    </div>
                    {/* single counter */}
                  </div>
                </div>
                {/* row */}
              </div>
              {/* counter wrapper */}
            </div>
            <div className="col-lg-6">
              <div
                className="video-content mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img
                  className="dots"
                  src="/assets/images/video/dots.svg"
                  alt="dots"
                />
                <div className="video-wrapper">
                  <div className="video-image">
                    <img src="/assets/images/video/video.png" alt="video" />
                  </div>
                  <div className="video-icon">
                    <a
                      href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                      className="video-popup glightbox"
                    >
                      <i className="lni lni-play"> </i>
                    </a>
                  </div>
                </div>
                {/* video wrapper */}
              </div>
              {/* video content */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </section>
      {/*====== VIDEO COUNTER PART ENDS ======*/}
      {/*====== FOOTER PART START ======*/}
      <footer id="footer" className="footer-area pt-120">
        <div className="container">
          <div
            className="subscribe-area wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="subscribe-content mt-45">
                  <h2 className="subscribe-title">
                    Subscribe Our Newsletter <span>get reguler updates</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="subscribe-form mt-50">
                  <form action="#">
                    <input type="text" placeholder="Enter eamil" />
                    <button className="main-btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
            {/* row */}
          </div>
          {/* subscribe area */}
          <div className="footer-widget pb-100">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="footer-about mt-50 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <a className="logo" href="javascript:void(0)">
                    <img src="/assets/images/logo/logo.svg" alt="logo" />
                  </a>
                  <p className="text">
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr,
                    sederfs diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam.
                  </p>
                  <ul className="social">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-facebook-filled"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-twitter-filled"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-instagram-filled"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-linkedin-original"> </i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* footer about */}
              </div>
              <div className="col-lg-5 col-md-7 col-sm-12">
                <div className="footer-link d-flex mt-50 justify-content-sm-between">
                  <div
                    className="link-wrapper wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    <div className="footer-title">
                      <h4 className="title">Quick Link</h4>
                    </div>
                    <ul className="link">
                      <li>
                        <a href="javascript:void(0)">Road Map</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Refund Policy</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Terms of Service</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Pricing</a>
                      </li>
                    </ul>
                  </div>
                  {/* footer wrapper */}
                  <div
                    className="link-wrapper wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                  >
                    <div className="footer-title">
                      <h4 className="title">Resources</h4>
                    </div>
                    <ul className="link">
                      <li>
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Page</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Portfolio</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Blog</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Contact</a>
                      </li>
                    </ul>
                  </div>
                  {/* footer wrapper */}
                </div>
                {/* footer link */}
              </div>
              <div className="col-lg-3 col-md-5 col-sm-12">
                <div
                  className="footer-contact mt-50 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.8s"
                >
                  <div className="footer-title">
                    <h4 className="title">Contact Us</h4>
                  </div>
                  <ul className="contact">
                    <li>+809272561823</li>
                    <li>info@gmail.com</li>
                    <li>www.yourweb.com</li>
                    <li>
                      123 Stree New York City , United <br />
                      States Of America 750.
                    </li>
                  </ul>
                </div>
                {/* footer contact */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* footer widget */}
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright d-sm-flex justify-content-between">
                  <div className="copyright-content">
                    <p className="text">
                      Designed and Developed by
                      <a href="https://uideck.com" rel="nofollow">
                        UIdeck
                      </a>
                    </p>
                  </div>
                  {/* copyright content */}
                </div>
                {/* copyright */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* footer copyright */}
        </div>
        {/* container */}
        <div id="particles-2" />
      </footer>
      {/*====== FOOTER PART ENDS ======*/}
    </>
  );
}
