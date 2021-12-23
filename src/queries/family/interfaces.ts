export const familySchema = `
  id
  name
  symbol
  description
`;

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "symbol" | "description";
}

export interface GetFamilies {
  options?: OptionsProps;
}

export interface GetFamilyById {
  id: number;
}

export interface GetFamilyByName {
  name: string;
}
