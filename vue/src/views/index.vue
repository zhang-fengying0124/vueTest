<template>
  <div class="content">
    <div class="male-content">
      <h2 class="male-content__title">{{maleTitle}}</h2>
      <ul class="data-list">
        <li v-for="(item, index) in maleList" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="female-content">
      <h2 class="female-content__title">{{femaleTitle}}</h2>
      <ul class="data-list">
        <li v-for="(item, index) in femaleList" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { getUser } from '@/api/user'
export default {
  name: 'index',
  data () {
    return {
      maleTitle: 'Male',
      femaleTitle: 'Female',
      list: []
    }
  },
  mounted () {
    // axios.get('http://5c92dbfae7b1a00014078e61.mockapi.io/owners').then(response => {
    //   console.log(response)
    //   this.list = response.data
    // }).catch(() => {
    //   alert('api出错了，请联系管理员。')
    // })
    getUser().then(response => {
      console.log(response)
      this.list = response
    })
  },
  computed: {
    maleList () {
      return this.sortByName(this.list.filter(item => item.gender === 'Male'), 'name')
    },
    femaleList () {
      return this.sortByName(this.list.filter(item => item.gender === 'Female'), 'name')
    }
  },
  methods: {
    // 排序的共通方法
    sortByName (array, name) {
      return array.sort(function (a, b) {
        const x = a[name]
        const y = b[name]
        return ((x < y) ? -1 : ((x < y) ? 1 : 0))
      })
    }
  }
}
</script>

<style scoped>
  .content {
    padding: 40px;
  }
  .male-content__title,
  .female-content__title {
    font-size: 18px;
    color: #333;
    padding: 20px 0;
  }
  .data-list {
    padding-left: 60px;
  }
  .data-list li {
    padding: 5px 0;
  }
</style>
