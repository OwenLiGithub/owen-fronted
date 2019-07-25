<template>
  <div class="components-input-demo-size">
    <h1>包裹入库</h1>运单号:
    <a-input placeholder="请输入订单号" v-model="order" />
    <br />收件人:
    <a-input placeholder="请输入收件人" v-model="people" />
    <br />电话:
    <a-input placeholder="请输入电话" v-model="phone" />
    <br />重量:
    <a-input placeholder="请输入重量" v-model="weight" />
    <br />
    <a-button type="primary" @click="addPakage">提交</a-button>
  </div>
</template>

<script>
export default {
  props: ["licontent", "liindex"],
  data() {
    return {
      order: "",
      people: "",
      phone: "",
      weight: ""
    };
  },
  methods: {
    addPakage() {
      var myDate = new Date();
      let pakage = {
        id: this.order,
        name: this.people,
        phone: this.phone,
        status: 0
      };
      this.$store.dispatch("addPakage", pakage);
      this.$router.push({ path: "/items" });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.components-input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>