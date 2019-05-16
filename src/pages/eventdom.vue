<template>
    <div>
        <h1>eventdom</h1>
        <!-- MVVM  双向数据绑定  只能用在表单里面
        MV model改变影响视图view             VM：视图view改变影响model    -->
        <input type="text" v-model="msg">

        <button @click="getMsg()">获取表单数据</button>
        <button v-on:click="setMsg()">设置表单数据</button>
        <br> 
        <input type="text" ref="userinfo" id="userinfo">
        <button @click="getInputVal()">获取表单数据</button>
        <div ref="box">盒子</div>
        <br>
        <br>
        <button @click="setMsg()">改变data里的msg</button>
        <br>
        <button @click="requestData()">请求list数据</button>
        <br>
        <div style="backgroundColor:pink;">
            <ul>
                <li v-for="(item,index) in list" :key="index">{{item}}</li>
            </ul>
        </div>
        <br>
        <button @click="delData('111')">执行方法传值111</button>
        <button @click="delData('222')">执行方法传值222</button>
        <button @click="eventFn($event)" data-aid="123">事件对象</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg: 'input值',
            list: []
        }
    },
    methods:{
        getMsg(){
            alert(this.msg)
        },
        setMsg(){   //es6简写
            this.msg="设置值啦"
        },
        getInputVal(){
            // alert(this.$refs.userinfo.value)
           alert(document.getElementById('userinfo').value)
            this.$refs.box.style.background = 'grey'
        },
        run1:function(){ //es5写法

        },
        requestData(){
            for(let i=0;i<10;i++){
                this.list.push(`第${i}条数据`)
            }
           
        },
        delData(val){
            alert(val);
        },
        eventFn(e){
            console.log(e)
            e.srcElement.style.background='pink'
            console.log(e.srcElement.dataset.aid)//获取自定义属性的值
        }
    }
}
</script>


