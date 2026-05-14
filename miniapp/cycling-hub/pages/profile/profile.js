const { monetization } = require('../../utils/mockData')

Page({
  data: {
    user: {
      nickname: '未来骑友',
      membership: '体验会员',
      points: 128
    },
    monetization,
    launchChecklist: [
      '配置微信小程序 AppID 与合法域名',
      '接入云开发数据库：guides、routes、posts、orders',
      '开通微信支付：付费路书、会员、预约订金',
      '邀请 10 位达人和 5 家本地门店冷启动'
    ]
  }
})
