<template>
  <div>
    <q-btn-dropdown
      color="teal"
      rounded
      :label="$i18n.locale"
    >
      <q-list>
        <q-item
          v-for="locale in $i18n.availableLocales"
          :key="locale"
          clickable
          v-close-popup
          @click="onLocaleClick"
        >
          <q-item-section>
            <q-item-label>{{locale}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelection',
  data: function () {
    return {
      setLocale: locale => {
        this.$root.$i18n.locale = locale
      }
    }
  },
  methods: {
    onLocaleClick (event) {
      this.setLocale(event.target.innerText)
    }
  }
}
</script>
