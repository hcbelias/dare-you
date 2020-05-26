
<template>
  <q-header elevated>
    <q-toolbar class="bg-primary text-white">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggle"
      />

      <q-toolbar-title>Dare you</q-toolbar-title>
      <q-btn
        flat
        round
        dense
        icon="message"
      />
      <q-btn
        flat
        round
        dense
        icon="account_circle"
      />
      <q-btn
        flat
        round
        dense
        icon="settings"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    toggle: Function
  }
}
</script>
