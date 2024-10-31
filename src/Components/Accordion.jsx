import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { accordionData } from "./accordionData";
const Accordion = () => {
  return (
    <div className="container flex flex-col items-center justify-center h-screen mx-auto">
      <h1 className="text-4xl font-bold mb-4"> My Accordion </h1>
      {accordionData.map(({ title, content }) => (
        <AccordionItem title={title} content={content} key={Math.random()} />
      ))}
    </div>
  );
};

export default Accordion;
