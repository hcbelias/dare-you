<template>
  <q-layout view="lHh Lpr lFf">
    <Toolbar @toggleSidebar="toggle" />
    <Sidebar
      @toggleSidebadr="toggle"
      :leftDrawerOpen="leftDrawerOpen"
    />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Sidebar from 'components/Sidebar'
import Toolbar from 'components/Toolbar'

export default {
  name: 'MainLayout',

  components: {
    Sidebar,
    Toolbar
  },
  data () {
    return {
      leftDrawerOpen: true
    }
  },
  methods: {
    toggle: function () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }

}
</script>
