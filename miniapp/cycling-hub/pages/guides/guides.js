const { modificationGuides } = require('../../utils/mockData')

Page({
  data: {
    activeVehicle: '全部',
    vehicles: ['全部', '自行车', '摩托车'],
    bikeTypes: ['山地车', '公路车', '折叠车'],
    bikeTypeText: '山地车 / 公路车 / 折叠车',
    guides: modificationGuides,
    filteredGuides: modificationGuides
  },

  setVehicle(event) {
    const activeVehicle = event.currentTarget.dataset.vehicle
    const filteredGuides = activeVehicle === '全部'
      ? modificationGuides
      : modificationGuides.filter((guide) => guide.vehicle === activeVehicle)
    this.setData({ activeVehicle, filteredGuides })
  },

  reserveService(event) {
    const title = event.currentTarget.dataset.title
    wx.showToast({ title: `已预约：${title}`, icon: 'none' })
  }
})
