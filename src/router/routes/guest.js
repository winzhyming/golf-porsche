import Index from '@/views/index'
import Menu from '@/views/guest/menu'
import SubMain from '@/views/guest/subscribe/index' 
import SubMenu from '@/views/guest/subscribe/sub-menu'
import SubPorsche from '@/views/guest/subscribe/sub-porsche'
import SubMovie from '@/views/guest/subscribe/sub-movie'
import SubVolcano from '@/views/guest/subscribe/sub-volcano'
import SubForm from '@/views/guest/subscribe/sub-form'
import SubResult from '@/views/guest/subscribe/sub-result'
import Sub01 from '@/views/guest/subscribe/yuyue/sub-ytldssssj'
import Sub02 from '@/views/guest/subscribe/yuyue/sub-yanuoda'
import Sub03 from '@/views/guest/subscribe/yuyue/sub-pinjiu'
import Sub04 from '@/views/guest/subscribe/yuyue/sub-yoga'
import Sub05 from '@/views/guest/subscribe/yuyue/sub-golf'
import Sub06 from '@/views/guest/subscribe/yuyue/sub-tebie' 
import ScheduleMain from '@/views/guest/schedule/index'
import ScheduleBus from '@/views/guest/schedule/bus'
import ContactMain from '@/views/guest/contact/index'
import ContactEmergency from '@/views/guest/contact/emergency'

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
      path: '/guest/subscribe',
      component: SubMain,
      children: [
        {
          path: '/',
          name: 'subscribe.menu',
          component: SubMenu
        },
        {
          path: 'water',
          name: 'subscribe.water',
          component: Sub01
        },
        {
          path: 'yanuoda',
          name: 'subscribe.yanuoda',
          component: Sub02
        },
        {
          path: 'pinjiu',
          name: 'subscribe.pinjiu',
          component: Sub03
        },
        {
          path: 'yoga',
          name: 'subscribe.yoga',
          component: Sub04
        },
        {
          path: 'golf',
          name: 'subscribe.golf',
          component: Sub05
        },
        {
          path: 'sub/tebie',
          name: 'subscribe.tebie',
          component: Sub06
        },
        {
          path: 'sub/porsche',
          name: 'subscribe.porsche',
          component: SubPorsche
        },
        {
          path: 'sub/movie',
          name: 'subscribe.movie',
          component: SubMovie
        },
        {
          path: 'sub/volcanic',
          name: 'subscribe.volcano',
          component: SubVolcano
        },
        {
          path: 'sub/form/submit',
          name: 'subscribe.form',
          component: SubForm
        },
        {
          path: 'sub/form/submit/result',
          name: 'subscribe.result',
          component: SubResult
        }
      ]
    }
  ]
}



// WEBPACK FOOTER //
// ./src/router/routes/guest.js