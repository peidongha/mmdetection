const modificationGuides = [
  {
    id: 'mtb-001',
    vehicle: '自行车',
    type: '山地车',
    title: '林道入门三件套：胎、刹、避震设定',
    budget: '¥699-1999',
    difficulty: '新手友好',
    revenue: '门店安装服务 + 配件返佣',
    tags: ['抓地力', '安全', '本地门店']
  },
  {
    id: 'road-001',
    vehicle: '自行车',
    type: '公路车',
    title: '通勤到长途：轮组、坐垫、码表升级清单',
    budget: '¥899-4999',
    difficulty: '进阶',
    revenue: '精选商城 + 达人测评带货',
    tags: ['轻量化', '舒适', '数据训练']
  },
  {
    id: 'fold-001',
    vehicle: '自行车',
    type: '折叠车',
    title: '城市多模态通勤：折叠效率与收纳改装',
    budget: '¥299-1599',
    difficulty: '新手友好',
    revenue: '改装套餐订金 + 企业团购',
    tags: ['通勤', '便携', '收纳']
  },
  {
    id: 'moto-001',
    vehicle: '摩托车',
    type: 'ADV/街车',
    title: '合规安全升级：护杠、射灯、边箱与备案提醒',
    budget: '¥1299-6999',
    difficulty: '需门店施工',
    revenue: '施工预约 + 保险/救援会员',
    tags: ['合规', '长途', '安全']
  }
]

const routeBooks = [
  {
    id: 'route-bike-001',
    vehicle: '自行车',
    title: '城市 30km 咖啡巡航线',
    distance: '30km',
    duration: '2.5h',
    difficulty: '休闲',
    price: '免费引流',
    highlights: ['补给点', '拍照点', '低爬升']
  },
  {
    id: 'route-bike-002',
    vehicle: '自行车',
    title: '周末 120km 低风险拉练线',
    distance: '120km',
    duration: '1天',
    difficulty: '进阶',
    price: '¥19.9 达人精修版',
    highlights: ['分段导航', '撤退点', '补给预算']
  },
  {
    id: 'route-moto-001',
    vehicle: '摩托车',
    title: '川西两日安全景观环线',
    distance: '420km',
    duration: '2天',
    difficulty: '进阶',
    price: '¥39.9 队长版',
    highlights: ['油站', '住宿', '应急救援']
  }
]


const healthProfiles = [
  {
    id: 'newcomer',
    name: '新手恢复型',
    suitableFor: '久坐、睡眠一般、最近运动少的骑友',
    riskLevel: '低强度优先',
    weeklyPlan: '每周 3 次，每次 30-45 分钟，心率控制在轻松可交谈区间',
    trainingFocus: ['低强度有氧', '关节适应', '骑后拉伸'],
    caution: '如出现胸闷、眩晕、膝盖刺痛，应立即停止并咨询医生。'
  },
  {
    id: 'fat-loss',
    name: '减脂耐力型',
    suitableFor: '希望控制体重、提升基础耐力的骑友',
    riskLevel: '循序渐进',
    weeklyPlan: '每周 4 次：2 次 Zone2 有氧、1 次节奏骑、1 次轻松恢复骑',
    trainingFocus: ['Zone2', '踏频稳定', '补水补给'],
    caution: '避免空腹高强度训练，长距离骑行需要补充碳水和电解质。'
  },
  {
    id: 'performance',
    name: '进阶提升型',
    suitableFor: '有稳定骑行基础，想提升速度、爬坡或长距离能力的骑友',
    riskLevel: '强度受控',
    weeklyPlan: '每周 5 次：2 次间歇、2 次有氧、1 次长距离，并安排至少 1 天完全休息',
    trainingFocus: ['间歇训练', '爬坡力量', '恢复监测'],
    caution: '连续疲劳、静息心率异常升高或睡眠变差时，应降低训练量。'
  }
]

const healthMetrics = [
  { label: '身体状态评分', value: '72/100', note: '综合睡眠、疲劳、运动基础与疼痛风险' },
  { label: '本周建议骑行', value: '3-5 次', note: '根据目标和恢复状态动态调整' },
  { label: '单次建议时长', value: '30-90 分钟', note: '新手先控时长，进阶再控强度' },
  { label: '风险提醒', value: '先稳后快', note: '健康建议不替代专业医疗诊断' }
]

const communityPosts = [
  {
    id: 'post-001',
    author: '山地小白',
    title: '预算 1500，山地车先换轮胎还是刹车？',
    replies: 28,
    reward: '30 骑行能量',
    tags: ['山地车', '预算改装']
  },
  {
    id: 'post-002',
    author: '夜骑队长',
    title: '分享一条避开大车的夜骑回家路线',
    replies: 16,
    reward: '路书分佣 12%',
    tags: ['路书', '安全']
  },
  {
    id: 'post-003',
    author: '摩旅阿诚',
    title: '长途摩旅前哪些改装必须合规备案？',
    replies: 34,
    reward: '专家采纳奖励',
    tags: ['摩托车', '合规']
  }
]

const monetization = [
  { label: '改装预约转化', value: '8%-15%', note: '攻略页沉淀需求，导入认证门店履约' },
  { label: '付费路书客单', value: '¥9.9-39.9', note: '达人共创，平台抽佣并提供导航模板' },
  { label: '会员权益', value: '¥19/月', note: '救援、保险、折扣、专属社群' },
  { label: 'AI训练服务', value: '¥29/月', note: '训练订阅、教练复核、设备数据增值' },
  { label: '品牌合作', value: 'CPS/CPA', note: '配件测评、试骑活动、团购' }
]

module.exports = {
  modificationGuides,
  routeBooks,
  communityPosts,
  monetization,
  healthProfiles,
  healthMetrics
}
