<template>
  <div>
    <span>菜鸟驿站</span>
    <a-button type="primary" @click="getAllPakage">ALL</a-button>
    <a-button type="primary" @click="getOrderPakage">已预约</a-button>
    <a-button type="primary" @click="getOkPakage">已取件</a-button>
    <a-button type="primary" @click="getNoOrderPakage">未预约</a-button>
    <tablex></tablex>
  </div>
</template>
<script >
import item from "./item";
import tablex from "./table"
export default {
  components: {
    "todo-item": item,
    tablex
  },
  data() {
    return {
      msg: "",
      ModalText: "确认添加",
      visible: false,
      confirmLoading: false
    };
  },
  methods: {
    getAllPakage(){
        this.$store.dispatch('getAllPakage')
    },
    getOrderPakage(){
       this.$store.dispatch('getOrderPakage')
    },
     getOkPakage(){
       this.$store.dispatch('getOkPakage')
    },
     getNoOrderPakage(){
       this.$store.dispatch('getNoOrderPakage')
    },
    handleOk(e) {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    }
  }
};
</script>
<style>
</style>
