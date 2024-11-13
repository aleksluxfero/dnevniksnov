export type Dream = {
  id: string;
  title: string;
  description: string;
  date: Date;
  tags?: string[];
  mood?: string[];
  locations?: string[];
  characters?: string[];
  imgSrc?: string;
};
