export const MENU = [
    {
      name: 'Dashboard',
      path: '/',
      icon:'fas fa-tachometer-alt'
    },
    {
      name: 'Algo',
      path: '/medic/loginv2',
      icon:'fas fa-chart-line'
    },
    {
      name:'Blank',
      path:'/blank',
      icon:'far fa-copy'
    },
    {
      name: 'Medicamentos',
      icon:'fas fa-capsules',
      children: [
        {
          name: 'Index',
          path: '/medicamentos'
        },
  
        {
          name: 'R2',
          path: '/r2'
        },
        {
          name:'Listado medicamentos',
          path:'/listado-medicamentos'
        }
      ]
    },
    {
      name:'Venta',
      path:'',
      icon:''
    },
    {
      name:'Reportes',
      icon:'',
      children:[
        {
          name:'prueba1',
        path:''
      },
      {
        name:'algo',
        path:'/algo'
      }
      ]
    },
    {
      name:'Empleados',
      path:'',
      icon:'fas fa-users'
    }
  ];