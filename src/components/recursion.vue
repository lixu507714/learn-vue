<template>
  <div class="hello">
    <ul>
      <recursionLists :result="item" v-for="item in groups"></recursionLists>
    </ul>
  </div>
</template>

<script>
import recursionLists from './components/recursionList.vue'
export default {
  name: 'recursion',
  components:{recursionLists},
  data () {
    return {
      groups: null,
      arr: ["data","evaluationDetail","evaluationModule","groups"],
      result: {
        "data": {
            "evaluationDetail": {
                "evaluationSubmitRecordId": 630,
                "evaluationBundleCode": "EV-01",
                "evaluationBundleName": "优护家照护评估-居家版",
                "evaluationModule": {
                    "name": "优护家照护评估-居家版",
                    "code": "EV-01",
                    "version": "V2.0.0",
                    "description": "",
                    "groups": [
                      {
                        "name": "量表",
                        "code": "EV",
                        "isGrouped": true,
                        "groups": [{
                            "name": "各种信息",
                            "code": "RP-0002-0012",
                            "isGrouped": false,
                            "questions": [{
                              "code": "RP-0002-0012-0013",
                              "name": "用药情况",
                              "answer": "\n(1).药物名称:11\n\t给药途径:注射\n\t给药剂量:12粒\n\t服药依从性:不规律\n\t协助服药:是\n\t(2).药物名称:21\n\t给药途径:注射\n\t给药剂量:22毫升\n\t服药依从性:不规律\n\t协助服药:不是"
                            }, {
                              "code": "RP-0002-0012-0014",
                              "name": "主要问题",
                              "answer": "间断性颈、上背、和肩部疼痛、其他"
                            }, {
                              "code": "RP-0002-0012-0015",
                              "name": "肩胛上回旋／斜方肌力和和运动控制",
                              "answer": "\n(1).31/180度左侧墙壁滑动动作\n\t/180度右侧墙壁滑动动作\n\t/5左侧肌力等级\n\t/5右侧肌力等级\n\t/100左侧正常肌力／控制\n\t33/100右侧正常肌力／控制"
                            }]
                          },
                          {
                            "name": "个人基本信息",
                            "code": "EV-01-01",
                            "isGrouped": false,
                            "questions": [{
                                "code": "EV-01-01-013",
                                "name": "评估原因",
                                "answer": "接受服务前首次评估"
                              },
                              {
                                "code": "EV-01-02-001",
                                "name": "主要用药情况",
                                "answer": "阿卡波糖\n硝酸甘油含片\n"
                              }, {
                                "code": "EV-01-09-001",
                                "name": "一般护理需求",
                                "answer": "胃管护理、吸氧"
                              }, {
                                "code": "EV-01-03-001",
                                "name": "收缩压（mmHg）",
                                "answer": "100"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "措施",
                        "code": "PV",
                        "isGrouped": true,
                        "groups": [{
                          "name": "综合检测",
                          "code": "RP-0002-0012",
                          "isGrouped": true,
                          "groups": [{
                            "name": "功能测试",
                            "code": "RP-0002-0012",
                            "isGrouped": false,
                            "questions": [{
                              "code": "EV-01-01-013",
                              "name": "患者功能活动量表-最重要的活动（0-10，0为最佳）",
                              "answer": "患者功能活动|2.7|哈哈"
                            }, {
                              "code": "EV-01-01-013",
                              "name": "患者功能活动量表-最重要的活动（0-10，0为最佳）",
                              "answer": "患者功能活动|2.7|哈哈"
                            }]
                          }, {
                            "name": "损伤测试",
                            "code": "RP-0002-0012",
                            "isGrouped": false,
                            "questions": [{
                              "code": "EV-01-01-013",
                              "name": "患者功能活动量表-最重要的活动（0-10，0为最佳）",
                              "answer": "患者功能活动|2.7|哈哈"
                            }, {
                              "code": "EV-01-01-013",
                              "name": "患者功能活动量表-最重要的活动（0-10，0为最佳）",
                              "answer": "患者功能活动|2.7|哈哈"
                            }]
                          }]
                        }, {
                          "name": "头颈部症状",
                          "code": "RP-0002-0012",
                          "isGrouped": true,
                          "groups": [{
                            "name": "损伤测试",
                            "code": "RP-0002-0012",
                            "isGrouped": false,
                            "questions": [{
                              "code": "EV-01-01-013",
                              "name": "患者功能活动量表-最重要的活动（0-10，0为最佳）",
                              "answer": "患者功能活动|2.7|哈哈"
                            }, {
                              "code": "EV-01-01-013",
                              "name": "患者功能活动量表-最重要的活动（0-10，0为最佳）",
                              "answer": "患者功能活动|2.7|哈哈"
                            }]
                          }]
                        }]
                      },
                      {
                        "name": "诊断",
                        "code": "DI",
                        "isGrouped": false,
                        "questions": [{
                          "code": "DI",
                          "name": "拟解决问题",
                          "answer": "(1).有感染的危险：与血糖增高、脂代谢紊乱、营养不良、微循环障碍等因素有关\n(2).皮肤完整性受损：与长期受压、局部刺激有关\n(3).失眠：与疾病有关\n(4).头痛：与血压升高有关\n(5).知识缺乏：与缺乏高血压饮食相关知识有关\n(6)有创伤的危险：与头晕、视力模糊、意识改变或发生直立性低血压有关\n(7).有感染的危险：与皮肤破损有关\n(8).潜在并发症，低血糖：与血糖控制不稳有关\n(9).潜在并发症，糖尿病足：与血糖控制不稳有关"
                        }]},
                      {
                        "name": "措施",
                        "code": "IN",
                        "isGrouped": false,
                        "questions": [{
                          "code": "DI-12-01-009-01",
                          "name": "头痛：与血压升高有关",
                          "answer": "(1).嘱被评估人卧床休息，保证充足的睡眠时间，改变体位时动作要慢，给予加床档，防止坠床\n(2).被评估人活动时陪伴在身旁，搀扶被评估人或给予协助，以防跌倒或受伤\n(3).\"正确的测量血压做好记录：（1）测血压前，被评估人应安静休息5-10分钟,如运动应休息半小时后再测量，嘱被评估人精神放松  （2）嘱被评估人取坐位或仰卧位，使肱动脉与心脏在同一水平  （3）袖带应平整置于被评估人上臂中部，下缘距肘窝2-3cm，松紧以能放入一指为宜，太紧会导致血压值偏低，太松会导致血压值偏高  （4）注意记录测量结果，以便于与家属或医护人员沟通\"\n(4).密切观察病情变化，如被评估人血压急剧升高、剧烈头痛、呕吐、大汗、面色及神志改变、肢体运动障碍等症状，及时通知家属或医护人员"
                        }, {
                          "code": "DI-11-02-041-01",
                          "name": "潜在并发症，糖尿病足：与血糖控制不稳有关",
                          "answer": "(1).保持足部清洁，协助被评估人勤换鞋袜，每天清洗足部1次，10分钟左右，水温适宜，不能烫脚，洗完后用柔软的浅色毛巾擦干，尤其是脚趾间\n(2).每天检查足部一次，观察皮肤颜色温度以及足部神经感觉，足背的动脉搏动等情况\n(3).为被评估人修剪指甲勿损伤皮肤"
                        }]
                      }
                    ]
                }
            }
        }
      }
    }
  },
  created(){
    let newData = this.recursion(0,this.result);
    this.groups = newData;
  },
  methods: {
    recursion(num,data){
      let _this = this;
      var itemData = data[_this.arr[num]]
      if(num<_this.arr.length-1 && itemData){
          num++
          return this.recursion(num,itemData);
      }else{
          return itemData;
      }
    }

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    width:400px;
    margin:0 auto;
  }
</style>
