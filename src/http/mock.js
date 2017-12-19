var Mock = require('mockjs')
var Random = Mock.Random
var index = Mock.mock('http://api.com/index', {
  // "user|5-10": [{
  //   'name': '@cname', //中文名称
  //   'age|1-100': 100, //100以内随机整数  属性值100只用来确定类型
  //   'birthday': '@date("yyyy-MM-dd")', //日期
  //   'city': '@city(true)'//中国城市
  // }],
  "swiper|4":[
    {
      'imgPath':Random.image('800x400', '#04a1f7', '#FFF', 'png', ''),
      'id':'@id'
    }
  ],

  'section1':{
    'list|4':[{
      'imgPath':Random.image('400x400', '#b7ddf2', '#333', 'png', ''),
      'id':'@id'
    }],
    'banner':Random.image('400x100', '#ffcc33', '#FFF', 'png', 's1-banner')
  },
  'section2|10':{
    'list|10':[{
      'title':'@cname',
      'price|99-1000':100,
      'intro': Random.cparagraph(),
      'imgPath':Random.image('200x200', '#dec4e0', '#333', 'png', ''),
      'id':'@id'
    }],
    'banner':Random.image('400x100', '#b97cc9', '#FFF', 'png', 's2-banner')
  },


  'section3':{
    'list|4':[{
      'title':'@last',
      'start':Random.time('HH:mm'),
      // 在end数组里随机取一个
      'imgPath':Random.image('320x200', '#f5f2a5', '#333', 'png', ''),
      'id':'@id',
      'price|99-1000':100,
      'end|1':['2017/09/23 02:00:00','2017/09/23 11:00:00','2017/09/23 14:00:00','2017/09/23 13:00:00'],
    }],

    'banner':Random.image('400x100', '#30f673', '#FFF', 'png', 's3-banner'),

  },


  'section4':{
    'list|4':[{
      'title':'@first',
      'imgPath':Random.image('400x400', '#e2f630', '#333', 'png',''),
      'price|99-1000':100,
      'intro': Random.cparagraph(),
      'id':'@id'
    }],
    'banner':Random.image('400x100', '#ffcc33','#FFF', 'png', 's4-banner')
  }

});

var detail = Mock.mock('http://api.com/detail', {
  "view|1": [{
    'title|1': ['JavaScript从入门到单身狗','Android从入门到改行','Java从入门到放弃治疗 ','Sql从入门到删库','PHP从入门到出轨 ','.net从入门到放弃','Swift从入门到入土','C++从入门到懵逼','Linux从入门到跑路','Python从入门到吃土',
         'Ruby从入门到怀疑人生'
    ],
    'intro':  Random.cparagraph(2),
    'id':'@id',
    'price|99-1000':100,
    'chose|3':[{
      'col|+1':['原谅绿','基佬紫','丧失红'],
      'size|+1':['128g','64g','32g']
    }]
  }],

  'swiper|2':[{
    'imgSrc':Random.image('400x400', '#ffcc33','#FFF', 'png', ''),
    'id':'@id'
  }],

  'contentImgSrc|8':[{
    'imgSrc':Random.image('600x600', '#5a9e6e','#FFF', 'png', '')
  }]
});

var category = Mock.mock('http://api.com/category', {
  'aside|14':[{
    'title':'@cword(2)',
    'list|60':[{
      'title':'@cword(3)',
      'imgPath':Random.image('2000x2000','#5169b4','#FFF','png',''),

    }]
  }]
});

export {index,detail,category}
