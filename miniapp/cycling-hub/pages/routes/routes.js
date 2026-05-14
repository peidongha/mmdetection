const { routeBooks } = require('../../utils/mockData')

Page({
  data: {
    activeVehicle: '全部',
    vehicles: ['全部', '自行车', '摩托车'],
    routeBooks,
    filteredRoutes: routeBooks,
    routePrompt: '输入出发地、里程、时间、车辆类型，即可生成路书骨架。'
  },

  setVehicle(event) {
    const activeVehicle = event.currentTarget.dataset.vehicle
    const filteredRoutes = activeVehicle === '全部'
      ? routeBooks
      : routeBooks.filter((route) => route.vehicle === activeVehicle)
    this.setData({ activeVehicle, filteredRoutes })
  },

  generateRoute() {
    wx.showModal({
      title: '路书生成器',
      content: 'MVP 阶段先用表单收集需求；上线后可接入地图 API 与 AI 生成补给点、风险点和收费模板。',
      showCancel: false
    })
  }
})
