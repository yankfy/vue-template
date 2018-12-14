import axios from "axios";

const wsURI = process.env.VUE_APP_CURRENTMODE
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      userInfo: {},
      userInfo:
    };
  },
  created() {
    this.userInfo = this.$server
      .get("/ldapLogin", {
        userName: "ponyyan"
      })
    console.log(this.userInfo)
    //   .then(res => (this.userInfo = res.data));
    // socket
    let socket = new WebSocket("/ws")
    socket.onopen = (event) => {
      console.log(event)
    }
  }
};
