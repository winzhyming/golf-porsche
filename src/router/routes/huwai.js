import Index from '@/views/index'
import HuWai from '@/views/public/dash_huwai'
import Menu from '@/views/acts/menu'
import Schedule from '@/views/acts/schedule/index'
import ScheduleList from '@/views/acts/schedule/list'
import Event from '@/views/acts/event/index'
import EventMenu from '@/views/acts/event/menu'
import EventForm from '@/views/acts/event/form'
import EventRules from '@/views/acts/event/rules'
import EventGroup from '@/views/acts/event/group'
import EventResult from '@/views/acts/event/result'
import Site from '@/views/acts/site/index'
import SiteGuide from '@/views/acts/site/guide'
import Activity from '@/views/acts/activity/index'
import ActivityMenu from '@/views/acts/activity/menu'
import ActivityDress from '@/views/acts/activity/dress'
import ActivityEmergency from '@/views/acts/activity/emergency'
import Hotel from '@/views/acts/map/index'
import HotelMap from '@/views/acts/map/map'
import Forecast from '@/views/acts/forecast/index'
import ForecastWeather from '@/views/acts/forecast/weather'
import AppointsMenu from '@/views/appoints/menu'
import AppointsSubscribe from '@/views/appoints/subscribe/index'
import AppointsSubscribeMenu from '@/views/appoints/subscribe/sub-menu'
import AppointsSubscribeAct1 from '@/views/appoints/subscribe/yuyue/sub-act1'
import AppointsSubscribeAct2 from '@/views/appoints/subscribe/yuyue/sub-act2'
import AppointsSubscribeAct3 from '@/views/appoints/subscribe/yuyue/sub-act3'
import AppointsSubscribeRes from '@/views/appoints/subscribe/sub-result'
import AppointsBus from '@/views/appoints/bus/index'
import AppointsBusShedule from '@/views/appoints/bus/schedule'
import AppointsContact from '@/views/appoints/contact/index'
import AppointsContactEmergency from '@/views/appoints/contact/emergency'
import Mine from '@/views/my/index'
import MineLogin from '@/views/my/login'

import Event2 from '@/views/appoints/subscribe/event/index'
import EventMenu2 from '@/views/appoints/subscribe/event/menu'
import EventForm2 from '@/views/appoints/subscribe/event/form'
import EventRules2 from '@/views/appoints/subscribe/event/rules'
import EventGroup2 from '@/views/appoints/subscribe/event/group'
import EventResult2 from '@/views/appoints/subscribe/event/result'
import Site2 from '@/views/appoints/subscribe/site/index'
import SiteGuide2 from '@/views/appoints/subscribe/site/guide'



