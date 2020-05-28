
<template>
  <q-drawer
    v-model="open"
    show-if-above
    :width="200"
    :breakpoint="400"
  >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
      <q-list padding>
        <SidebarSection
          v-for="link in mainLinks"
          :key="link.title"
          v-bind="link"
        />

      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      src="https://cdn.quasar.dev/img/material.png"
      style="height: 150px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar
          size="56px"
          class="q-mb-sm"
        >
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="text-weight-bold">Henrique Elias</div>
        <div>@hcbelias</div>
      </div>
    </q-img>
  </q-drawer>
</template>

<script>
import SidebarSection from './SidebarSection'

export default {
  name: 'Sidebar',
  props: {
    leftDrawerOpen: Boolean
  },
  components: {
    SidebarSection
  },
  computed: {
    open: {
      get () {
        return this.leftDrawerOpen
      },
      set (val) {
        this.$emit('toggleSidabar', val)
      }
    }
  },
  data () {
    return {
      mainLinks: [
        {
          icon: 'send',
          title: this.$t('sidebar.main.title'),
          caption: this.$t('sidebar.main.caption')
        },
        {
          icon: 'star',
          title: this.$t('sidebar.challenges.title'),
          caption: this.$t('sidebar.challenges.caption')
        },
        {
          icon: 'supervisor_account',
          title: this.$t('sidebar.friends.title'),
          caption: this.$t('sidebar.friends.caption')
        },
        {
          icon: 'messages',
          title: this.$t('sidebar.messages'),
          caption: 'dfdf'
        },
        {
          icon: 'personal',
          title: this.$t('sidebar.account'),
          caption: 'sd'
        }, {
          icon: 'settings',
          title: this.$t('sidebar.settings'),
          caption: 'ds'
        },
        {
          icon: 'logout',
          title: this.$t('sidebar.logout'),
          caption: 'ds'
        }
      ]
    }
  }
}
</script>
