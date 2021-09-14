export interface User{
  id: number;
  name: string;
  email: string;
  telephone: string;
  adresse: string;
  password?: string;
  password_confirmation?: string;
  canAddHabitat?: boolean;
  wantToAddHabitat?: boolean;
}

