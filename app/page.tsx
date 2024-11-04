"use client";
import { Page } from "@/components/Page";
import { useEffect, useState } from "react";
import { DreamsLoader } from "@/components/DreamsLoader";
import { cn } from "@/lib/utils";
import { DreamList } from "@/components/DreamList";
import { Dream } from "@/types";

const dreamsData: Dream[] = [
  {
    id: "1",
    title: "Прогулка по цветущему саду",
    description:
      "Я гулял по саду, наполненному яркими цветами и поющими птицами. Солнце светило, и всё вокруг было прекрасно. Я гулял по саду, наполненному яркими цветами и поющими птицами. Солнце светило, и всё вокруг было прекрасно. Я гулял по саду, наполненному яркими цветами и поющими птицами. Солнце светило, и всё вокруг было прекрасно. Я гулял по саду, наполненному яркими цветами и поющими птицами. Солнце светило, и всё вокруг было прекрасно. Я гулял по саду, наполненному яркими цветами и поющими птицами. Солнце светило, и всё вокруг было прекрасно. Я гулял по саду, наполненному яркими цветами и поющими птицами. Солнце светило, и всё вокруг было прекрасно. Я гулял по саду, наполненному яркими цветами и поющими птицами. Солнце светило, и всё вокруг было прекрасно.",
    date: new Date(),
    tags: ["Сад", "Природа"],
    mood: ["Счастье", "Спокойствие"],
    locations: ["Сад", "Лужайка"],
    characters: ["Мама", "Соседка"],
  },
  {
    id: "2",
    title: "Погоня по городу",
    description:
      "Мне снилось, что я бегу по городу, убегая от незнакомца. Сердце колотится от страха.",
    date: new Date(),
    tags: ["Город", "Погоня"],
    mood: ["Страх", "Тревога"],
    locations: ["Город", "Улица"],
    characters: ["Незнакомец"],
  },
  {
    id: "3",
    title: "Космическое путешествие",
    description:
      "Я оказался на космическом корабле, летящем через галактику. Вокруг меня были звёзды и планеты.",
    date: new Date(),
    tags: ["Космос", "Приключение"],
    mood: ["Удивление", "Счастье"],
    locations: ["Космический корабль", "Галактика"],
    characters: ["Космонавт", "Искусственный интеллект"],
  },
  {
    id: "4",
    title: "Старый дом на холме",
    description:
      "Мне приснился старый дом на холме, который был полон тайн. Я исследовал его, находя странные вещи.",
    date: new Date(),
    tags: ["Дом", "Тайна"],
    mood: ["Страх", "Интрига"],
    locations: ["Старый дом", "Холм"],
    characters: ["Дедушка", "Призрак"],
  },
  {
    id: "5",
    title: "Встреча с дельфинами",
    description:
      "Я плавал в море и встретил дружелюбных дельфинов. Они играли рядом со мной, и я чувствовал себя счастливым.",
    date: new Date(),
    tags: ["Море", "Дельфины"],
    mood: ["Счастье", "Спокойствие"],
    locations: ["Море", "Подводный мир"],
    characters: ["Дельфины"],
  },
];

export default function Home() {
  const [dreams, setDreams] = useState<Dream[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const getDreams = async () => {
      return dreamsData;
    };
    getDreams()
      .then((data) => setDreams(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Page
      nav={true}
      className={cn({
        "p-0": !isLoading && (!dreams || dreams.length === 0),
      })}
    >
      {isLoading && <DreamsLoader />}
      {!isLoading && (!dreams || dreams.length === 0) && (
        <div className="min-h-screen flex items-center justify-center">
          Нет записей
        </div>
      )}
      {dreams && dreams.length > 0 && <DreamList dreams={dreams} />}
    </Page>
  );
}
