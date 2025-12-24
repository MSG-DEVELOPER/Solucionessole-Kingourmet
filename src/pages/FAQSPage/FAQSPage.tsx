import { useState } from "react";
import { LucideSearch } from "lucide-react";
import { Page, Title, Subtitle, SearchWrapper, Search } from "./FAQSPage.styles";
import { FAQSItem } from "../../components/FAQSPageComponents/FAQSItem/FAQSItem";
function FAQSPage() {
  const [query, setQuery] = useState("");

  const faqs = [
    { question: "¿Qué es este servicio?", answer: "Es una plataforma para..." },
    { question: "¿Cómo empiezo?", answer: "Crea una cuenta y sigue los pasos." },
    { question: "¿Tiene prueba gratuita?", answer: "Sí, 14 días sin tarjeta." }
  ];

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    return setQuery(event.target.value);
  }

  return (
    <Page>
      <Title>Preguntas frecuentes</Title>
      <Subtitle>Encuentra respuestas rápidas</Subtitle>

      <SearchWrapper>
        <Search
          placeholder="Buscar…"
          value={query}
          onChange={handleChange}
        />
        <LucideSearch size={18} />
      </SearchWrapper>

      {faqs
        .filter(function (f) {
          return f.question.toLowerCase().includes(query.toLowerCase());
        })
        .map(function (faq, index) {
          return (
            <FAQSItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          );
        })}
    </Page>
  );
}

export default FAQSPage;
