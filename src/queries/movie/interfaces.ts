export const movieSchema = `
  id
  title
  synopsis
  originalAirDate
`;

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "title" | "synopsis" | "originalAirDate";
}
