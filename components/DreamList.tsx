"use client";

import { FC, useState } from "react";
import { Dream } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/components/Link/Link";
import { Button } from "@/components/ui/button";
import { MouseEvent } from "react";
import { getChatResponse } from "@/services/ai.service";

interface DreamListProps {
  dreams: Dream[];
}

export const DreamList: FC<DreamListProps> = ({ dreams }) => {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string | null }>(
    {},
  );

  const generatePrompt = async (
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
  };

  const dreamsEl = dreams.map((dream) => {
    return (
      <Link key={dream.id} href={"/dreams/" + dream.id} className="w-full">
        <Card className="w-full bg-[#191a22] text-[#f2f3f5] border-none">
          <CardHeader className="px-4 py-4">
            <CardTitle className="line-clamp-1">{dream.title}</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <p className="line-clamp-3 text-sm m-0 text-[#e7e8ec]">
              {dream.description}
            </p>
            {imageUrls[dream.id] && (
              <img
                src={imageUrls[dream.id] || undefined}
                alt="Generated Dream Image"
                className="mt-4 w-full h-auto rounded-lg"
              />
            )}
          </CardContent>
          <CardFooter>
            <Button
              onClick={(evt) =>
                generatePrompt(evt, dream.description, dream.id)
              }
            >
              Сгенерировать
            </Button>
          </CardFooter>
        </Card>
      </Link>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4">
      {dreamsEl}
    </div>
  );
};
