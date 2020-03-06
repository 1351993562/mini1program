// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagepath:''
  },
  headleChoose:function(){
    wx.chooseImage({
      success: (res) =>{
        // console.log(res)
        // 1.取出路径
        const path = res.tempFilePaths[0]
        // 2.设置到全局变量imagepath中
        this.setData({
          imagepath: path
        })
      },
    })
  },
  handleImageLoad(){
    console.log('suss')
  }
})
