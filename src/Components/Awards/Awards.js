import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import "./Awards.css";

export default function Awards() {
  return (
    <div className="containerText">
      <Typography paragraph>
        <h3 className="py-3">Awards</h3>
        <div className="text">
          <ul className="dot-list">
            <li>
              I received Forum 86 Research Excellence Award 2022 in Early
              Researcher Category in recognition of my outstanding academic
              achievement in the field of ‘Wireless Communications’.{" "}
            </li>
            <li>
              I received "GHC Faculty Scholarship" from Google Anita Borg for
              attending the virtual component of the 2022 Grace Hopper
              Celebration from Sep 20-23, Florida, USA Supervisor, Second
              Runner-Up team in IEEE Signal Processing Cup 2022 organized by
              2022 IEEE International Conference on Acoustics, Speech and Signal
              Processing (ICASSP), Prize money 1500 USD
            </li>
            <li>
              I received Basic Research Grant from Research and Innovation
              Centre for Science and Engineering (RISE), BUET, 2021
            </li>
            <li>
              I have received ‘ECE Graduate Program Academic Achievement Awards
              2019/20’. The ECE Graduate Program of Rutgers University had 28
              doctoral (PhD) graduates in the 2019/20 school year. Among them,
              only 6 doctoral graduates are the recipients of the ECE Graduate
              Program Academic Achievement Awards for this school year.
            </li>
            <li>
              I received Rutgers School of Graduate Studies 2019-20 Conference
              Travel Award
            </li>
            <li>
              I received Travel grant for 36th International Conference on
              Machine Learning (ICML) 2019
            </li>
            <li>
              I have been elected as President, Society of Women Engineers
              (SWE), Graduate Executive Board, Rutgers University for 2019-2020
            </li>
            <li>
              I received the Chancellor’s Leadership Award at the New Brunswick
              Chancellor’s Student Leadership Gala 2019.
              <a href="http://studentawards.rutgers.edu/2019-award-winners/">
                http://studentawards.rutgers.edu/2019-award-winners/
              </a>
            </li>
            <li>I received ECE Research Excellence Award Fall 2018.</li>
            <li>
              I received the School of Graduate Studies 2018-19 Conference
              Travel Award
            </li>
            <li>
              I received ACM CRA-W scholarship for ACM Grad Cohort program, 2019
            </li>
            <li>
              I received 'Microsoft Scholarship' for attending the 2018 ACM
              Tapia Conference. My work got selected as one of the participants
              of the ACM TAPIA 2018 Student Research Competition (SRC) to be
              held in the 2018 Tapia conference, Orlando, Florida.
            </li>
            <li>
              I have been elected as Vice President, Society of Women Engineers
              (SWE), Graduate Executive Board, Rutgers University for the second
              time for 2018-2019
            </li>
            <li>I received Google Conference Travel Award 2018</li>
            <li>
              I received 'Best Poster Award' in “ECE Research Day 2017” at
              Rutgers University
            </li>
            <li>
              I received 'Microsoft Scholarship' for attending Grace Hopper
              Celebration of Women in Computing 2016
            </li>
            <li>
              I received TA/GA Professional Development Award, Spring 2016, Fall
              2016, Spring 2017, Fall 2017
            </li>
          </ul>
        </div>
      </Typography>
    </div>
  );
}
