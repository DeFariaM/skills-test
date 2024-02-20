import { useState } from "react";
import Plus from "../../icons/Plus";
import Minus from "../../icons/Minus";

const Accordion = ({ question, answer }) => {
  const [accOpen, setAccOpen] = useState(false);
  return (
    <div className="mx-auto w-[90%] lg:w-[50%]">
      <button
        onClick={() => setAccOpen(!accOpen)}
        className="mt-5 flex w-full items-center justify-between"
      >
        <span className="text-lg font-medium">{question}</span>
        {accOpen ? (
          <span
            className={`h-6 w-6 origin-center transform transition duration-200 ease-out ${
              accOpen && "rotate-180"
            }`}
          >
            <Minus className={"h-6 w-6 text-[#98A2B3]"} />
          </span>
        ) : (
          <span
            className={`h-6 w-6 origin-center rotate-90 transform transition duration-200 ease-out ${
              accOpen && "rotate-180"
            }`}
          >
            <Plus className={"h-6 w-6 text-[#98A2B3]"} />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-secondary">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
