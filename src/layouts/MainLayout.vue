<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer class="drawer"
              breakpoint="800"
              v-model="leftDrawerOpen"
              show-if-above
              bordered
              width="250"
    >
      <q-list>
        <q-item-label header>
          Menu de navigation
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          v-show="(user && link.title !== 'Connexion') || (!user && link.needConnect === false)"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <p>laskdf</p>
    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          :to="link.link"
          :icon="link.icon"
          :label="link.title"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { mapState, mapActions } from 'vuex'

const linksList = [
  {
    title: 'Home',
    caption: '',
    icon: 'home',
    link: '#/home',
    needConnect: false
  },
  {
    title: 'Clients',
    caption: '',
    icon: 'list',
    link: '#/clients',
    needConnect: false
  }
]

export default defineComponent({
  name: 'MainLayout',
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['deconnecterUtilisateur'])
  },

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen
    }
  }
})
</script>

<style>
/* Applique les règles de ce bloc uniquement aux écrans >= 768px */
@media screen and (min-width: 600px) {
  /* Cache les éléments avec la classe CSS q-footer */
  .q-footer {
    display: none;
  }
}
.drawer {
  background-color: #d5f0f8;
}
</style>

<style lang="sass">
/* Applique les règles de ce bloc uniquement aux écrans >= 768px */
@media screen and (min-width: 768px)
  /* Cache les éléments avec la classe CSS q-footer */
  .q-footer
    display: none

/* Lien actif du menu latéral */
.q-drawer
  .q-router-link--exact-active
    color: white !important
</style>
