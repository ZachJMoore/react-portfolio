import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <section className="contact-location">
            <h2>NY</h2>
            <p>Southern Tier</p>
        </section>
        <section className="contact-information">
            <a href="tel:507-722-0280">(507) 722-0280</a>
            <a href="mailto:Get3moore@gmail.com">Get3Moore@gmail.com</a>
            <section className="contact-social">
                <a href="https://www.instagram.com/zach_jmoore_/" target="_blank" rel="noopener noreferrer"><i className="min-instagram"></i></a>
                <a href="https://www.linkedin.com/in/zach-moore-/" target="_blank" rel="noopener noreferrer"><i className="min-linkedin"></i></a>
                <a href="https://github.com/ZachJMoore" target="_blank" rel="noopener noreferrer"><i className="min-github-circled"></i></a>
            </section>
        </section>
      </div>
    );
  }
}

export default Contact;