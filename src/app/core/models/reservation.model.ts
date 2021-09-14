export interface Rerservation{
  locataire?: number;
  habitatId?: number;
  nbrOccupant: number;
  montantTotal: number;
  payementEffectue: boolean;
  lienFacture: string;
  dateArrivee: string;
  dateDepart: string;
}
