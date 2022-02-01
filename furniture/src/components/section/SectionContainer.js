import React from "react";
import Button from "./button";
import { conterest } from "./conterestColor";
import "./section-style.css";

function SectionContainer({
  bgColor = "primary-color",
  textColor,
  title,
  description,
  buttonLabel,
  image = "",
  isReverse = false,
}) {
  textColor = conterest(textColor, bgColor);

  return (
    <div
      className={`section-container  ${bgColor} ${
        isReverse && "reverser"
      } general-padding`}
    >
      <div className="side-con">
        <div className="text-container">
          <h4 className="title text-red ">{title}</h4>
          <p className={"description " + textColor}>{description}</p>
          <Button
            label={buttonLabel}
            bgColor="secondry-color"
            textColor="text-white"
          />
        </div>
      </div>
      <div className="side-con">
        <div className="img-con">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default SectionContainer;
