import React from "react";
import "./Widgets.css";
import { FiberManualRecord, Info } from "@mui/icons-material";

export default function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgetsArticle">
      <div className="widgetsArticle__left">
        <FiberManualRecord />
      </div>
      <div className="widgetsArticle__right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle(
        "Javascript",
        "Javascript is ranked as one of the most used programming language in 2023"
      )}
      {newsArticle(
        "Fresher Jobs: India updates",
        "Fresher Jobs are getting less day by day"
      )}
      {newsArticle(
        "fake Jobs Offers",
        " Another common scam is LinkedIn phishing, scammers impersonate well-known companies or professionals using fake profiles"
      )}
      {newsArticle(
        "Tesla records high sales",
        "Tesla is getting more love day by day resulting in its huge sales in 2023"
      )}
      {newsArticle(
        "Javascript",
        "Javascript is ranked as one of the most used programming language in 2023"
      )}
      {newsArticle(
        "Javascript",
        "Javascript is ranked as one of the most used programming language in 2023"
      )}
      {newsArticle(
        "Javascript",
        "Javascript is ranked as one of the most used programming language in 2023"
      )}
    </div>
  );
}
