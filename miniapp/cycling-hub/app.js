App({
  globalData: {
    appName: '骑友共创营',
    city: '成都',
    userRole: 'rider',
    pointsName: '骑行能量'
  },

  onLaunch() {
    this.bootstrapGrowthLoop()
  },

  bootstrapGrowthLoop() {
    this.globalData.growthLoop = [
      'AI问诊式改装建议',
      '达人共创路书分佣',
      '社区口碑问答沉淀',
      '本地门店履约与售后'
    ]
  }
})
