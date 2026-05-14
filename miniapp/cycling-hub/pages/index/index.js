const { monetization } = require('../../utils/mockData')

Page({
  data: {
    heroTags: ['改装攻略', '骑行路书', '社区经验', '本地履约'],
    sections: [
      { title: '骑行改装攻略', desc: '自行车覆盖山地车、公路车、折叠车；摩托车覆盖合规长途升级。' },
      { title: '骑行路书攻略', desc: '按自行车/摩托车生成路线、补给、风险点与达人收费模板。' },
      { title: '社区讨论分享', desc: '问答、作业、避坑、共创路书，沉淀可复用经验资产。' }
    ],
    monetization
  },

  goToGuides() {
    wx.switchTab({ url: '/pages/guides/guides' })
  }
})
