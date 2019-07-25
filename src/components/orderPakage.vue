<template>
  <div class="addGood">
    <div class="addGoodContent">
      <a-row type="flex">
        <a-col :span="8"></a-col>
        <a-col :span="2">
          <h2>预约取件</h2>
        </a-col>
        <a-col :span="8"></a-col>
      </a-row>

      <a-row type="flex">
        <a-col :span="6"></a-col>
        <a-col :span="6">
          <div>
            <a-form :form="form" @submit="handleSubmit">
              <a-form-item
                label="运单号"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
              >
                <a-input v-decorator="[
          'itemid']" placeholder="输入运单号" />
              </a-form-item>

              <a-form-item v-bind="formItemLayout" label="取件时间">
                <a-date-picker
                  v-decorator="['dateTime']"
                  show-time
                  format="YYYY-MM-DD HH:mm:ss"
                />
              </a-form-item>
              <a-form-item>
                <a-button @click="showConfirm">预约</a-button>
                <a-button type="primary" html-type="submit" >预约</a-button>
                <a-button type="primary">取消</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <a-col :span="6"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "addGood",

  data() {
    return {
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: {
          xs: { span: 0 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 10 },
          sm: { span: 10 }
        }
      }
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }
          const values = {
          ...fieldsValue,
          dateTime: fieldsValue["dateTime"].valueOf(),
          itemid:fieldsValue["itemid"]
        };
        this.$store.dispatch("orderPakage",values)
        this.$router.push({ path: "/items" });
      });
    },
    showConfirm() {
      this.$confirm({
        title: "您确认要预约?",
        content: "确认预约请点击ok",
        onOk() {
          // this.$store.dispatch('orderPakage',this.values)
          console.log("xxxxxx");
        },
        onCancel() {}
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
