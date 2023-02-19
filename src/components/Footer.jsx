import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="icons">
        <div className="icon-container">
          <ion-icon className="facebook" name="logo-facebook"></ion-icon>
        </div>
        <div className="icon-container">
          <ion-icon className="tweeter" name="logo-twitter"></ion-icon>
        </div>
        <div className="icon-container">
          <ion-icon className="instagram" name="logo-instagram"></ion-icon>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright Ping. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
