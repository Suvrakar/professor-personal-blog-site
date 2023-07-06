import React from "react";
import { Container } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css"; // Import your custom CSS for the gallery

const photos = [
  {
    original:
      "https://lh6.googleusercontent.com/SVrExE8A29dUFFMhso1uJ2fQDGVclyVNZJi1Zi7VWFU3x-eOOu9xMOf1NAjXZxw9XRWwDe2w6u91YiL4Yrkomv4vVKAV23vMg4EYeMIJO_d7E8MnTtatjMkl3QOE_MfHhA=w1280",
    thumbnail:
      "https://lh6.googleusercontent.com/SVrExE8A29dUFFMhso1uJ2fQDGVclyVNZJi1Zi7VWFU3x-eOOu9xMOf1NAjXZxw9XRWwDe2w6u91YiL4Yrkomv4vVKAV23vMg4EYeMIJO_d7E8MnTtatjMkl3QOE_MfHhA=w1280",
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
