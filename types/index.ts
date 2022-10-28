export type User = {
    name: string;
    email: string;
    notes: Notes[];
  };

  export type Notes = {
    id: string;
    title: string;
    description: string;
  }