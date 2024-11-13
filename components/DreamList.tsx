"use client";

import { FC } from "react";
import { Dream } from "@/types";
import { DreamCard } from "@/components/DreamCard";

interface DreamListProps {
  dreams: Dream[];
}

export const DreamList: FC<DreamListProps> = ({ dreams }) => {
  /*const generatePrompt = async (
    evt: MouseEvent<HTMLButtonElement>,
    prompt: string,
    dreamId: string,
  ) => {
    evt.stopPropagation();
    evt.preventDefault();
    const title =
      "Сгенерируй идеальный prompt на основе описания сна для генерации изображения. Выводи только промпт без лишних добавлений, так как я его сразу буду отправлять на сервис. Промпт должен быть на английском языке. Вот описание сна: ";
    const data = await getChatResponse(title + prompt);
    await generateImage(dreamId, data);
  };

  async function query(data: { inputs: string; parameters?: object }) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
          "x-use-cache": "false", // Отключение кэширования
        },
        method: "POST",
        body: JSON.stringify(data),
      },
    );
    const result = await response.blob();
    return result;
  }

  const generateImage = async (dreamId: string, prompt: string) => {
    const parameters = {};

    console.log(prompt);

    const blob = await query({
      inputs: prompt,
      parameters,
    });

    // Создаем URL из Blob и сохраняем его в состоянии с привязкой к конкретному сну
    const url = URL.createObjectURL(blob);
    setImageUrls((prev) => ({ ...prev, [dreamId]: url }));

    // Освобождаем память при удалении старых URL
    return () => URL.revokeObjectURL(url);
  };*/

  const dreamsEl = dreams.map((dream) => {
    return <DreamCard key={dream.id} dream={dream} />;
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4">
      {dreamsEl}
    </div>
  );
};
