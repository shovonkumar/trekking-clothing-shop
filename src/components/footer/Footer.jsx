import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-white d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <h5>&copy;Trekking</h5>
        <div className="text-center text-sm-end">
          <ul className="d-flex">
            <li>
              <a href="#">credits</a>
            </li>
            <li>
              <a href="#">privacy</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#" style={{ borderRight: "none", paddingRight: "0" }}>
                contact
              </a>
            </li>
          </ul>
          <span>
            Made By <a href="https://shovonkumar.netlify.app">Shovon</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
