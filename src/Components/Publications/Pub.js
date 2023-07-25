import * as React from "react";
import Typography from "@mui/material/Typography";
import "./Pub.css";
import { GrUserManager } from 'react-icons/gr';


export default function Pub() {
  return (
    <div className="containerText">
      <Typography paragraph>
        <h3 className="py-3"><GrUserManager style={{marginRight:'10px'}}/>US PATENT</h3>
        <ul>
          <li className="text">
            P Monogioudis, T. F. Sanam, D Wang, “Autonomous localization in
            wireless networks” US20190182614 A1, Date: 06/13/2019, US Patent
            App. 15/837,621
          </li>
        </ul>
        <br></br>
        <br></br>

        <h3 className="py-3"><GrUserManager style={{marginRight:'10px'}}/>JOURNALS</h3>
        <h5>Under Review:</h5>
        <ul>
          <li className="text">
            S. A. Suha, and T.F. Sanam, “Sustainability Assessment of Artificial
            Intelligence in Healthcare Decision Making", Submitted for review in
            Health Care Management Science, May 2022
          </li>
          <li className="text">
            T. F. Sanam and H. Godrich, “CoMuTe: A Convolutional Neural Network
            Based Device Free Multiple Target Localization Using CSI," Under
            review in IEEE Transaction in Human Machine Systems, March, 2021
          </li>
        </ul>
        <br></br>
        <br></br>
        <h5>Published:</h5>
        <ul>
          <li>
            {" "}
            <li className="text">
              I. A. Showmik, T.F. Sanam, H. Imtiaz, Human Activity Recognition
              from Wi-Fi CSI data using Principal Component-based Wavelet CNN,
              Digital Signal Processing (Elsevier-DSP), Volume 138, 2023,
              104056, ISSN 1051-2004, https://doi.org/10.1016/j.dsp.2023.104056
            </li>
          </li>
          <li className="text">
            S. A. Suha, and T.F. Sanam, “A Deep Convolutional Neural
            Network-Based Approach for Detecting Burn Severity from Skin Burn
            Images”, Machine Learning with Applications (MLWA-Elsevier), June
            2022
          </li>
          <li className="text">
            S. A. Suha, M. Akhtaruzzaman and T.F. Sanam, "A Fuzzy Model to
            Predict Intravenous Fluid Resuscitation Rate for Burn Patients",
            Healthcare Analytics (Elsevier), 2022, 100070, ISSN 2772-4425,
            https://doi.org/10.1016/j.health.2022.100070.
          </li>
          <li className="text">
            T. F. Sanam and H. Godrich, "A Multi-View Discriminant Learning
            Approach for Indoor Localization Using Amplitude and Phase Features
            of CSI," in IEEE Access (Impact factor: 4.095, Acceptance Rate:
            50%). doi: 10.1109/ACCESS.2020.2982277
            http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9043538&isnumber=6514899
          </li>
          <li className="text">
            T. F. Sanam and C. Shahnaz; “A Semisoft Thresholding Method based on
            Teager Energy Operation on Wavelet Packet Coefficients for Enhancing
            Noisy Speech”; EURASIP Journal of Audio, Speech and Music
            Processing;, Springer Open, October, 2013.
            doi.org/10.1186/1687-4722-2013-25
            http://link.springer.com/article/10.1186%2F1687-4722-2013-25
          </li>
          <li className="text">
            T. F. Sanam and C. Shahnaz, “Noisy speech enhancement based on an
            adaptive threshold and a modified hard thresholding function in
            wavelet packet domain”, Digital Signal Processing, Elsevier, Volume
            23, Issue 3, May 2013, Pages 941-951, DOI: 10.1016/j.dsp.2012.12.001
            http://www.sciencedirect.com/science/article/pii/S1051200412002825
          </li>
          <li className="text">
            T. F. Sanam and C. Shahnaz; “Enhancement of Noisy Speech Based on a
            Custom Thresholding Function With a Statistically Determined
            Threshold”; International Journal of Speech Technology, Springer,
            April, 2012, DOI:10.1007/s10772-012-9144-6;
            http://dx.doi.org/10.1007/s10772-012-9144-6
          </li>
          <li className="text">
            T. F. Sanam and C. Shahnaz; “Teager Energy Operation on Wavelet
            Packet Coefficients for Enhancing Noisy Speech Using a Hard
            Thresholding Function”; Signal Processing: An International Journal,
            CSC Press Journal, vol 6, issue 2, pp 22-43, April, 2012;
            http://www.cscjournals.org/csc/manuscriptinfo.php?ManuscriptCode=76.73.66.67.38.42.48.49.105&JCode=SPIJ&EJCode=78.75.68.69.103&Volume=45.107&Issue=47.101
          </li>
          <li className="text">
            T. F. Sanam and C. Shahnaz; "An Approach for Noisy Speech
            Enhancement through soft thresholding function by Employing the
            Teager Energy Operation on Wavelet Packet”; International Journal of
            Scientific & Technology Research, vol 1, Issue 2, Mar 2012,
            http://www.ijstr.org/research-paper-publishing.php?month=march2012
          </li>
        </ul>

        <br></br>
        <br></br>

        <h3 className="py-3"><GrUserManager style={{marginRight:'10px'}}/>PROCEEDINGS </h3>
        <ul>
          <li className="text">
            S. A. Suha and T.F. Sanam, "'A Machine Learning Approach for
            Predicting Patient's Length of Hospital Stay with Random Forest
            Regression", Accepted for publication in IEEE Region 10 Symposium
            (TENSYMP 2022), Mumbai, India, July 2022
          </li>
          <li className="text">
            S.A. Suha and T.F. Sanam, "Challenges and Prospects of Adopting
            Industry 4.0 and Assessing the Role of Intelligent Robotics,"
            Accepted for publication in IEEE World Conference on Applied
            Intelligence and Computing (AIC 2022), Sonbhadra, India, June 2022.
          </li>
          <li className="text">
            S.A. Suha, T.F. Sanam and M.I. Jahan, "National Policies & their
            Significance in Bangladesh for the Adoption of Industry 4.0,"
            Accepted for publication in IEEE World Conference on Applied
            Intelligence and Computing (AIC 2022), Sonbhadra, India, June 2022.
          </li>
          <li className="text">
            T. F. Sanam and H. Godrich, "FuseLoc: A CCA Based Information Fusion
            for Indoor Localization Using CSI Phase and Amplitude of Wifi
            Signals," ICASSP 2019 - 2019 IEEE International Conference on
            Acoustics, Speech and Signal Processing (ICASSP), Brighton, United
            Kingdom, 2019, pp. 7565-7569. doi: 10.1109/ICASSP.2019.8683316
          </li>
          <li className="text">
            T. F. Sanam and H. Godrich, "Device Free Indoor Localization Using
            Discriminant Features of CSI A Canonical Correlation Paradigm,"
            ACSSC 2018 - 52nd Asilomar Conference on Signals, Systems, and
            Computers, Pacific Grove, CA, USA, 2018, pp. 423-427. doi:
            10.1109/ACSSC.2018.8645524
          </li>
          <li className="text">
            T. F. Sanam and H. Godrich, "An Improved CSI Based Device Free
            Indoor Localization Using Machine Learning Based Classification
            Approach," EUSIPCO 2018 - 26th European Signal Processing Conference
            , Roma, Italy, 2018, pp. 2390-2394. doi:
            10.23919/EUSIPCO.2018.8553394
          </li>
          <li className="text">
            T. F. Sanam and H. Godrich, 'Device Free Indoor Localization Using
            Channel State Information ' has been accepted for publication in
            2018 ACM Richard Tapia Celebration of Diversity in Computing
            Conference (Tapia 2018).
          </li>
          <li className="text">
            Sanam, T.F.; Hoque, M.M., "Technology Assessment of Fourth
            Generation technology for wireless communication in Bangladesh with
            Analytical Hierarchical Process," Informatics, Electronics & Vision
            (ICIEV), 2014 International Conference on , vol., no., pp.1,4, 23-24
            May 2014, doi: 10.1109/ICIEV.2014.6850808
            http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6850808&isnumber=6850678
          </li>
          <li className="text">
            Imtiaz, Hafiz; Sanam, Tahsina Farah, "Frequency domain feature
            extraction for power quality disturbance classification,"
            Informatics, Electronics & Vision (ICIEV), 2013 International
            Conference on , vol., no., pp.1,5, 17-18 May, 2013,
            doi:10.1109/ICIEV.2013.6572701
            http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6572701&isnumber=6572523
          </li>
          <li className="text">
            Sanam, Tahsina Farah; Imtiaz, Hafiz, "A DCT-based noisy speech
            enhancement method using Teager energy operator," Knowledge and
            Smart Technology (KST), 2013 5th International Conference on , vol.,
            no., pp.16,20, Jan. 31 2013-Feb. 1 2013, doi:
            10.1109/KST.2013.6512780
            http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6512780&queryText%3Dtahsina
          </li>
          <li className="text">
            Sanam, T.F.; Shahnaz, C., "A combination of semisoft and μ-law
            thresholding functions for enhancing noisy speech in wavelet packet
            domain," Electrical & Computer Engineering (ICECE), 2012 7th
            International Conference on , vol., no., pp.884,887, 20-22 Dec.
            2012, doi:10.1109/ICECE.2012.6471692
            http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6471692&isnumber=6471460
          </li>
          <li className="text">
            Sanam, Tahsina Farah and Imtiaz, Hafiz; , "A novel approach of
            automated heart rate calculation in ECG Signal through Wave
            Boundaries Detection," IEEE International Conference on Informatics,
            Electronics & Vision (ICIEV), vol., no., pp.677-682, 18-19 May 2012,
            doi: 10.1109/ICIEV.2012.6317532;
            http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6317532&isnumber=6317321
          </li>
          <li className="text">
            Sanam, T.F.; Shahnaz, C., "An approach for noisy speech enhancement
            by employing the teager energy operation on wavelet packet," TENCON
            2011 - 2011 IEEE Region 10 Conference , vol., no., pp.1135,1138,
            21-24 Nov. 2011,doi:10.1109/TENCON.2011.6129289
            http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6129289&isnumber=6128995
          </li>
        </ul>

        <br></br>
        <br></br>

        <h3 className="py-3"><GrUserManager style={{marginRight:'10px'}}/>DEMOS/POSTER PUBLICATION</h3>
        <ul>
          <li className="text">
            T. F. Sanam and H. Godrich, 'Device Free Indoor Localization Using
            Channel State Information ' has been accepted for publication in
            2018 ACM Richard Tapia Celebration of Diversity in Computing
            Conference (Tapia 2018).
          </li>
        </ul>
        <br></br>
        <br></br>
      </Typography>
    </div>
  );
}
