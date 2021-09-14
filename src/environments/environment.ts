// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://127.0.0.1:8000/api/',
  disconnectOnWindowsClose: false,
  backendAssetUrl: 'http://127.0.0.1:8000/storage/',

  pusher : {
    key: '2cbbfc6ac4632068efa0',
    cluster: 'eu'
  },
  dataTableLanguage :  {
    emptyTable: 'Aucune donnée disponible dans le tableau',
    lengthMenu: 'Afficher _MENU_ éléments',
    loadingRecords: 'Chargement...',
    processing: 'Traitement...',
    zeroRecords: 'Aucun élément correspondant trouvé',
    paginate: {
      first: 'Premier',
      last: 'Dernier',
      previous: 'Précédent',
      next: 'Suiv'
    },
    aria: {
      sortAscending: ': activer pour trier la colonne par ordre croissant',
      sortDescending: ': activer pour trier la colonne par ordre décroissant'
    },
    select: {
      rows: {
        _: '%d lignes sélectionnées',
        1: '1 ligne sélectionnée'
      },
      cells: {
        1: '1 cellule sélectionnée',
        _: '%d cellules sélectionnées'
      },
      columns: {
        1: '1 colonne sélectionnée',
        _: '%d colonnes sélectionnées'
      }
    },
    autoFill: {
      cancel: 'Annuler',
      fill: 'Remplir toutes les cellules avec <i>%d<\/i>',
      fillHorizontal: 'Remplir les cellules horizontalement',
      fillVertical: 'Remplir les cellules verticalement'
    },
    searchBuilder: {
      conditions: {
        date: {
          after: 'Après le',
          before: 'Avant le',
          between: 'Entre',
          empty: 'Vide',
          equals: 'Egal à',
          not: 'Différent de',
          notBetween: 'Pas entre',
          notEmpty: 'Non vide'
        },
        number: {
          between: 'Entre',
          empty: 'Vide',
          equals: 'Egal à',
          gt: 'Supérieur à',
          gte: 'Supérieur ou égal à',
          lt: 'Inférieur à',
          lte: 'Inférieur ou égal à',
          not: 'Différent de',
          notBetween: 'Pas entre',
          notEmpty: 'Non vide'
        },
        string: {
          contains: 'Contient',
          empty: 'Vide',
          endsWith: 'Se termine par',
          equals: 'Egal à',
          not: 'Différent de',
          notEmpty: 'Non vide',
          startsWith: 'Commence par'
        },
        array: {
          equals: 'Egal à',
          empty: 'Vide',
          contains: 'Contient',
          not: 'Différent de',
          notEmpty: 'Non vide',
          without: 'Sans'
        }
      },
      add: 'Ajouter une condition',
      button: {
        0: 'Recherche avancée',
        _: 'Recherche avancée (%d)'
      },
      clearAll: 'Effacer tout',
      condition: 'Condition',
      data: 'Donnée',
      deleteTitle: 'Supprimer la règle de filtrage',
      logicAnd: 'Et',
      logicOr: 'Ou',
      title: {
        0: 'Recherche avancée',
        _: 'Recherche avancée (%d)'
      },
      value: 'Valeur'
    },
    searchPanes: {
      clearMessage: 'Effacer tout',
      count: '{total}',
      title: 'Filtres actifs - %d',
      collapse: {
        0: 'Volet de recherche',
        _: 'Volet de recherche (%d)'
      },
      countFiltered: '{shown} ({total})',
      emptyPanes: 'Pas de volet de recherche',
      loadMessage: 'Chargement du volet de recherche...'
    },
    buttons: {
      copyKeys: 'Appuyer sur ctrl ou u2318 + C pour copier les données du tableau dans votre presse-papier.',
      collection: 'Collection',
      colvis: 'Visibilité colonnes',
      colvisRestore: 'Rétablir visibilité',
      copy: 'Copier',
      copySuccess: {
        1: '1 ligne copiée dans le presse-papier',
        _: '%ds lignes copiées dans le presse-papier'
      },
      copyTitle: 'Copier dans le presse-papier',
      csv: 'CSV',
      excel: 'Excel',
      pageLength: {
        '-1': 'Afficher toutes les lignes',
        _: 'Afficher %d lignes'
      },
      pdf: 'PDF',
      print: 'Imprimer'
    },
    decimal: ',',
    info: 'Affichage de _START_ à _END_ sur _TOTAL_ éléments',
    infoEmpty: 'Affichage de 0 à 0 sur 0 éléments',
    infoThousands: '.',
    search: 'Rechercher:',
    thousands: '.',
    infoFiltered: '(filtrés depuis un total de _MAX_ éléments)',
    datetime: {
      previous: 'Précédent',
      next: 'Suivant',
      hours: 'Heures',
      minutes: 'Minutes',
      seconds: 'Secondes',
      unknown: '-',
      amPm: [
        'am',
        'pm'
      ]
    },
    editor: {
      close: 'Fermer',
      create: {
        button: 'Nouveaux',
        title: 'Créer une nouvelle entrée',
        submit: 'Envoyer'
      },
      edit: {
        button: 'Editer',
        title: 'Editer Entrée',
        submit: 'Modifier'
      },
      remove: {
        button: 'Supprimer',
        title: 'Supprimer',
        submit: 'Supprimer'
      },
      error: {
        system: 'Une erreur système s\'est produite'
      },
      multi: {
        title: 'Valeurs Multiples',
        restore: 'Rétablir Modification'
      }
    }
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.