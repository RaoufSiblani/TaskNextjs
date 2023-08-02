import { Fragment, useState } from "react";
import {
  Accordion as MaterialAccordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Accordion({ accordionData }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => {
    setOpen(open === value ? null : value);
  };

  return (
    <div className="w-4/5 font-sans flex flex-col mt-5 2xl:container 2xl:mx-auto">
      <Fragment>
        {accordionData.map((item) => (
          <MaterialAccordion
            key={item.id}
            open={open === item.id}
            className="border-black px-0 rounded-lg mb-3 text-2xl"
          >
            <AccordionHeader
              onClick={() => handleOpen(item.id)}
              className={`border-b-0 transition-colors flex items-center justify-normal ${
                open === item.id ? "text-orange-500 hover:text-yellow-500" : ""
              }`}
            >
              <span>{item.question}</span>
              <span
                className={`transform transition-transform ml-5 ${
                  open === item.id ? "rotate-90" : ""
                }`}
              >
                &gt;
              </span>
            </AccordionHeader>
            {open === item.id && (
              <AccordionBody className="text-base font-sans pl-5">
                {item.answer}
              </AccordionBody>
            )}
          </MaterialAccordion>
        ))}
      </Fragment>
    </div>
  );
}
