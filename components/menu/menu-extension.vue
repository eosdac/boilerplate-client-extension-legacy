<template>
  <div>
    <q-item to="/example">
      <q-item-side icon="check" color="text2" />
      <q-item-main :label="$t('example.exmaple_menu')" class="text-text1" />
    </q-item>
    <q-item to="/your_app">
      <q-item-side icon="check" color="text2" />
      <q-item-main label="Go to App" class="text-text1" />
    </q-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { openURL } from "quasar";

export default {
  name: "menuExtension",
  data() {
    return {};
  },
  methods: {
    openURL
  },
  computed: {
    ...mapGetters({
      getSettingByName: "user/getSettingByName"
    })
  }
};
</script>

<style></style>
