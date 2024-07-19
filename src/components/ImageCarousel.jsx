import React from "react";

const slides = [
  {
    image: "https://i.postimg.cc/pT93jhPh/portrait-of-black-man.jpg",
    alt: "Slide 1",
    caption1: "Destination activities",
    caption2: "Go glacier hiking",
    buttonText: "See Where",
    buttonTarget: "#booking-modal",
  },
  {
    image: "https://i.postimg.cc/t45bRjmw/Untitled-presentation-2.png",
    alt: "Slide 2",
    caption1: "Destination activities",
    caption2: "Go glacier hiking",
    buttonText: "See Where",
    buttonTarget: "#booking-modal",
  },
  {
    image: "https://i.postimg.cc/dtWRbW2F/pexels-francesco-ungaro-1525041.jpg",
    alt: "Slide 3",
    caption1: "Destination activities",
    caption2: "Go glacier hiking",
    buttonText: "Book a tour",
    buttonTarget: "#booking-modal",
  },
  {
    image: "https://i.postimg.cc/jjrSjTKr/unnamed-1.jpg",
    alt: "Slide 4",
    caption1: "Destination activities",
    caption2: "Go glacier hiking",
    buttonText: "Book a tour",
    buttonTarget: "#booking-modal",
  },
  {
    image: "https://i.postimg.cc/t45bRjmw/Untitled-presentation-2.png",
    alt: "Slide 5",
    caption1: "Want to teach about tech?",
    caption2: "Let's Collaborate!",
    buttonText: "Contact Us",
    buttonTarget: "#booking-modal",
  },
];

function ImageCarousel() {
  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item c-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.image}
              className="d-block w-100 c-img"
              alt={slide.alt}
            />
            <div className="carousel-caption translate-middle start-50 top-50">
              <p className="mt-5 fs-1 text-uppercase">{slide.caption1}</p>
              <h1 className="display-1 fw-bolder text-capitalize">
                {slide.caption2}
              </h1>
              <button
                className="btn btn-primary px-4 py-3 fs-2 mt-5"
                data-bs-toggle="modal"
                data-bs-target={slide.buttonTarget}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageCarousel;
