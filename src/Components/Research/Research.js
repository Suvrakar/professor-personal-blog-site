import * as React from "react";
import Typography from "@mui/material/Typography";
import "./Research.css";
import { GrUserManager } from 'react-icons/gr';


export default function Research() {
  return (
    <div className="containerText">
      <Typography paragraph>
        <div>
          <h3 className="py-3"><GrUserManager style={{marginRight:'10px'}}/>Research Interest</h3>
          <div className="text">
            Artificial Intelligence, Machine Learning, Deep Neural Network,
            Internet of Things (IoT), AI Based Healthcare, Localization and
            Tracking, Smart Home Systems, Speech Processing
          </div>
        </div>

        <div>
          <h3 className="marginTop py-3"><GrUserManager style={{marginRight:'10px'}}/>PhD Dissertation</h3>
          <div className="text">
            A Channel State Information Based Device Free Indoor Localization
            for Context Aware Computing: A Machine Learning Approach
          </div>
          <p>Advisor: Prof. Hana Godrich, PhD</p>
          <p>Rutgers, The State University of New Jersey</p>
          <br></br>
          <h3 className="marginTop py-3"><GrUserManager style={{marginRight:'10px'}}/>MSc Dissertation</h3>
          <div className="text">
            NOISY SPEECH ENHANCEMENT BASED ON A STATISTICALLY DETERMINED
            THRESHOLD USING TEAGER ENERGY OPERATED WAVELET PACKET COEFFICIENTS
          </div>
          <p>Supervised by: Prof. Celia Shahnaz, PhD</p>
          <p>Associate Professor, Department of EEE,</p>
          <p>Bangladesh University of Engineering and Technology, Dhaka.</p>
          <br></br>
          <h3 className="marginTop py-3"><GrUserManager style={{marginRight:'10px'}}/>BSc Dissertation</h3>
          <div className="text">
            AUTOMATIC DETECTION OF PREMATURE VENTRICULAR CONTRACTION BEAT IN ECG
            SIGNAL
          </div>
          <p>Supervised by: Prof. Md. Kamrul Hasan, PhD</p>
          <p>Professor, Department of EEE</p>
          <p>Bangladesh University of Engineering and Technology, Dhaka.</p>
        </div>
      </Typography>
    </div>
  );
}
