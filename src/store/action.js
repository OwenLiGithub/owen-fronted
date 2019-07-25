import axios from 'axios'
export default {
  getAllPakage({ commit }) {
    let destination = "http://localhost:8849/pakages"
    axios.get(destination).then((response) => {
      var items = response.data
      commit("getData", items)
    })
  },
  getOrderPakage({ commit }) {
    let destination = "http://localhost:8849/pakages?status=1"
    axios.get(destination).then((response) => {
      var items = response.data
      commit("getOrderPakage", items)
    })
  },
  getOkPakage({ commit }) {
    let destination = "http://localhost:8849/pakages?status=2"
    axios.get(destination).then((response) => {
      var items = response.data
      commit("getOkPakage", items)
    })
  },
  getNoOrderPakage({ commit }) {
    let destination = "http://localhost:8849/pakages?status=0"
    axios.get(destination).then((response) => {
      var items = response.data
      commit("getNoOrderPakage", items)
    })
  },
  addPakage({ commit }, pakage) {
    axios.post('http://localhost:8849/pakages', {
      'id': pakage.id,
      'name': pakage.name,
      'phone': pakage.phone,
      'status': 0
    })
      .then(function (response) {
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          alert("不能重复添加！！")
        }
      });
  },
  orderPakage({ commit }, values) {
    let pakageid = values.itemid;
    axios.put('http://localhost:8849/pakages/pakageid', {
      'id': values.itemid,
      'name': "",
      'phone': "",
      'time': values.dataTime,
      'status': 1
    })
      .then(function (response) {
        let destination = "http://localhost:8849/pakages"
        axios.get(destination).then((response) => {
          var items = response.data
          commit("getData", items)
        })
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          alert("不能重复添加！！")
        }
      });
  },
  delItem({ commit }, item) {
    let statuCode = 0
    if (item.isChecked) {
      statuCode = 1
    }
    axios({
      method: 'delete',
      url: 'http://localhost:8848/todolists',
      data: {
        'item': item.content,
        'status': statuCode
      }
    })
    commit('delItem', item)
  },
  confirmRecept({ commit }, pakage) {
    let pageId = pakage.id;
    axios.put('http://localhost:8849/pakages/pageId', {
      'id': pakage.id,
      'name': pakage.name,
      'phone': pakage.phone,
      'status': 2
    })
      .then(function (response) {
        pakage.status = "已取件"
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          alert("不能重复添加！！")
        }
      });
  }
}
