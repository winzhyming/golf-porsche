import Index from '@/views/index'
import Menu from '@/views/guest/menu'
import SubMain from '@/views/guest/subscribe/index' 
import SubMenu from '@/views/guest/subscribe/sub-menu'
import SubMenu2 from '@/views/guest/subscribe/sub-menu2'
import SubPorsche from '@/views/guest/subscribe/sub-porsche'
import SubPorsche2 from '@/views/guest/subscribe/sub-porsche2'
import SubChonglang from '@/views/guest/subscribe/sub-chonglang'
import SubMianshui from '@/views/guest/subscribe/sub-mianshui'
import SubForm from '@/views/guest/subscribe/sub-form'
import SubResult from '@/views/guest/subscribe/sub-result'
import ScheduleMain from '@/views/guest/schedule/index'
import ScheduleBus from '@/views/guest/schedule/bus'
import ContactMain from '@/views/guest/contact/index'
import ContactEmergency from '@/views/guest/contact/emergency'
import SubHaian from '@/views/guest/subscribe/sub-haian'
import SubHaian2 from '@/views/guest/subscribe/sub-haian2'
import SubCoffee from '@/views/guest/subscribe/sub-coffee'
import SubWater from '@/views/guest/subscribe/sub-water'
import SubDate from '@/views/guest/subscribe/sub-date'

export default {
  path: '/guest',
  component: Index,
  
  children: [
    {
      path: '/',
      name: 'guest',
      component: Menu
    },
    {
      path: '/contact',
      component: ContactMain,
      children: [
        {
          path: 'way',
          name: 'contact.emergency',
          component: ContactEmergency
        }
      ]
    },
    {
      path: '/schedule',
      component: ScheduleMain,
      children: [
        {
          path: 'bus',
          name: 'schedule.bus',
          component: ScheduleBus
        }
      ]
    },
    {
      path: '/subscribe',
      component: SubMain,
      children: [
        {
          path: 'date/three',
          name: 'subscribe.three',
          component: SubMenu
        },
        {
          path: 'date',
          name: 'subscribe.date',
          component: SubDate,
        },
        {
          path: 'date/four',
          name: 'subscribe.four',
          component: SubMenu2
        },
        {
          path: 'date/four/haian',
          name: 'subscribe.haian',
          component: SubHaian
        },
        {
          path: 'date/four/coffee',
          name: 'subscribe.coffee',
          component: SubCoffee
        },
        {
          path: 'date/four/water',
          name: 'subscribe.water',
          component: SubWater
        },
        {
          path: 'date/four/porsche',
          name: 'subscribe.porsche',
          component: SubPorsche
        },
        {
          path: 'date/three/porsche2',
          name: 'subscribe.porsche2',
          component: SubPorsche2
        },
        {
          path: 'date/three/haian2',
          name: 'subscribe.haian2',
          component: SubHaian2
        },
        {
          path: 'sub/three/chonglang',
          name: 'subscribe.chonglang',
          component: SubChonglang
        },
        {
          path: 'sub/three/mianshui',
          name: 'subscribe.mianshui',
          component: SubMianshui
        },
        {
          path: 'sub/all/act/form/submit',
          name: 'subscribe.form',
          component: SubForm
        },
        {
          path: 'sub/all/act/form/submit/result',
          name: 'subscribe.result',
          component: SubResult
        }
      ]
    }
  ]
}



// WEBPACK FOOTER //
// ./src/router/routes/guest.js