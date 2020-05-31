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
import Config from '../config'

export default {
  name: 'LoginPage',
  methods: {
    auth (network) {
      const path = `${Config.API_URL}/auth/${network}`
      debugger
      this.$axios.get(path)
        .then(() => {
          debugger
          this.$router.push('me')
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
