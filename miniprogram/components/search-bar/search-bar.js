// components/search-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:{
      type:String,
      value:"请输入内容"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    searchVal: "",
    isShowSearchBtn: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputFocusHander() {
      this.setData({
        isShowSearchBtn: true
      })

    },
    inputBlurHander() {
      const { searchVal } = this.data
      if (!searchVal) {
        this.setData({
          isShowSearchBtn: false
        })
      }
    },
    inputTyping(e) {
      var that = this;
      that.setData({
        viewShowed: false,
        searchVal: e.detail.value
      });
    },
    clearInput() {
      this.setData({
        searchVal: "",
        isShowSearchBtn: false
      });
      this.triggerEvent('clearkeyword', '')
    },
    searchHander() {
      const { searchVal } = this.data
      this.triggerEvent('getkeyword', searchVal)
    },
  }
})
