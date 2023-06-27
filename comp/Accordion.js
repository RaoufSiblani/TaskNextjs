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
    <div className="w-4/5 font-sans flex flex-col mx-auto mt-5">
  <Fragment>
    {accordionData.map((item) => (
      <MaterialAccordion
        key={item.id}
        open={open === item.id}
        className="border-t-2 border-black px-4 rounded-lg mb-3 text-2xl"
      >
        <AccordionHeader
          onClick={() => handleOpen(item.id)}
          className={`border-b-0 transition-colors ${
            open === item.id ? "text-orange213 hover:text-yellow-500" : ""
          }`}
        >
          {item.question}
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