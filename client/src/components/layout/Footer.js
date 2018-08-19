import React, { Component } from 'react';
import footerImage from '../../images/sakis-footer.png'

class Footer extends Component {
 
  render() {

    return (
   
        <footer className="footer-distributed">
  <img id="bot-image" src={footerImage}/>
  <div id="kappa-keepo-mode">
    <div className="footer-left">



      <p className="footer-links">
        <a href="#">Home</a> ·
        <a href="#">Blog</a> ·
        <a href="#">Pricing</a> ·
        <a href="#">About</a> ·
        <a href="#">Faq</a> ·
        <a href="#">Contact</a>
      </p>

      <p className="footer-company-name">Company Name &copy; 2015</p>

      <div className="footer-icons">

        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>

      </div>

    </div>

    <div className="footer-right">

      <p>Contact Us</p>

      <form action="#" method="post">

        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button>Send</button>

      </form>

    </div>
  </div>

</footer>
   
    );
  }
}

export default Footer;