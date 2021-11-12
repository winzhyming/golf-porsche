import Index from '@/views/index'
import Qinzi from '@/views/public/dash_qinzi'
import QinziMenu from '@/views/qinzi/acts/menu'
import Schedule from '@/views/qinzi/acts/schedule/index'
import ScheduleList from '@/views/qinzi/acts/schedule/list'
import Activity from '@/views/qinzi/acts/activity/index'
import ActivityMenu from '@/views/qinzi/acts/activity/menu'
import ActivityDress from '@/views/qinzi/acts/activity/dress'
import ActivityEmergency from '@/views/qinzi/acts/activity/emergency'
import Hotel from '@/views/qinzi/acts/map/index'
import HotelMap from '@/views/qinzi/acts/map/map'
import Forecast from '@/views/qinzi/acts/forecast/index'
import ForecastWeather from '@/views/qinzi/acts/forecast/weather'
import AppointsMenu from '@/views/qinzi/appoints/menu'
import AppointsSubscribe from '@/views/qinzi/appoints/subscribe/index'
import AppointsSubscribeMenu from '@/views/qinzi/appoints/subscribe/sub-menu'
import AppointsSubscribeAct1 from '@/views/qinzi/appoints/subscribe/yuyue/sub-act1'
import AppointsSubscribeAct2 from '@/views/qinzi/appoints/subscribe/yuyue/sub-act2'
import AppointsSubscribeAct3 from '@/views/qinzi/appoints/subscribe/yuyue/sub-act3'
import AppointsSubscribeAct4 from '@/views/qinzi/appoints/subscribe/yuyue/sub-act4'
import AppointsSubscribeRes from '@/views/qinzi/appoints/subscribe/sub-result'
import AppointsBus from '@/views/qinzi/appoints/bus/index'
import AppointsBusShedule from '@/views/qinzi/appoints/bus/schedule'
import AppointsContact from '@/views/qinzi/appoints/contact/index'
import AppointsContactEmergency from '@/views/qinzi/appoints/contact/emergency'
import Mine from '@/views/qinzi/my/index'
import MineLogin from '@/views/qinzi/my/login'

export default {
  path: '/qinzi',
  component: Index,
  children: [
    { path: '/', name: 'qinzi', component: Qinzi },             // 亲子组
    { path: 'acts', name: 'qinzi.acts', component: QinziMenu }, // 亲子组 - 活动详情
    { path: 'acts/schedule', component: Schedule, children: [   // 亲子组 - 活动详情 - 日程安排
      { path: '/', name: 'qinzi.acts.schedule', component: ScheduleList } 
    ] },
    { path: 'acts/act', component: Activity, children: [        // 亲子组 - 活动详情 - 活动信息
      { path: '/', name: 'qinzi.acts.act', component: ActivityMenu },
      { path: 'dress', name: 'qinzi.acts.dress', component: ActivityDress },                // 亲子组 - 活动详情 - 活动信息 - 着装建议
      { path: 'emergency', name: 'qinzi.acts.emergency', component: ActivityEmergency }     // 亲子组 - 活动详情 - 活动信息 - 紧急联络
    ] },
    { path: 'acts/hotel', component: Hotel, children: [           // 亲子组 - 活动详情 - 酒店地图
      { path: '/', name: 'qinzi.acts.hotel', component: HotelMap }
    ] },
    { path: 'acts/forecast', component: Forecast, children: [     // 亲子组 - 活动详情 - 天气预报
      { path: '/', name: 'qinzi.acts.forecast', component: ForecastWeather }
    ] },
    { path: 'appoints', name: 'qinzi.appoints', component: AppointsMenu },  // 亲子组 -  活动预约
    { path: 'appoints/subs', component: AppointsSubscribe, children: [
      { path: '/', name: 'qinzi.appoints.subs', component: AppointsSubscribeMenu },           // 亲子组 -  活动预约 - 活动预约
      { path: 'act1', name: 'qinzi.appoints.subs.act1', component: AppointsSubscribeAct1 },   // 亲子组 -  活动预约 - 活动预约 - 12月8日 少年英雄组 上午 儿童高尔夫训练课程
      { path: 'act2', name: 'qinzi.appoints.subs.act2', component: AppointsSubscribeAct2 },   // 亲子组 -  活动预约 - 活动预约 - 12月8日 少年英雄组 下午 儿童游乐体验项目
      { path: 'act3', name: 'qinzi.appoints.subs.act3', component: AppointsSubscribeAct3 },   // 亲子组 -  活动预约 - 活动预约 - 12月8日 少年竞速组 上午 儿童游乐体验项目
      { path: 'act3', name: 'qinzi.appoints.subs.act4', component: AppointsSubscribeAct4 },   // 亲子组 -  活动预约 - 活动预约 - 12月8日 少年竞速组 下午 儿童高尔夫训练课程
      { path: 'res', name: 'qinzi.appoints.subs.res', component: AppointsSubscribeRes },      // 亲子组 -  活动预约 - 活动预约 - 预约结果
      
    ] },
    { path: 'appoints/bus', component: AppointsBus, children: [     // 亲子组 - 活动预约 - 班车信息
      { path: '/', name: 'qinzi.appoints.bus', component: AppointsBusShedule }
    ] },
    { path: 'appoints/contact', component: AppointsContact, children: [     // 亲子组 - 活动预约 - 紧急联络
      { path: '/', name: 'qinzi.appoints.contact', component: AppointsContactEmergency }
    ] },
    { path: 'mine', component: Mine, children: [     // 亲子组 - 我的行程
      { path: '/', name: 'qinzi.mine', component: MineLogin }
    ] },
  ]
}