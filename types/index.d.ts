export type DreamType = "Неосознанный" | "Полуосознанный" | "Осознанный";

export type Dream = {
  id: string;
  title?: string;
  description?: string;
  date: Date;
  tags?: string[];
  imgSrc?: string;
  type: DreamType;
};