export default {
  path: '/',
  component: Index,
  children: [
    { path: '/', name: 'index', component: HuWai },             // 户外组
    { path: 'acts', name: 'huwai.acts', component: Menu },      // 户外组 - 活动详情
    { path: 'acts/schedule', component: Schedule, children: [   // 户外组 - 活动详情 - 日程安排
      { path: '/', name: 'huwai.acts.schedule', component: ScheduleList } 
    ] },
    { path: 'acts/events', component: Event, children: [        // 户外组 - 活动详情 - 赛事信息
      { path: '/', name: 'huwai.acts.event', component: EventMenu },
      { path: 'form', name: 'huwai.acts.event.form', component: EventForm },        // 户外组 - 活动详情 - 赛事信息 - 比赛形式
      { path: 'rules', name: 'huwai.acts.event.rules', component: EventRules },     // 户外组 - 活动详情 - 赛事信息 - 比赛规则
      { path: 'group', name: 'huwai.acts.event.group', component: EventGroup },     // 户外组 - 活动详情 - 赛事信息 - 分组信息
      { path: 'result', name: 'huwai.acts.event.result', component: EventResult },  // 户外组 - 活动详情 - 赛事信息 - 比赛结果
    ] },
    { path: 'acts/site', component: Site, children: [           // 户外组 - 活动详情 - 球场指南
      { path: '/', name: 'huwai.acts.site', component: SiteGuide }
    ] },
    { path: 'acts/act', component: Activity, children: [        // 户外组 - 活动详情 - 活动信息
      { path: '/', name: 'huwai.acts.act', component: ActivityMenu },
      { path: 'dress', name: 'huwai.acts.dress', component: ActivityDress },                // 户外组 - 活动详情 - 活动信息 - 着装建议
      { path: 'emergency', name: 'huwai.acts.emergency', component: ActivityEmergency }     // 户外组 - 活动详情 - 活动信息 - 紧急联络
    ] },
    { path: 'acts/hotel', component: Hotel, children: [           // 户外组 - 活动详情 - 酒店地图
      { path: '/', name: 'huwai.acts.hotel', component: HotelMap }
    ] },
    { path: 'acts/forecast', component: Forecast, children: [     // 户外组 - 活动详情 - 天气预报
      { path: '/', name: 'huwai.acts.forecast', component: ForecastWeather }
    ] },
    { path: 'appoints', name: 'huwai.appoints', component: AppointsMenu },  // 户外组 -  活动预约
    { path: 'appoints/subs', component: AppointsSubscribe, children: [
      { path: '/', name: 'huwai.appoints.subs', component: AppointsSubscribeMenu },           // 户外组 -  活动预约 - 活动预约
      { path: 'act1', name: 'huwai.appoints.subs.act1', component: AppointsSubscribeAct1 },   // 户外组 -  活动预约 - 活动预约 - 近海冲浪 + 豪华游艇
      { path: 'act2', name: 'huwai.appoints.subs.act2', component: AppointsSubscribeAct2 },   // 户外组 -  活动预约 - 活动预约 - 豪华游艇 + 水上摩托艇'
      { path: 'act3', name: 'huwai.appoints.subs.act3', component: AppointsSubscribeAct3 },   // 户外组 -  活动预约 - 活动预约 - 最美海岸试驾体验
      { path: 'res', name: 'huwai.appoints.subs.res', component: AppointsSubscribeRes },      // 户外组 -  活动预约 - 活动预约 - 预约结果
    ] },
    { path: 'appoints/subs/events', component: Event2, children: [        // 户外组 - 活动详情 - 赛事信息
      { path: '/', name: 'huwai.appoints.subs.event', component: EventMenu2 },
      { path: 'form', name: 'huwai.appoints.subs.event.form', component: EventForm2 },        // 户外组 - 活动详情 - 赛事信息 - 比赛形式
      { path: 'rules', name: 'huwai.appoints.subs.event.rules', component: EventRules2 },     // 户外组 - 活动详情 - 赛事信息 - 比赛规则
      { path: 'group', name: 'huwai.appoints.subs.event.group', component: EventGroup2 },     // 户外组 - 活动详情 - 赛事信息 - 分组信息
      { path: 'result', name: 'huwai.appoints.subs.event.result', component: EventResult2 },  // 户外组 - 活动详情 - 赛事信息 - 比赛结果
    ] },
    { path: 'appoints/subs/site', component: Site2, children: [           // 户外组 - 活动详情 - 球场指南
      { path: '/', name: 'huwai.appoints.subs.site', component: SiteGuide2 }
    ] },
    { path: 'appoints/bus', component: AppointsBus, children: [     // 户外组 - 活动预约 - 班车信息
      { path: '/', name: 'huwai.appoints.bus', component: AppointsBusShedule }
    ] },
    { path: 'appoints/contact', component: AppointsContact, children: [     // 户外组 - 活动预约 - 紧急联络
      { path: '/', name: 'huwai.appoints.contact', component: AppointsContactEmergency }
    ] },
    { path: 'mine', component: Mine, children: [     // 户外组 - 我的行程
      { path: '/', name: 'huwai.mine', component: MineLogin }
    ] },

  ]
}