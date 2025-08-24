import React from "react";
import { Container } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css"; // Import your custom CSS for the gallery

const photos = [
  {
    original:
      "https://ibb.co.com/v6dj1sxD",
    thumbnail:
      "https://ibb.co.com/v6dj1sxD",
    originalAlt: "Image 2",
    thumbnailAlt: "Thumbnail 2",
    description: "I received the Chancellor’s Leadership Award at the New Brunswick Chancellor’s Student Leadership Gala 2019.  ",
  },
  // Add more photos as needed
];

export default function Gallery() {
  const renderCustomControls = () => {
    return (
      <div className="image-gallery-custom-description">
        <h3>{photos[this.state.currentIndex].description}</h3>
      </div>
    );
  };

  return (
    <div className="containerText">
      <Container fixed>
        <ImageGallery
          items={photos}
          showPlayButton={false}
          showFullscreenButton={true}
          showNav={false}
          showBullets={true}
          autoPlay={true}
        />
      </Container>
    </div>
  );
}
