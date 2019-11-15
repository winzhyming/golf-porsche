import Index from '@/views/index'
import Menu from '@/views/guest/menu'
import SubMain from '@/views/guest/subscribe/index' 
import SubMenu from '@/views/guest/subscribe/sub-menu'
import SubPorsche from '@/views/guest/subscribe/sub-porsche'
import SubMovie from '@/views/guest/subscribe/sub-movie'
import SubVolcano from '@/views/guest/subscribe/sub-volcano'
import SubForm from '@/views/guest/subscribe/sub-form'
import SubResult from '@/views/guest/subscribe/sub-result'
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
      path: '/subscribe',
      component: SubMain,
      children: [
        {
          path: 'menu',
          name: 'subscribe.menu',
          component: SubMenu
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