import React from "react";
import "./Contact.css"; // Import your custom CSS file for styling

const GoogleMaps = () => (
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1357.6134710183333!2d90.38887062026699!3d23.72496926508257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8dd3d3673e7%3A0xf999f4771c24183e!2sInstitute%20of%20Appropriate%20Technology%20(IAT)!5e0!3m2!1sen!2sbd!4v1690279375724!5m2!1sen!2sbd"
      width="600"
      height="450"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    ></iframe>
  </div>
);

export default GoogleMaps;
