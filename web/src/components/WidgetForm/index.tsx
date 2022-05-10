import CloseButton from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { When } from "../When";
import { FeedBackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma Lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false)

  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 items-center flex flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <When value={feedbackSent}>
        <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      </When>
      <When value={!feedbackSent}>
        <When value={!feedbackType}>
          <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        </When>
        <When value={feedbackType}>
          <FeedbackContentStep
            feedbackType={feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback}
            onFeedbackSent={() => setFeedbackSent(true)}
          />
        </When>
      </When>

      <footer className="text-sx text-neutral-400">
        {"Feito com ♥ pela "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          {"Rocketseat"}
        </a>
      </footer>
    </div>
  );
}
