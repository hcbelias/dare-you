
<template>
  <q-header elevated>
    <q-toolbar class="bg-primary text-white">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        class="q-mr-sm"
        @click="toggle"
      />

      <q-separator
        vertical
        inset
      />
      <q-toolbar-title>{{ $t("general.title") }}</q-toolbar-title>
      <LanguageSelection />
    </q-toolbar>
  </q-header>
</template>

<script>
import LanguageSelection from './LanguageSelection'
export default {
  components: {
    LanguageSelection
  },
  name: 'Toolbar',
  methods: {
    toggle: function () {
      this.$emit('toggleSidebar')
    }
  }
}
</script>
