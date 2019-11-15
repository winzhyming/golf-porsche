import Index from '@/views/index'
import Main from '@/views/form/index'
import Drive from '@/views/form/drive'
import Finish from '@/views/form/finish'
import Conditions from '@/views/form/conditions'
export default {
  path: '/form',
  component: Index,
  
  children: [
    {
      path: '/',
      component: Main,
      
      children: [
        {
          path: '/',
          name: 'form.drive',
          component: Drive
        },
        {
          path: 'cond',
          name: 'form.cond',
          component: Conditions
        },
        {
          path: 'finish',
          name: 'form.finish',
          component: Finish
        }
      ]
    }
  ]
}



// WEBPACK FOOTER //
// ./src/router/routes/form.js