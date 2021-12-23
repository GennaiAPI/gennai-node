export const rankSchema = `
  id
  name
  description
`;

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "description";
}

export interface GetRanks {
  options?: OptionsProps;
}

export interface GetRankById {
  id: number;
}

export interface GetRankByName {
  name: string;
}
