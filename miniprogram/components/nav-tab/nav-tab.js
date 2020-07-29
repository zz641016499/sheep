// component/nav-tab/nav-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {//nav类目
      type: Array,
      value: null,
    },
    bg:{//设置背景色
      type: String,
      value: 'white',
    },
    showBorder:{//是否显示底部border
      type: Boolean,
      value: true,
    },
    activeIndex: {//nav位置可以设置初始位置
      type: [String, Number],
      value: 0,
      observer: function (val) {console.log(val)}
    },
    type:{//来源有待扩展
      type:String,
      value:''
    },
    count:{//数量
      type:[Number,String],
      value:0
    }
  },
  ready() {
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowWidth: res.windowWidth
        });
      }
    });
  },
  data: {
    sliderWidth: 30,
  },
  methods: {
    tabClick(e) {
      let _inx = e.currentTarget.dataset.id;
      this.setData({
        activeIndex: _inx
      })
      this.triggerEvent("inx", _inx);
    }
  }
})