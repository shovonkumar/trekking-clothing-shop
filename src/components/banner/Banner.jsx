import bannerBg from "../../assets/images/banner.jpg";
import "./Banner.css";

const bannerStyle = {
  backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Banner = () => {
  return (
    <section className="banner" style={bannerStyle}>
      <div className="container position-relative d-flex flex-column justify-content-center align-items-center gap-1 h-100 text-white text-center">
        <h1>Our clothing , your comfort</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          <br className="d-sm-none d-md-block" /> do eiusmod tempor incididunt
          ut labore et dolore <br className="d-sm-none d-md-block" /> magna
          aliqua.
        </p>
        <i className="bx bx-chevron-down"></i>
      </div>
    </section>
  );
};

export default Banner;
