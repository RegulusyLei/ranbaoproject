<template>
  <div>
    <h2>echarts来啦</h2>
    <div class="echarts">
      <!-- 三角形 -->
        <div class="arrow"></div>
        <!-- 呼吸灯 -->
        <div class="huxideng">呼吸灯</div>
         <div id="container1" style="height: 100%"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data(){
    return{

    }
  },
  mounted(){
    var dom = document.getElementById("container1");
			var myChart = echarts.init(dom);
			var app = {};
		var 	option = null;
			option = {
			    xAxis: {
			        type: 'category',
			        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    series: [{
			        data: [820, 932, 901, 934, 1290, 1330, 1320],
			        type: 'line'
			    }]
			};
			;
			if (option && typeof option === "object") {
			    myChart.setOption(option, true);
			}
  }
}
</script>
<style lang="scss" scoped>

  .echarts {
    width: 80%;
    margin: 0 auto;
    height: 400px;
    padding: 50px;
    background-color: pink;
    .arrow {
      width: 0px;
      height:0px;
      border: 50px solid goldenrod;
      // border-left: none;
      border-top: none;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
    }
    .huxideng {
      width: 200px;
      height: 80px;
      border-radius: 20px;
      background-color: brown;
      text-align: center;
      line-height: 80px;
      color: #FFF;
      font-size: 20px;
      margin-top: 20px;
      // box-shadow: 0 0 10px rgba($color: #F00, $alpha: 0.5);

      // box-shadow: 0px 0px 20spx rgba($color: #F00, $alpha: 1);
      animation: huxideng 1s infinite;
    }
  }
  @keyframes huxideng {
   0% { box-shadow: 0px 0px 20px rgba($color: #000, $alpha: 1); }
   50% {box-shadow: 0px 0px 20px rgba($color: #000, $alpha: 0.5); }
   100% {box-shadow: 0px 0px 20px rgba($color: #000, $alpha: 1); }
}
</style>

