import React from "react";
import Typography from "@mui/material/Typography";
import { GrUserManager } from 'react-icons/gr';
import researchData from "./Research.json";
import "./Research.css";

export default function Research() {
  const { researchInterest, phdDissertation, mscDissertation, bscDissertation } = researchData;

  return (
    <div className="containerText">
      <Typography paragraph>
        <div>
          <h3 className="py-3"><GrUserManager style={{marginRight:'10px'}}/>Research Interest</h3>
          <div className="text">{researchInterest}</div>
        </div>

        <div>
          <h3 className="marginTop py-3"><GrUserManager style={{marginRight:'10px'}}/>PhD Dissertation</h3>
          <div className="text">{phdDissertation.title}</div>
          <p>Advisor: {phdDissertation.advisor}</p>
          <p>{phdDissertation.institution}</p>
        </div>

        <div>
          <h3 className="marginTop py-3"><GrUserManager style={{marginRight:'10px'}}/>MSc Dissertation</h3>
          <div className="text">{mscDissertation.title}</div>
          <p>Supervised by: {mscDissertation.supervisor}</p>
          <p>{mscDissertation.position}</p>
          <p>{mscDissertation.institution}</p>
        </div>

        <div>
          <h3 className="marginTop py-3"><GrUserManager style={{marginRight:'10px'}}/>BSc Dissertation</h3>
          <div className="text">{bscDissertation.title}</div>
          <p>Supervised by: {bscDissertation.supervisor}</p>
          <p>{bscDissertation.position}</p>
          <p>{bscDissertation.institution}</p>
        </div>
      </Typography>
    </div>
  );
}
