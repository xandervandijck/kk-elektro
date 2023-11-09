import './footer.scss';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="footer-content">
              <div className="row">
                {/* Sitemap/Overview Column */}
                <div className="col-lg-4 col-md-12">
                  <div className="footer-column">
                    <h4>Overzicht</h4>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Diensten</a>
                      </li>
                      <li>
                        <a href="#">Projecten</a>
                      </li>
                      <li>
                        <a href="#">Over ons</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information Column */}
                <div className="col-lg-4 col-md-12">
                  <div className="footer-column text-center">
                    <h4>Contact Information</h4>
                    <p>
                    info@kk-elektro.nl
                      <br />
                      gagelstraat 11
                      4714sh, sprundel           
                        </p>
                    <p>Email: info@kk-elektro.nl</p>
                    <p>Phone: 0165 74 87 01</p>
                  </div>
                </div>

                {/* Social Media Icons Column */}
                <div className="col-lg-4 col-md-12">
                  <div className="footer-column text-end">
                    <h4>Social media</h4>
                    <div className="social-icons">
                      <a href="#">
                        <FaFacebook />
                      </a>
                      <a href="#">
                        <FaTwitter />
                      </a>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
