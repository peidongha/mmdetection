const { healthProfiles, healthMetrics } = require('../../utils/mockData')

const goals = ['健康恢复', '减脂耐力', '速度提升', '长途备赛']
const painOptions = ['无明显不适', '膝盖不适', '腰背紧张', '心肺压力大']
const sleepOptions = ['少于 6 小时', '6-7 小时', '7-8 小时', '8 小时以上']

Page({
  data: {
    goals,
    painOptions,
    sleepOptions,
    healthProfiles,
    healthMetrics,
    form: {
      age: 32,
      weeklyDistance: 40,
      restingHeartRate: 68,
      goalIndex: 0,
      sleepIndex: 1,
      painIndex: 0,
      fatigue: 4
    },
    selectedGoal: goals[0],
    selectedSleep: sleepOptions[1],
    selectedPain: painOptions[0],
    recommendation: healthProfiles[0]
  },

  updateSlider(event) {
    const field = event.currentTarget.dataset.field
    this.setData({ [`form.${field}`]: event.detail.value }, () => this.recommendPlan())
  },

  updatePicker(event) {
    const field = event.currentTarget.dataset.field
    const value = Number(event.detail.value)
    const nextData = { [`form.${field}`]: value }
    if (field === 'goalIndex') nextData.selectedGoal = goals[value]
    if (field === 'sleepIndex') nextData.selectedSleep = sleepOptions[value]
    if (field === 'painIndex') nextData.selectedPain = painOptions[value]
    this.setData(nextData, () => this.recommendPlan())
  },

  recommendPlan() {
    const { form } = this.data
    let recommendation = healthProfiles[0]

    if (form.goalIndex === 1 || (form.weeklyDistance >= 60 && form.fatigue <= 6)) {
      recommendation = healthProfiles[1]
    }

    if ((form.goalIndex >= 2 || form.weeklyDistance >= 120) && form.fatigue <= 5 && form.painIndex === 0) {
      recommendation = healthProfiles[2]
    }

    if (form.painIndex > 0 || form.restingHeartRate >= 85 || form.fatigue >= 8 || form.sleepIndex === 0) {
      recommendation = healthProfiles[0]
    }

    this.setData({ recommendation })
  },

  bookCoach() {
    wx.showModal({
      title: 'AI健康智能助手',
      content: '已生成训练建议。正式上线后可连接运动手表、码表与健康数据，并由认证教练复核高风险计划。',
      showCancel: false
    })
  }
})
