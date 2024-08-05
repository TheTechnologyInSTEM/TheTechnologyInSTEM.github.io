import Header from "../components/Header";
import Footer from "../components/Footer";

export const ProgramPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3" text="Programs"></Header>
      <div className="container-fluid pt-6">
        <div className="row text-center pb-3">
          <h1 className="fw-bold">Community Impact</h1>
        </div>
        <div className="row">
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/zGYqPxHP/unnamed-10.jpg"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/1RNtCnYX/unnamed-16.jpg"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/cCYLr28w/unnamed-17.jpg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/MTnT8v6s/unnamed-14.jpg"
            />
          </div>
          <div className="col">
            <div className="m-5 text-center">
              <h1 className="fw-bold">The T in STEM</h1>
              <p className="fs-3">write something here</p>
            </div>
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/tT8gRp79/unnamed-15.jpg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/xC8Qb7Bq/unnamed-13.jpg"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/Cxnmd4vY/unnamed-6-transformed.jpg"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/hGScKhrL/unnamed-7.jpg"
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
