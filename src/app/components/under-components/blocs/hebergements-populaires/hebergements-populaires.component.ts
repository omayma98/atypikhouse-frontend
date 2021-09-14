import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hebergements-populaires',
  templateUrl: './hebergements-populaires.component.html',
  styleUrls: ['./hebergements-populaires.component.scss']
})
export class HebergementsPopulairesComponent implements OnInit {

  sectionTitle = 'Les hébergements les plus appréciées';
  sectionDescription = 'Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi perso.';


  Slides = [
    {

      bgUrl: '/assets/images/dome-coquille.png',
      title: 'Dôme Coquille',
      location: 'Paris, Ile-de-France',
      prix: '390€ / Nuit',
      type: 'Dôme'
    },
    {
      bgUrl: '/assets/images/tente-sibley.png',
      title: 'Tente Sibley',
      location: 'Berson, Gironde',
      prix: '400€ / Nuits',
      type: 'Tentes'
    },

    {
      bgUrl: '/assets/images/cabane-leonie.png',
      title: 'La Cabane Léonie',
      location: 'Gerde, Hautes Pyrénées',
      prix: '250€ / Nuit',
      type: 'Cabane'
    },

    {
      bgUrl: '/assets/images/dome-coquille.png',
      title: 'Acquitaine',
      location: 'Paris, Ile-de-France',
      prix: '450€ / Nuit',
      type: 'Dôme'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
