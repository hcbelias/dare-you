<template>
  <q-page class="flex flex-center">
      user account

  </q-page>
</template>

<script>
export default {
  name: 'UserAccountPage',
  data () {
    return {
      profile: {}
    }
  },
  mounted () {
    this.getProfile('facebook')
  },
  methods: {
    getProfile (network) {

    }
  }
}
</script>
