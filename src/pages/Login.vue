<template>
  <q-page class="docs-input row justify-center">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xl dark">
      <div class="q-mt-xl">
        <q-btn
          color="primary"
          push
          class="full-width"
          icon="fab fa-facebook-f"
          label="Entrar com facebook"
          size="md"
          @click="auth('facebook')"
        >
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    auth (network) {
      this.$hello(network).login({ scope: 'friends' })
        .then(() => {
          this.$router.push('perfil')
        })
    }
  }
}
</script>

<style scoped>
.dark {
  background: #1817309a;
}
</style>
