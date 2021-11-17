 import Index from '@/views/index'
 import Groups from '@/views/public/groups'
 
 export default {
  path: '/',
  component: Index,
  
  children: [
    { path: '/dashboard', name: 'dashboard', component: Groups }


  ]
}



// WEBPACK FOOTER //
// ./src/router/routes/public.js