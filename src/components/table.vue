<template>
  <div>
    <a-table bordered :dataSource="this.$store.state.showItems" :columns="columns">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>
      <template slot="operation" slot-scope="text, record">
           <a-button type="primary" @click="confirmRecept(record)">确认收货</a-button>
      </template>
    </a-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "运单号",
          dataIndex: "id",
          width: "10%",
          scopedSlots: { customRender: "id" }
        },
        {
          width: "10%",
          title: "收件人",
          dataIndex: "name"
        },
        {
          width: "10%",
          title: "电话",
          dataIndex: "phone"
        },
        {
          width: "10%",
          title: "预约时间",
          dataIndex: "time"
        },
        {
          width: "10%",
          title: "状态",
          dataIndex: "status"
        },
        {
          width: "10%",
          title: "操作",
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" }
        }
      ]
    };
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    confirmRecept(record){
        this.$store.dispatch('confirmRecept',record)
    }
  }
};
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>