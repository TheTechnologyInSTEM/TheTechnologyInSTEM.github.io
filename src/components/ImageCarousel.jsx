import React from "react";

const slides = [
  {
    image: "https://i.postimg.cc/pT93jhPh/portrait-of-black-man.jpg",
    alt: "Slide 1",
    caption1: "Made for Students, by Students",
    caption2: "The T in STEM",
    buttonText: "About Us",
    buttonLink: "about",
  },
  {
    image: "https://i.postimg.cc/t45bRjmw/Untitled-presentation-2.png",
    alt: "Slide 2",
    caption1: "Creating Opportunities Through Code",
    caption2: "In-Person Programs",
    buttonText: "See Where",
    buttonLink: "program",
  },
  {
    image: "https://i.postimg.cc/dtWRbW2F/pexels-francesco-ungaro-1525041.jpg",
    alt: "Slide 3",
    caption1: "Python, Java, & Web Development",
    caption2: "Interested?",
    buttonText: "Start Learning Now",
    buttonLink: "learn",
  },
  {
    image: "https://i.postimg.cc/jjrSjTKr/unnamed-1.jpg",
    alt: "Slide 4",
    caption1: "Featured",
    caption2: "Learning Page",
    buttonText: "Read Now",
    buttonLink: "learn/page",
  },
  {
    image: "https://i.postimg.cc/t45bRjmw/Untitled-presentation-2.png",
    alt: "Slide 5",
    caption1: "Want to teach about tech?",
    caption2: "Let's Collaborate!",
    buttonText: "Contact Us",
    buttonLink: "contact",
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
            <div className="carousel-caption translate-middle start-50 top-50 w-50">
              <p className="mt-5 fs-1 text-uppercase">{slide.caption1}</p>
              <h1 className="display-1 fw-bolder text-capitalize">
                {slide.caption2}
              </h1>
              <a href={slide.buttonLink}>
                <button className="btn btn-primary px-4 py-2 fs-3 mt-5">
                  {slide.buttonText}
                </button>
              </a>
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
