import React from "react";
import { Container } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css"; // Import your custom CSS for the gallery

const photos = [
  {
    original:
      "https://lh4.googleusercontent.com/4-I3sVp4rPydGt8-R4J1LiBnq7r1VX7AR4lNl6FYv2zpA10ew6E_Tx5xyIl3CFQ8xJSzWnZJp7Kes6DqEHCxGoHvSbjpu4l3UKzYT8h3CiupCXJWHBGHPTwSkVKI7JHlgA=w1280",
    thumbnail:
      "https://lh4.googleusercontent.com/4-I3sVp4rPydGt8-R4J1LiBnq7r1VX7AR4lNl6FYv2zpA10ew6E_Tx5xyIl3CFQ8xJSzWnZJp7Kes6DqEHCxGoHvSbjpu4l3UKzYT8h3CiupCXJWHBGHPTwSkVKI7JHlgA=w1280",
    originalAlt: "Image 1",
    thumbnailAlt: "Thumbnail 1",
    description:
      "I received  Forum 86 Research Excellence Award 2022 in Early Researcher Category in recognition of my outstanding academic achievement in the field of ‘Wireless Communications’. ",
  },
  {
    original:
      "https://www.ece.rutgers.edu/sites/default/files/styles/image-large/public/IMG_4037.JPG?itok=9h09SkX7",
    thumbnail:
      "https://www.ece.rutgers.edu/sites/default/files/styles/image-large/public/IMG_4037.JPG?itok=9h09SkX7",
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
