import Header from "../components/Header";
import Footer from "../components/Footer";

export const ProgramPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3" text="Programs"></Header>
      <div className="container-fluid pt-6 pb-5">
        <div className="row text-center pb-3">
          <h1 className="fw-bold">Community Impact</h1>
        </div>
        <div className="row pt-5">
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/WbZ1qGkH/unnamed-27.jpg"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/6pN5r8V5/unnamed-28.jpg"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/xjhddxcm/unnamed-29.jpg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/wjK3wfzz/unnamed-25.jpg"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/xC8Qb7Bq/unnamed-13.jpg"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/vHxcLRpX/unnamed-26.jpg"
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
