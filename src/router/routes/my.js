import Index from '@/views/index'
import Main from '@/views/my/index'
import Login from  '@/views/my/login'


export default {
  path: '/my',
  component: Index,

  children: [
    {
      path: '/',
      component: Main,
      children: [{
        path: '/login',
        name: 'my.login',
        component: Login
      }]
    }
  ]
}