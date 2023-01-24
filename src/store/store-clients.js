// Importation d'Axios sous le nom api
import { api } from 'boot/axios'

// State : données du magasin
const state = {
  // Tableau des clients
  clients: [
    {
      id: 1,
      name: {
        title: 'Monsieur',
        first: 'Pierre',
        last: 'Michel'
      },
      email: 'pierre.michel@example.com',
      phone: '078 644 00 03',
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/80.jpg'
      }
    },
    {
      id: 2,
      name: {
        title: 'Monsieur',
        first: 'Alexis',
        last: 'Michel'
      },
      email: 'alexis.michel@example.com',
      phone: '078 644 00 03',
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/33.jpg'
      }
    },
    {
      id: 3,
      name: {
        title: 'Monsieur',
        first: 'Jimmy',
        last: 'Bertrand'
      },
      email: 'jimmy.bertrand@example.com',
      phone: '075 867 57 09',
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/22.jpg'
      }
    },
    {
      id: 4,
      name: {
        title: 'Monsieur',
        first: 'Reinhard',
        last: 'Perez'
      },
      email: 'reinhard.perez@example.com',
      phone: '076 226 23 71',
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/69.jpg'
      }
    },
    {
      id: 5,
      name: {
        title: 'Monsieur',
        first: 'Ernesto',
        last: 'Simon'
      },
      email: 'ernesto.simon@example.com',
      phone: '076 870 83 93',
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/10.jpg'
      }
    }
  ]
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  // Remplace le tableau des clients par le tableau newClients en paramètres
  setClients (state, newClients) {
    state.clients = newClients
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  // Récupère le tableau des clients en appelant l'API et met à jour le magasin
  getClientsApi ({ commit }) {
    // GET
    api.get('https://randomuser.me/api/?results=100&nat=CH')
      // En cas de succès met à jour le tableau des clients du magasin
      .then(function (response) {
        commit('setClients', response.data.results)
      })
      // En cas d'erreur, stoppe le script et affiche le message dans la console
      .catch(function (error) {
        throw error
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  clients: (state) => {
    return [...state.clients].sort(comparToClients)
  }
}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace l'objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

function comparToClients (client1, client2) {
  if (client1.name.last.localeCompare(client2.name.last) === 0) {
    return client1.name.first.localeCompare(client2.name.first)
  } else {
    return client1.name.last.localeCompare(client2.name.last)
  }
}
