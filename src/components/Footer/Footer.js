import './Footer.css'
import Social from '../Social/Social'

import vader from '../../assets/images/darth-vader.jpg'

export default function Footer () {
  return (
    <footer className="footer">
      <img src={vader} alt="" className="footer__img" />
      <div className="social-section">
        <p className="social__text">FOLLOW STAR WARS:</p>
        <Social />
      </div>
      <div className="info-section">
        <p className="copy">TM & © Lucasfilm Ltd. All Rights Reserved</p>
        <ul className="legal">
          <li className="legal__link"><a href="#!">Terms of Use</a></li>
          <li className="legal__link"><a href="#!">Additional Content Information</a></li>
          <li className="legal__link"><a href="#!">Privacy Policy</a></li>
          <li className="legal__link"><a href="#!">Children’s Online Privacy Policy</a></li>
          <li className="legal__link"><a href="#!">Your California Privacy Rights</a></li>
          <li className="legal__link"><a href="#!">Star Wars at shopDisney</a></li>
          <li className="legal__link"><a href="#!">Star Wars Helpdesk</a></li>
          <li className="legal__link"><a href="#!">Interest-Based Ads</a></li>
          <li className="legal__link"><a href="#!">Do Not Sell My Personal Information</a></li>
        </ul>
      </div>
    </footer>
  )
}
