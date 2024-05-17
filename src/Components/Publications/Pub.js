import React from "react";
import Typography from "@mui/material/Typography";
import { GrUserManager } from 'react-icons/gr';
import pubData from './Pub.json';
import "./Pub.css";

export default function Pub() {
  const { patent, journals, proceedings, demosPosters } = pubData;

  return (
    <div className="containerText">
      <Typography paragraph>
        <h3 className="py-3"><GrUserManager style={{ marginRight: '10px' }} />US PATENT</h3>
        <ol>
          {patent.map((item, index) => (
            <li key={index} className="text">
              {item.authors}, "{item.title}" {item.patent_number}, Date: {item.date}, {item.application_number}
            </li>
          ))}
        </ol>
        <br /><br />

        <h3 className="py-3"><GrUserManager style={{ marginRight: '10px' }} />JOURNALS</h3>
        <h5>Under Review:</h5>
        <ol>
          {journals.underReview.map((item, index) => (
            <li key={index} className="text">
              {item.authors}, "{item.title}", {item.details}
            </li>
          ))}
        </ol>
        <br /><br />
        <h5>Published:</h5>
        <ol>
          {journals.published.map((item, index) => (
            <li key={index} className="text">
              {item.authors}, "{item.title}", {item.journal}, {item.details}, {item.doi && <a href={item.doi}>DOI</a>}, {item.url && <a href={item.url}>Link</a>}
            </li>
          ))}
        </ol>
        <br /><br />

        <h3 className="py-3"><GrUserManager style={{ marginRight: '10px' }} />PROCEEDINGS</h3>
        <ol>
          {proceedings.map((item, index) => (
            <li key={index} className="text">
              {item.authors}, "{item.title}", {item.conference}, {item.location}, {item.date}, {item.doi && <a href={item.doi}>DOI</a>}, {item.url && <a href={item.url}>Link</a>}
            </li>
          ))}
        </ol>
        <br /><br />

        <h3 className="py-3"><GrUserManager style={{ marginRight: '10px' }} />DEMOS/POSTER PUBLICATION</h3>
        <ol>
          {demosPosters.map((item, index) => (
            <li key={index} className="text">
              {item.authors}, "{item.title}", {item.conference}, {item.date}
            </li>
          ))}
        </ol>
        <br /><br />
      </Typography>
    </div>
  );
}
