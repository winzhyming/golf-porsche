 import Index from '@/views/index'
 import Dashboard from '@/views/public/index'
 import Test from '@/views/test'
 
 export default {
  path: '/',
  component: Index,
  
  children: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
}



// WEBPACK FOOTER //
// ./src/router/routes/public.js