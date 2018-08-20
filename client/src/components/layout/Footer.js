import React, { Component } from 'react';
import FooterImage from '../../images/sakis-footer.png';

class Footer extends Component {
 
  render() {

    return (
      <footer className="footer-distributed">
    <img id="bot-image" src={FooterImage}/>
    <div id="kappa-keepo-mode">
        <div className="footer-left">

          <p style={{color: "#fff"}}>Newsletter</p>
          <form action="#" method="post">
            <input type="text" name="email" placeholder="Email" />
            <button>Subscribe</button>
          </form>

            
        </div>
        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>175 Aristotelous</span> Thessaloniki, Greece</p>
            </div>
            <div>
                <i className="fa fa-phone"></i>
                <p>+30 2310 800 423</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:info@worldpartytraveller.com">info@worldpartytraveller.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About the company</span> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>
            <hr />
            <p className="footer-company-name">World Party Traveller &copy; 2018</p>
            <div className="footer-icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-github"></i></a>
            </div>
        </div>
    </div>
</footer>
   
    );
  }
}

export default Footer;