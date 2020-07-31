const app = getApp()
import uploadFile from '../../utils/upLoad.js'
Page({
  data: {
    addHeight: false
  },

  onLoad: function () {
    let menu = wx.getMenuButtonBoundingClientRect();
    
    if (menu.bottom + 20 > 90) {
      this.setData({
        addHeight:true
      })
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      },
    })
    this.getLocation()
  },
  getLocation(){
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(latitude,longitude,speed,accuracy,'pppppppppppppp',res,2);
        
      },
      // fail:(err)=>{
      //   setTimeout(()=>{
      //     wx.openLocation({
      //       latitude: 0,
      //       longitude: 0,
      //       scale:18
      //     })
      //   },3000)
      
      // },
      complete:(res)=>{
        console.log(res,1);
      }
     })
  },
  onReachBottom(){
   
  },
  onPullDownRefresh(){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(()=>{
      wx.stopPullDownRefresh({
        complete: (res) => {
          wx.hideLoading()
        },
      })
    },500)
  },
  onShareAppMessage(){

  },

  // 上传图片
  doUpload: function () {
    uploadFile(1, 'share').then(res => {
      console.log(res, 1);
      this.setData({
        imgUrl: res.fileID
      })
    }).catch(err => {
      wx.showToast({
        icon: 'none',
        title: '上传失败',
      })

    })
  },
  clearkeyword(e){
    console.log(66);
    
  },
  getkeyword(e){
    console.log(e);
    
  }

})