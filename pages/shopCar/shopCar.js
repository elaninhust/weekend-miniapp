// pages/shopCar/shopCar.js
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollY:true
  },
  startX:0,
  startY:0,
  swiperDirection:0,//0:未激活,1:已激活水平滑动,2:已激活垂直滑动

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var shopCarData=[];
    for(let i=0;i<20;i++){
      shopCarData.push({
        content:'ELAN_'
      })
    }
    _this.setData({
      shopCarData: shopCarData,
      height: util.getHeight()
    });
  },

  touchS:function(ev){
    let _this = this;
    console.log(ev);
    _this.startX = ev.touches.clientX;
    _this.startY = ev.touches.clientY;
  },
  touchM:function(ev){
    let _this = this;
  },
  touchE:function(){

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})