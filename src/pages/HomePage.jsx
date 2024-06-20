import ImageCarousel from "../components/ImageCarousel";
import { slides } from "../data/carouseldata";

export const HomePage = () => {
  const containerStyles = {
    maxWidth: "1200px",
    width: "100%",
    aspectRatio: "10 / 6",
    margin: "0 auto",
  };

  return (
    <>
      <h1>Hello!</h1>
      <div style={containerStyles}>
        <ImageCarousel slides={slides}></ImageCarousel>
      </div>
    </>
  );
};
