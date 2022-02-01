import React from "react";
import Nav from "./navigations/nav";
import SectionContainer from "./section/SectionContainer";
import data from "./data.json";

function Main() {
  return (
    <div>
      <Nav />
      {data.map((info, index) => {
        return (
          <SectionContainer
            {...info}
            image={`${info.image}${index + 1}.png`}
            isReverse={index % 2 != 0}
            bgColor={index % 2 == 0 ? "primary-color" : "bg-white"}
            key={info.id}
          />
        );
      })}
    </div>
  );
}

export default Main;
