import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import PropTypes from "prop-types";
import { TextCursor } from "lucide-react";

const TypedComponent = ({ strings, doesLoop }) => {
  // Create a reference to store the DOM element containing the animation
  const typedElementRef = useRef(null);

  useEffect(() => {
    // Options for the typed.js instance
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: doesLoop,
      showCursor: false,
    };

    // Initialize typed.js on the referenced element
    const typed = new Typed(typedElementRef.current, options);

    // Cleanup typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, [strings]);

  return <span ref={typedElementRef} />;
};

TypedComponent.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TypedComponent.defaultProps = {
  strings: ["Default string 1", "Default string 2"],
};

export default TypedComponent;
