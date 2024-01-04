import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successSendMail: false,
    };
  }

  clickMe = () => {
    // Update the state to toggle successSendMail
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ successSendMail: !this.state.successSendMail });
      this.setState({ loading: false });

    }, 2000);
  };

  render() {
    const { successSendMail } = this.state;

    if (!successSendMail) {
      return (
        <div>
          <Header />
          <div className="contact-us-form">
            <div className="contact-us-form-detail">
              <header className="header-for-contact-us">
                <h1>Contact Us</h1>
              </header>

              <section className="section-of-contact-us">
                <form action="#" method="post">
                  <div className="input-name">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input"
                      placeholder="Name..." 
                    />
                  </div>
                  <div className="input-email">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input"
                      placeholder="Email..."
                      required
                    />
                  </div>
                  <div className="input-message">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="input"
                      placeholder="Message Description..."
                    ></textarea>
                  </div>
                  <div className="button-contact">
                    <a
                      href="#"
                      className="submit-button"
                      onClick={this.clickMe}
                    >
                      Send To Us
                    </a>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <div className="contact-us-form">
            <div className="contact-us-form-detail">
              <header className="header-for-contact-us-thank-you">
                <h1>
                  Thanks for your feedback.
                  <a href="/">
                    <button className="button-back-home">Back Home</button>
                  </a>
                </h1>
              </header>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default Contact;
