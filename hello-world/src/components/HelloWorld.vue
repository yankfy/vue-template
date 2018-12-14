<template>
  <div class="hello">
    <h1>{{ msg }}{{reviced}}</h1>
    <!-- 判断必须保证前面第一个 -->
    <p v-if="user.userInfo">{{user.userInfo.department}}</p>
    <img
      src="./helloWorld.js"
      alt=""
    >
  </div>
</template>

<script lang="js">
import axios from "axios";
import { getUserInfo } from '@/providers/http-api.js'
const wsURI = process.env.VUE_APP_WEBSOCKET
// console.log(wsURI)
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      user: {},
      reviced:""
    };
  },
  created() {
    // axios
    //   .get("/ldapLogin", {
    //     params: {
    //       userName: "ponyyan"
    //     }
    //   })
    //   .then(res => (this.user = res.data.result));

    // this.getInfo().then(res=>{
    //   console.log(res)
    //   this.user = res.data.result
    //   console.log(this.user)
    // })

    this.initSocket()

  },
  methods:{
    async getInfo(){
      const res  = await getUserInfo({})
      this.user = res.data.result
      // return await getUserInfo({userName: "ponyyan"})
    },
    async initSocket(){
      await this.getInfo()
      // socket配置 socket不涉及跨域请求
      let socket = new WebSocket(wsURI)
      socket.onopen = (event) => {
        socket.send(JSON.stringify({
          businessCode: 100,
          isEn: false,
          employeeNo: 86622890,
          employeeName: "ponyyan",
          startTimeStamp: "1544507850000",
          senderEmail: "pony.yan@kpmg.com",
          requestMsg: "Welcome",
          timeStamp: "1544507850000",
          endTimeStamp: "",
        }))
      }
      socket.onmessage = (event) => {
        this.reviced += event.data
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import './helloWorld.styl'
</style>
