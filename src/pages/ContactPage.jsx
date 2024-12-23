import Header from "../components/Header";
import Footer from "../components/Footer";
import TypedComponent from "../components/TypedComponent";

export const ContactPage = () => {
  let contacttext = ["Contact Us", "Contact Us"];
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="container-fluid pt-8">
        <div className="row mx-7">
          <div className="col text-center">
            <div className="">
              <h1 className="fw-bold">Get In Touch</h1>
              <h3>
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
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
