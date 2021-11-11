 import Index from '@/views/index'
 import Groups from '@/views/public/groups'
 
 export default {
  path: '/',
  component: Index,
  
  children: [
    { path: '/', name: 'index', component: Groups }


  ]
}



// WEBPACK FOOTER //
// ./src/router/routes/public.js