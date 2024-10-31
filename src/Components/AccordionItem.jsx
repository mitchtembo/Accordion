import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      className="accordion-card  bg-[#f7f7f7] rounded-lg shadow-sm mb-6 p-4 w-96  transform hover:scale-105 transition duration-300 ease-in-out"
      key={Math.random()}
    >
      <div
        className="flex flex-row justify-between header"
        onClick={() => setIsActive(!isActive)}
      >
        <h2 className="title font-mono text-1xl">{title}</h2>
        <p className="text-2xl icon text-blue-500">{isActive ? "-" : "+"}</p>
      </div>
      <div className="content">
        {isActive && (
          <p className="card-info bg-[#ccc] text-white  border-blue-200 p-4 rounded-lg mt-2">
            {content}
          </p>
        )}
      </div>
    </section>
  );
};

export default AccordionItem;
