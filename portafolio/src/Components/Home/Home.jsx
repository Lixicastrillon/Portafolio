import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <section id="section-home" className="section-home">
          <div className="text-zone">
            <h1>Hola! </h1>
            <br />
            <h1>Bienvenido a mi página web, soy Liced.</h1>
            <br />
            <h3 className="gray-text">Web full stack developer </h3>
            <br />
            <a href="#" className="contact-button">
              <div>
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">Contact me</span>
              </div>
            </a>
          </div>
          {/* <div className="scroll-down">
            <span>scroll down</span>
            <i class="bi bi-arrow-down"></i>
          </div>
          <div className="scroll-down">
            <span>scroll down</span>
            <i class="bi bi-arrow-dow"></i>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Home;
