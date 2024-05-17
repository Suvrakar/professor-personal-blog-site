import React from "react";
import Typography from "@mui/material/Typography";
import { GiMaterialsScience } from 'react-icons/gi';
import content from "./Home.json";
import "./Home.css";

export default function Home() {
  return (
    <div className="containerText">
      <Typography paragraph>
        <div className="text">
          {content.intro}
        </div>
        <div className="text marginTop bebas-neue-regular">
          <h3><GiMaterialsScience style={{ marginRight: '10px' }} />Keywords/Research Interest</h3>
          {content.researchInterests}
        </div>
        <div className="text marginTop">
          <h3>Latest News</h3>
          <ul>
            {content.news.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>{content.thankYou}</div>
      </Typography>
    </div>
  );
}
