
export default {
  getData(state, items) {
    state.showItems = [],
    state.listItems = [],
    items.map((a) => {
      let item = {
        id:a.id,
        name:a.name,
        phone:a.phone,
        status:a.status,
        time:a.time
      }
      if (a.status === 0) {
        item.status = "未预约"
      }else if(a.status === 1){
        item.status = "已预约"
      }else if(a.status === 2){
        item.status = "已取件"
      }else if(a.status === 3){
        item.status = "未取件"
      }
      state.showItems.push(item)
      state.listItems.push(item)
    })
  },
  getOrderPakage(state, items) {
    state.showItems = [],
    state.listItems = [],
    items.map((a) => {
      let item = {
        id:a.id,
        name:a.name,
        phone:a.phone,
        status:a.status,
        time:a.time
      }
      if (a.status === 1) {
        item.status = "已预约"
      }
      state.showItems.push(item)
      state.listItems.push(item)
    })
  },
  getOkPakage(state, items) {
    state.showItems = [],
    state.listItems = [],
    items.map((a) => {
      let item = {
        id:a.id,
        name:a.name,
        phone:a.phone,
        status:a.status,
        time:a.time
      }
      if (a.status === 2) {
        item.status = "已取件"
      }
      state.showItems.push(item)
      state.listItems.push(item)
    })
  },
  getNoOrderPakage(state, items) {
    state.showItems = [],
    state.listItems = [],
    items.map((a) => {
      let item = {
        id:a.id,
        name:a.name,
        phone:a.phone,
        status:a.status,
        time:a.time
      }
      if (a.status == 0) {
        item.status = "未预约"
      }
      state.showItems.push(item)
      state.listItems.push(item)
    })
  },
  addShowItems(state, item) {
    state.showItems.push(item),
      state.listItems.push(item)
  },
  delItem(state, item) {
    state.showItems = state.showItems.filter(at => {
      return at.content != item.content
    })
  },
  confirmRecept(state,pakage){
    
  }
}