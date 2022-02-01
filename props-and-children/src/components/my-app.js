import React from "react";
import people from "./data.json";
const MyApp = () => {
  return (
    <div>
      {people.map(({ name, age, weight, id }) => (
        <Section key={id}>
          <Display label="Name" value={name} />
          <Display label="Age" value={age} />
          <Display label="Weight" value={weight} />
        </Section>
      ))}

      <Section>
        <h1>Hello</h1>
      </Section>
      <h1>hi</h1>
    </div>
  );
};

// dry -> don't repeat yourself

const Section = ({ children }) => {
  return <div style={{ marginBottom: 20 }}>{children}</div>;
};

const Display = ({ label, value }) => {
  return (
    <div>
      <span>{label}:</span>
      <span>{value}</span>
    </div>
  );
};

export default MyApp;
