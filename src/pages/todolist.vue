<template>
    <div>
        <h1>todolist</h1>
        <input type="text" v-model="todo" @keyup.enter="doAdd()" ref="todo">
        <button @click="doAdd()" >增加</button>
        <br>
        <hr>
        <h2>进行中</h2>
        <ul>
            
            <li v-for="(item, index) in list" :key="index" v-if="!item.checked">
                <input type="checkbox" v-model="item.checked">
                {{item.title}} ----
                <button @click="doDel(index)">删除</button>
            </li>
        </ul>
        <h2>已完成</h2>
        <ul>
            <li v-for="(item, index) in list" :key="index" v-if="item.checked">
               
                <input type="checkbox" v-model="item.checked">
                {{item.title}} ----
                <button @click="doDel(index)">删除</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            todo: '',
            list: [
                {
                    title:'录制node.js',
                    checked:true,
                },
                {
                    title:'录制vue.js',
                    checked:false,
                },
                {
                    title:'录制angular.js',
                    checked:true,
                }
            ],

        }
    },
    methods: {
        //增加
        doAdd(){
            if(!this.todo.trim()){
                alert('请输入内容')
                this.todo = ''
                return
            }
            const flag = this.list.some( item  => {
                return item === this.todo.trim()
            })
            if(flag){
                alert(`已存在${this.todo}`)
                this.todo = ''
            }else{
                this.list.push({
                    title: this.todo,
                    checked: false
                    })
                this.todo = ''
            
                this.$refs.todo.focus()
            }
           
           
        },
        //删除
        doDel(key){
            this.list.splice(key,1)
        }
    }
}
</script>
<style lang="scss" scoped>
    li {
        list-style: none;
        background: pink;
    }
</style>
