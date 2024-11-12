import React from "react";

const YoutubeEmbed = ({ videoId }) => {
  return (
    <div className="text-center">
      <div class="alert alert-primary" role="alert">
        Check out our video on this topic below!
      </div>
      <div
        style={{
          position: "relative",
          paddingBottom: "16.9rem",
          overflow: "hidden",
          width: "30rem",
          margin: "auto",
        }}
      >
        <iframe
          style={{ position: "absolute", top: "0", left: "0", border: "0" }}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeEmbed;
