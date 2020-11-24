<template>
  <!-- 三亚角游艇海钓 -->
  <div class="ei-main">
    <div class="yuyue2019" style="padding-bottom: 20vmin;">
      <div class="desc">
        <p>有什么比在碧海蓝天的三亚出海游玩更吸引人的？饱览三亚角美好风光的同时，还能体验趣味十足的海钓活动。阳光、海风、美景，保时捷中国车主俱乐部邀请您一同享受海南独有的惬意和美好！</p>
        <br>
        <br>
        <p>出发集合地点：酒店大堂</p>
        <p>出发时间：12:00 集合班车发车前往三亚角鹿回头码头</p>
        <p>返回集合地点：鹿回头码头大巴上客点</p>
        <p>返回时间：15:00 集合班车发车返回酒店</p>
        <br>
        <p>* 温馨提示：请携带好身份证件。</p>
      </div>
      <div class="ar-box" style="margin-top: 3.125vmin;">
        <div class="ar-form">
          <div class="af-group">
            <input type="text" class="form-control" placeholder="电话" v-model="form_data.mobile"/>
          </div>
          <div class="af-group code-group">
            <input type="text" class="form-control" placeholder="验证码" v-model="form_data.vcode"/>
            <a href="javascript:;" class="btn-get-code" v-if="countSecond">{{ countSecond }}s后重发</a>
            <a href="javascript:;" class="btn-get-code" v-else @click="getVcode">获取验证码</a>
          </div>
          <div class="af-group">
            <select_comp :sel_data="activity_select"></select_comp>
          </div>
          <p class="tips-bot fen" style="font-size: 2.1875vmin;">* 由于时间冲突，您只能从四个活动中选择参加其中一个。</p>
        </div>
      </div>
      <div class="yuyue-btns">
        <a @click="confirm" href="javascript:;">确认预约</a>
        <a @click="back" href="javascript:;">返回上一页</a>
      </div>
    </div>
  </div>
</template>

<script>
  import select_comp from '@/views/public/select'

  export default {
     data() {
      return {
        form_data: {
          mobile: '',
          type: '1',
          vcode: ''
        },
        countSecond: 0,
        isChecked: '',
        activity_select: {
          selections: [
            {name: '三亚角游艇海钓', val: '1'},
            {name: '亚特兰蒂斯水族馆&CDF免税店', val: '2'},
            {name: '呀诺达雨林文化旅游区', val: '3'},
            {name: '亚特兰蒂斯水世界', val: '4'},
          ],
          val: '1',
          name: 'activity'
        }
      }
    },
    mounted() {
      this.$parent.img_path = '/static/images/2020/top-banners/haidiao.jpg';
      this.$parent.title = '三亚角游艇海钓'
    },
    methods: {
      getVcode() {
        if(!this.form_data.mobile) {
          this.$root.pop('请填写手机号码');
          return;
        }
        if(!this.checkPhone(this.form_data.mobile)) return;
        $.ajax({
          type: "POST",
          // url: "http://travelclub.devnow.cn/2020/data/sendSms.php",
          url: "/2020/data/sendSms.php",
          data:{ mobile: this.form_data.mobile},
          datatype: 'jsonp',
          jsonp: 'jsonp_callback',
          success: (data) => {
            console.log('[winzhyming] sendSms response is:', data);
            if($.trim(data) === 'OK') {
              this.countSecond = 60;
              this.countVcodeLimit();
            } else {
              this.$root.pop('请等待一分钟后，重新点击发送验证码');
            }
          },
          error: (_error) => {
             this.$root.pop(_error);
          }         
        });
      },
      countVcodeLimit() {
        if(!this.countSecond) return;
        setTimeout(() => {
          this.countSecond--;
          this.countVcodeLimit();
        }, 1000);
      },
      checkPhone(_val) {
        if(!(/^1[34578]\d{9}$/.test(_val))){ 
          this.$root.pop('手机号码有误，请重填');
          return false; 
        } else {
          return true;
        }
      },
      checkValidate() {
        let _error = '';
        if(!this.form_data.mobile) {
          _error = '请填写电话号码';
        } else if(!this.form_data.vcode) {
          _error = '请填请输入验证码';
        }
        return _error;
      },
      confirm() {
        // this.$router.replace({'name': 'subscribe.result', 'params': {'type': this.form_data.type}}) 
        // reutrn

        let _error = this.checkValidate();
        if(_error) return this.$root.pop(_error);

        this.$root.$emit('confirm', () => {
          $.ajax({
            type: "POST",
            // url: 'http://travelclub.devnow.cn/2020/data/myOrder.php',
            url: '/2020/data/myOrder.php',
            data: {
              mobile: this.form_data.mobile,
              check_code: this.form_data.vcode,
              type: this.activity_select.val
            },
            datatype: 'jsonp',
            jsonp: 'jsonp_callback',
            success: (data) => {
              console.log(data);
              if($.trim(data) === '恭喜您预约成功，工作人员会与您取得联系。') {
                // this.$router.push({'name': 'form.finish'});  
                this.$router.replace({'name': 'subscribe.result', 'params': {'type':this.activity_select.val}}) 
              } else {
                this.$root.pop(data);
                // this.$router.replace({'name': 'subscribe.result'}) 
              }
            },
            error: (_error) => {
              this.$root.pop(_error);
            }         
          });

        }, this.activity_select.val)
      },
      back() {
        this.$router.go(-1);
      }
    },
    beforeDestroy() {
      this.countSecond = 0;
    },
    components: {
      select_comp
    }

  }
</script>