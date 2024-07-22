import ImageCarousel from "../components/ImageCarousel";
import AnimatedHeader from "../components/AnimatedHeader";

export const HomePage = () => {
  return (
    <AnimatedHeader>
      <h1 className="logo fw-bold text-light">The T in STEM</h1>
      <ImageCarousel></ImageCarousel>
    </AnimatedHeader>
  );
};
