<template>
  <q-page class="bg-bg2" style="overflow:hidden">
    <div class="gradient-bg-primary" style="height:10px"></div>
    <div class="q-pa-md">
      <div class="round-borders shadow-4 bg-bg1 q-pa-md">
        <div class="row gutter-sm">
          <div class="col-xs-12 col-lg-9 ">
            <div class="">
              <div class="q-mb-md">
                <span class="q-title">Example Homepage</span>
                <span class="q-caption"> (src/extensions/pages/home.vue).</span>
              </div>
              <div class="text-text2">
                <p>{{ $t("home.description_p1") }}</p>
                <p>{{ $t("home.description_p2") }}</p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-3 ">
            <div class="row justify-end ">
              <q-btn
                v-if="!getAccountName"
                size="md"
                color="primary"
                :label="$t('home.signin')"
                @click="login"
              />
              <q-btn
                v-else
                size="md"
                color="primary"
                :label="$t('home.signout')"
                @click="logout"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from "quasar";
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      email_address: "",
      language: "",
      onsubscribemsg: "",
      loading: false
    };
  },

  computed: {
    ...mapGetters({
      getAccountName: "user/getAccountName",
      getIsDark: "ui/getIsDark"
    })
  },

  methods: {
    openURL,
    login() {
      this.$store.dispatch("global/login");
    },
    logout() {
      this.$store.dispatch("global/logout");
    }
  }
};
</script>

<style lang="stylus">
@import '~variables'
</style>
