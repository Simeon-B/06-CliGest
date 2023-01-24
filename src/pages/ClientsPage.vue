<template>
  <q-page>
    <h1>Liste des clients</h1>

    <q-list
      v-if="clients.length"
      class="rounded-borders liste-clients"
      bordered
      separator
    >
      <!-- Composant Client.vue avec propriété client -->
      <client
        v-for="client of clients"
        :key="client.id.value"
        :client="client"
      />
    </q-list>

    <p v-else>Pas de clients ...</p>

  </q-page>
</template>

<script>
// Importation du composant Client.vue
import Client from 'components/Client.vue'
// import ClientTest from 'components/Clients/Client-test.vue'
// Importation des outils de mappage Vuex
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ClientsPage',
  components: { Client },
  // Proriétés calculées
  computed: {
    // Donne accès au getter clients() du magasin Clients
    ...mapGetters('clients', ['clients'])
  },
  methods: {
    // Donne accès à l'action getClientsApi() du magasin Clients
    ...mapActions('clients', ['getClientsApi'])
  },
  // Après que le composant soit construit
  mounted () {
    // Exécute l'action getClientsApi() du magasin Client
    // qui va récupérer les données de l'API et les ajoute au magasin
    this.getClientsApi()
  }
}
</script>

<style scoped>
h1 {
  margin: 9% 6.5% 6% 6.5%;
  alignment: left;
}
.liste-clients {
  margin: 2% 6.5%;
}
</style>
