import Header from "../components/Header";
import Footer from "../components/Footer";
import TypedComponent from "../components/TypedComponent";

export const ContactPage = () => {
  let contacttext = ["Contact Us", "Contact Us"];
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="container-fluid mt-5 pt-3">
        <div class="row text-center py-3">
          <h1>
            <TypedComponent
              strings={contacttext}
              doesLoop={false}
            ></TypedComponent>
          </h1>
        </div>

        <div className="row mx-7">
          <div className="col-5">
            <img
              src="https://i.postimg.cc/j2Rts40h/Copy-of-The-T-IN-STEM.png"
              className="img-fluid"
            ></img>
          </div>
          <div className="col text-center mx-10">
            <div className="my-auto">
              <h1 className="fw-bold">Get In Touch</h1>
              <p>
                Questions? Comments? Concerns? <br />
                <br />
                Please feel free to share! Provided below are our email, our
                instagram account, and google forms you can use to submit
                feedback on our online curriculums!
                <br />
                <br />
                Email:{" "}
                <a href="mailto:thetechinstem@gmail.com">
                  thetechinstem@gmail.com
                </a>
                <br />
                Instagram:{" "}
                <a href="https://www.instagram.com/granada_tis/?hl=en">
                  @granada_tis
                </a>
                <br />
                <br />
                <p>
                  Curriculum Feedback: <a href="">Click Here</a>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
