import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Item, Question, Answer } from "./FAQSItem.styles";

interface FAQSItemProps {
  question: string;
  answer: string;
}

export function FAQSItem({ question, answer }: FAQSItemProps) {
  const [open, setOpen] = useState(false);

  function toggle() {
    return setOpen(!open);
  }

  return (
    <Item>
      <Question onClick={toggle}>
        <span>{question}</span>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </Question>

      {open && <Answer>{answer}</Answer>}
    </Item>
  );
}
  