const { communityPosts } = require('../../utils/mockData')

Page({
  data: {
    communityPosts,
    contributionRules: [
      '优质回答被采纳获得骑行能量，可兑换路书、保养券和会员天数。',
      '达人发布付费路书，平台提供模板、审核和分佣结算。',
      '门店用真实案例回答问题，获得本地曝光和预约线索。'
    ]
  },

  publishPost() {
    wx.showActionSheet({
      itemList: ['提问求助', '分享改装作业', '发布路书经验'],
      success: () => wx.showToast({ title: '已进入发布流程', icon: 'none' })
    })
  }
})
