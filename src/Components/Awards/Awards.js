import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import awardsData from "./Awards.json";
import "./Awards.css";

export default function Awards() {
  return (
    <div className="containerText">
      <Typography paragraph>
        <h3 className="py-3">Awards</h3>
        <div className="text">
          <ol className="ordered-list">
            {awardsData.awards.map((award, index) => (
              <li key={index}>
                {award.description}{" "}
                {award.link && (
                  <a href={award.link} target="_blank" rel="noopener noreferrer">
                    {award.link}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </Typography>
    </div>
  );
}

Awards.propTypes = {
  awards: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  )
};
