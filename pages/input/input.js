// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindBlur(event){
    console.log("失去焦点：",event)
  },
  bindFocus(event) {
    console.log("获取焦点：", event)
  },
  bindInput(event) {
    console.log("输入内容：", event)
  }
})