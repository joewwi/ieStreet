import React from 'react'

function About() {
  return (
    <div>
          <section className="info_section">
              <div className="info_container layout_padding-top">
                  <div className="container">
                      <div className="heading_container">
                          <h2>
                              Contact Us
                          </h2>
                      </div>
                      <div className="info_main">
                          <div className="row">
                              <div className="col-md-4 col-lg-3">
                                  <div className="info_contact ">
                                      <a href="#" className="link-box">
                                          <div className="img-box">
                                              <img src="../images/location.png" alt="" />
                                          </div>
                                          <div className="detail-box">
                                              <h6>
                                                  Location
                                              </h6>
                                          </div>
                                      </a>
                                      <a href="#" className="link-box">
                                          <div className="img-box">
                                              <img src="../images/mail.png" alt="" />
                                          </div>
                                          <div className="detail-box">
                                              <h6>
                                                  ieStreet@mail.com
                                              </h6>
                                          </div>
                                      </a>
                                      <a href="#" className="link-box">
                                          <div className="img-box">
                                              <img src="../images/call.png" alt="" />
                                          </div>
                                          <div className="detail-box">
                                              <h6>
                                                  Call +01 1234567890
                                              </h6>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                              <div className="col-md-2 col-lg-3">
                                  <div className="info_link-box">
                                      <ul>
                                          <li className=" ">
                                              <a className="" href="index.html">Home <span className="sr-only">(current)</span></a>
                                          </li>
                                          <li className="">
                                              <a className="" href="about.html">About </a>
                                          </li>
                                          <li className="">
                                              <a className="" href="gallery.html">Gallery </a>
                                          </li>
                                          <li className="">
                                              <a className="" href="blog.html">Blog </a>
                                          </li>
                                          <li className="">
                                              <a className="" href="testimonial.html">Testimonial </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-md-6 ">
                                  <div className="social_box">
                                      <a href="#">
                                          <i class='bx bxl-facebook-circle'></i>
                                      </a>
                                      <a href="#">
                                          <img src="images/twitter.png" alt="" />
                                      </a>
                                      <a href="#">
                                          <img src="images/linkedin.png" alt="" />
                                      </a>
                                      <a href="#">
                                          <img src="images/instagram.png" alt="" />
                                      </a>
                                      <a href="#">
                                          <img src="images/youtube.png" alt="" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default About
