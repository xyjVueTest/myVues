<style type="text/scss" lang="scss">
  .pagination {
    position: relative;
    li {
      display: inline-block;
      float:left;
      width:.3rem;
      height:.3rem;
      text-align:center;
      line-height:.3rem;
      margin: 0 10px;
      a {
        display: inline-block;
        border: 1px solid #ddd;
        width:.3rem;
        height:.3rem;
        background: #fff;
        color: #0E90D2;
        &:hover {
          background: #eee;
        }
      }
      .active a {
        background: #0E90D2;
        color: #fff;
      }
    }
  }
</style>
<template>
  <div class="page">
    <h5>{{title}}</h5>
    <table>
      <thead>
        <tr>
          <td>序号</td>
          <td>单价</td>
          <td>数量</td>
          <td>总价</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in datalist">
          <td>{{index}}</td>
          <td>{{value.dj}}</td>
          <td>{{value.num}}</td>
          <td>{{Math.floor(value.dj*value.num)}}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <ul class="pagination">
        <li v-show="current != 1" @click="current-- && goto(current)"><a>Previous</a></li>
        <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
          <a >{{index}}</a>
        </li>
        <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a>Next</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'hanz-pages',
    data () {
      return {
        title: '分页数据测试',
        current: 1,
        showItem: 5,
        allpage: 13,
        datalist: []
      }
    },
    created () {
      this.datalist = [
          {dj: 1.2, num: 30},
          {dj: 2.2, num: 20},
          {dj: 3.2, num: 40},
          {dj: 1.5, num: 10},
          {dj: 2.2, num: 50},
          {dj: 5.2, num: 80}
      ]
    },
    computed: {
      pages () {
        let pag = []
        let i, middle
        if (this.current < this.showItem) { // 如果当前的激活的项 小于要显示的条数
          // 总页数和要显示的条数那个大就显示多少条
          i = Math.min(this.showItem, this.allpage)
          while (i) {
            pag.unshift(i--)
          }
        } else { // 当前页数大于显示页数了
          middle = this.current - Math.floor(this.showItem / 2) // 从哪里开始
          i = this.showItem
          if (middle > (this.allpage - this.showItem)) {
            middle = (this.allpage - this.showItem) + 1
          }
          while (i--) {
            pag.push(middle++)
          }
        }
        return pag
      }
    },
    methods: {
      goto (index) {
        if (index === this.current) return
        this.current = index
        console.log(index)
        let datalist0 = []
        let st = {}
        for (let i = 0; i < 5; i++) {
          st['dj'] = (Math.random() + i) * 20
          st['num'] = Math.ceil((Math.random() + i) * 30)
          datalist0.push(st)
        }
        this.datalist = datalist0
        console.log(datalist0)
        // 这里可以发送ajax请求,根据页数index来获取后端数据；
      }
    }
  }
</script>
