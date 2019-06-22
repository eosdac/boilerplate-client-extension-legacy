<template>
  <q-page class="bg-bg2" style="overflow:hidden">
    <div class="bg-bg1 bg-logo q-px-md q-pb-md">
      <img
        src="../../extensions/branding/images/logo/logo-main.svg"
        class="animate-scale"
        style="width:50%; min-width:250px; max-width:500px"
      />
    </div>
    <div class="gradient-bg-primary" style="height:10px"></div>
    <div class="q-pa-md">
      <div class="round-borders shadow-4 bg-bg1 q-pa-md">
        <div class="row gutter-sm">
          <div class="col-xs-12 col-lg-9 ">
            <div class="">
              This is an example home page (src/extensions/pages/home.vue).
            </div>
          </div>
          <div class="col-xs-12 col-lg-3 ">
            <div class="row justify-end ">
              <q-btn
                v-if="!getAccountName"
                size="md"
                color="primary"
                :label="$t('index.signin')"
                @click="login"
              />
              <q-btn
                v-else
                size="md"
                color="primary"
                :label="$t('index.signout')"
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
    },

    async subscribeNewsletter() {
      this.onsubscribemsg = "";
      let data = { email: this.email_address, language: this.language };

      if (!this.$helper.isEmail(this.email_address) || this.language == "") {
        this.onsubscribemsg = this.$t("index.valid_input_required");
        return false;
      }

      // let url =
      //   this.$helper.noBackSlash(this.$configFile.get("memberclientapi")) +
      //   "/subscribe";

      let url = "https://toolkit-api.eosdac.io/subscribe";

      this.loading = true;
      try {
        let result = await this.$axios.post(url, data);
        this.onsubscribemsg = this.$t("index." + result.data.message);
        // console.log(result);
      } catch (e) {
        this.onsubscribemsg = this.$t("index.error_occured");
        console.log(e);
      }
      this.clearForm();
    },

    clearForm() {
      this.loading = false;
      this.email_address = "";
      this.language = "";
    }
  }
};
</script>

<style lang="stylus">
@import '~variables'



.index_border_right_col{
  border-right:1px solid grey;
}
.row_boxes_index_page{
  top:-100px;
  transition: all .2s ease-in-out;
}
.partnerbox{
  top:0px;
  position:relative;
}


@media screen and (max-width: 1200px) {
  .partnerbox{
    top:40px!important;;
  }
  .row_boxes_index_page{
    top:20px !important;
  }
  .index_border_right_col{
    border-right: none !important;
  }

}
</style>
