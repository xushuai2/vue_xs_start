<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    徐帅hello
    <router-link :to="{ name: 'xushuaidemo', params: { userId: 123 }}">demo2</router-link>
    <router-link :to="'/demo3'">下拉加载</router-link>

    <router-link to="/">back</router-link>
    <router-link to="/element">element-table</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

//   created:html加载完成之前，执行。执行顺序：父组件-子组件

// mounted:html加载完成后执行。执行顺序：子组件-父组件

// methods：事件方法执行

// watch：watch是去监听一个值的变化，然后执行相对应的函数。

// computed：computed是计算属性，也就是依赖其它的属性计算所得出最后的值

  data () {
    return {
      msg: '角度思考思考的'
    }
  }
  ,
  created () {
    this.$http.get('/api/try/ajax/json_demo.json')
      .then(
        function(response){
          msg = JSON.stringify(response.data);
          console.log(response.data);
        }
      )
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
