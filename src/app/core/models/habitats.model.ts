export interface Habitat{
  id?: number;
  title: string;
  description: string;
  nombreChambre: number;
  prixParNuit: number;
  nombreLit: number;
  adresse: string;
  hasTelevision: boolean;
  hasClimatiseur: boolean;
  hasChauffage: boolean;
  hasInternet: boolean;
  typeHabitat?: number;
  valideParAtypik?: boolean;
  vues?: Vue[];
  created_at?: any;
}

export interface Vue {
  id?: number;
  lienImage: string;
  legende: string;
}
