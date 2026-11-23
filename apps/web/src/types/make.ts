export interface Make {
  id: number;
  name: string;
}

export type MakeCreate = Omit<Make, 'id'>;
export type MakeUpdate = Partial<MakeCreate>;
