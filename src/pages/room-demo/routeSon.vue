<template>
    <div>
        <h2>路由嵌套</h2>
        
        <ul>
            <li>
                <router-link to="/routeSon/routeSon1">tab1</router-link> 
            </li>
            <li>
                 <router-link to="/routeSon/routeSon2">tab2</router-link> 
            </li>
        </ul>
        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
/*
    路由的嵌套
    1、配置路由  引入 配置父路由
    import RouteSon from '@/pages/RouteSon'
    import RouteSon1 from '@/pages/RouteSon1'
    import RouteSon2 from '@/pages/RouteSon2'

    {
      path: '/routeSon',
      name: 'routeSon',
      component: RouteSon,
      children:[]
    },
    2、父页面配置子页面显示的地方  <router-view></router-view>
    3、引入子路由 并配置再父路由的children属性里
        children:[
            {
            path: 'routeSon1',
            name: 'routeSon1',
            component: RouteSon1
            },
            {
            path: 'routeSon2',
            name: 'routeSon2',
            component: RouteSon2
            },
        ]

*/

export default {
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>
