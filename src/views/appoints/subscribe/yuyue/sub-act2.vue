<template>
  <!-- 豪华游艇 + 水上摩托艇 -->
  <div class="ei-main">
    <div class="yuyue2019">
      <div class="desc">
        <p style="text-indent: 0;">相信我们的客人都从海滨沙滩领略过了石梅湾的秀美风光，何不换个角度来体验呢？我们为您准备了充满刺激与挑战的“动览”项目-水上摩托艇驾驶项目。开足马力，澎湃热情迸发；前途无量，浩瀚海洋激荡。如此难得一见的人生考验，期待你的征服！</p>
        <br>
        <br>
        <p style="text-indent: 0;">出发集合地点：酒店大堂</p>
        <p style="text-indent: 0;">出发时间：09:00 10:00 12:00 13:00 14:00</p>
        <p style="padding-left: 15.5vmin; text-indent: 0;">集合班车发车前往冲浪俱乐部</p>
        <p style="text-indent: 0;">返回集合地点：游艇会码头</p>
        <p style="text-indent: 0;">返回时间：11:15 12:15 14:15 15:15 16:15</p>
        <p style="padding-left: 15.5vmin; text-indent: 0;">集合班车发车返回酒店</p>
        <br>
        <p style="text-indent: 0;">*温馨提示：参与报名者驾龄需超过 3 年。</p>
        <p style="padding-left: 17vmin; text-indent: 0;">请穿着速干类服装。</p>
        <p style="padding-left: 17vmin; text-indent: 0;">请随身携带身份证件和驾照原件前往。</p>
        <p style="padding-left: 17vmin; text-indent: 0;">患有心脏病、高血压的人士请勿报名。</p>
      </div>
      <!-- <div class="ar-box" style="margin-top: 3.125vmin;">
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
          <p class="tips-bot fen" style="font-size: 2.1875vmin;" v-if="activity_select.val == '1'">* 此活动不适合孕妇，容易晕船或心脏病患者参加</p>
        </div>
      </div>
      <div class="yuyue-btns">
        <a @click="confirm" href="javascript:;">确认预约</a>
        <a @click="back" href="javascript:;">返回上一页</a>
      </div> -->
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
          type: '2',
          vcode: ''
        },
        activity_select: {
          disabled: true,
          selections: [
            // {name: '近海冲浪 + 豪华游艇', val: '1'},
            {name: '玩水踏浪', val: '2'},
            {name: '最美海岸试驾体验', val: '3'}
          ],
          val: '2',
          name: 'activity'
        },
        countSecond: 0,
        isChecked: '',
      }
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/pcc/2021/bg-hw-ssyd.jpg';
      this.$parent.title = '玩水踏浪'
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
          // url: "http://travelclub.devnow.cn/2021/data/sendSms.php",
          url: "/2021/data/sendSms.php",
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
        if(!(/^1[345789]\d{9}$/.test(_val))){ 
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
        } else if(!this.form_data.type) {
          _error = '请选择预约场次';
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
            url: '/2021/data/myOrder.php',
            // url: 'http://travelclub.devnow.cn/2021/data/myOrder.php',
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
                this.$router.replace({'name': 'huwai.appoints.subs.res', 'params': {'type': this.activity_select.val}}) 
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