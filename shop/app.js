var goodsObj = [
  {
    name : '车工官方旗舰店',
    checked : false,
    list : [
      {
        name : '嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN',
        price : 229.00,
        num : 2,
        checked : false,
      },

      {
        name : '嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN',
        price : 229.00,
        num : 5,
        checked : false,
      },
      {
        name : '嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN',
        price : 229.00,
        num : 8,
        checked : false,
      }
    ]
  },
  {
    name : '京东自营',
    checked : false,
    list : [
      {
        name : '嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN',
        price : 229.00,
        num : 9,
        checked : false,
      },
      {
        name : '嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN',
        price : 229.00,
        num : 9,
        checked : false,
      },
      {
        name : '嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN',
        price : 229.00,
        num : 8,
        checked : false,
      }
    ]
  },
];
var app = new Vue({
  el:'#app',
  data:{
    goodsObj : goodsObj,
    totalMoney : 0,
    totalFare : 0,
    allChecked : false
  },
  ready:function() {},
  methods : {
    // 删除操作
    delGoods:function(index1, index){
      this.goodsObj[index1]['list'].splice(index,1);
    },
    // 全部商品全选
    chooseAllGoods:function(){
      var flag = true;
      if (this.allChecked){
        flag = false;
      }
      for (var i = 0,len = this.goodsObj.length;i<len;i++ ) {
        this.goodsObj[i]['checked'] = flag;
        var list = this.goodsObj[i]['list'];
        for (var k=0,len1 =list.length;k<len1;k++ ) {
          list[k]['checked'] = flag;
        }
      }
    },
    // 每个店铺全选
    chooseShopGoods:function( index) {
      var list = this.goodsObj[index]['list'],
        len = list.length;
      if(this.goodsObj[index]['checked'] ) {
        for(var i = 0; i < len; i++ ) {
          list[i]['checked'] = false;
        }
      }else{
        for(var i = 0; i < len; i++ ) {
          list[i]['checked'] = true;
        }
      }
      this.goodsObj[index]['checked'] = !this.goodsObj[index]['checked'];
    },
    // 商品数量
    numChange:function(index1, index, numChange) {
      var goods = this.goodsObj[index1]['list'][index],
        oThis = this;
      if(numChange == 1) {
        goods.num++;
      }else if(numChange == -1){
        goods.num--;
      }
      if(goods.num<= 1 ) {
        goods.num = 1;
      }
    }
  }
})