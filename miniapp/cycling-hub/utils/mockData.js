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
  { label: '品牌合作', value: 'CPS/CPA', note: '配件测评、试骑活动、团购' }
]

module.exports = {
  modificationGuides,
  routeBooks,
  communityPosts,
  monetization
}
