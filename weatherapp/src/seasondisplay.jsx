import "./seasonDisplay.css";
import React from "react";

const seasonConfig = {
  winter: {
    text: "Burrr...it is chilly",
    icon: "snowflake",
    bgColors: "#00B1E1"
  },
  summer: {
    text: "Lets hit the beach",
    icon: "sun",
    bgColors: "#E9573F"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const seasonDisplay =
  //   season === "winter" ? "Burrr...it is chilly" : "Lets hit the beach";
  // const Seasonicon = season === "winter" ? "snowflake" : "sun";
  const { text, icon, bgColors } = seasonConfig[season];
  console.log(season);
  return (
    <div
      className={`season-display ${season}`}
      style={{ backgroundColor: bgColors }}
    >
      <i className={`icon-left massive ${icon} icon`}></i>
      <h1> {text}</h1>
      <i className={`icon-right massive ${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
