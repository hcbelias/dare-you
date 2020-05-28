<template>
  <q-btn
    push
    :class="className || 'primary'"
    :icon="`fab fa-${{network}}-f`"
    :label="label"
    :size="size || 'md'"
    @click="auth(network)"
  >
  </q-btn>
</template>

<script>
export default {
  name: 'SocialNetworkLoginButton',
  methods: {
    auth (network) {
      debugger
      this.$hello(network).login(this.scope)
        .then(() => {
          this.$router.push('perfil')
        })
    }
  },
  props: {
    className: String,
    network: String,
    label: String,
    scope: Object,
    size: String
  }
}
</script>
