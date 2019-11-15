 import Index from '@/views/index'
 import Dashboard from '@/views/public/index'
 
 export default {
  path: '/',
  component: Index,
  
  children: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
}



// WEBPACK FOOTER //
// ./src/router/routes/public.js