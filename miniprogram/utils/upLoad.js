let doUpload = function (count = 1, key = 'my-image') {
  return new Promise((resove, reject) => {
    wx.chooseImage({
      count,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        wx.showLoading({
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0]

        // 上传图片
        const cloudPath = key + '/' + key + new Date().getTime() + parseInt(Math.random() * 10000000000000) + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            resove(res)
          },
          fail: e => {
            reject(e)
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  })
  // 选择图片

}

export default doUpload