<template>
  <!-- 高尔夫 -->
  <div class="ei-main">
    <div class="yuyue2019">
      <div class="desc">
        <p>全球最成功的一位高尔夫球手 Phil Mickelson 曾经说过:“高尔夫的目标不仅仅是赢得比赛，而是要像绅士一样，有风度地取得胜利。”保时捷中国车主俱乐部邀请您前来挥杆，18 洞比赛，新新贝利亚规则，以总杆成绩评定冠亚季军。</p>
        <br>
        <p>出发集合地点：2F 酒店大堂</p>
        <p>出发时间：09:15 集合班车发车前往鉴湖蓝湾高尔夫球场</p>
        <p>返返回时间：14:30 集合班车发车返回酒店</p>
        <br>
        <p>* 特别提醒：需自带球包球具等装备，穿着高尔夫 Polo 衫、休闲裤。球童小费用自理。</p>
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
            <input type="text" class="form-control" placeholder="您的差点数" v-model="form_data.number"/>
          </div>
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
  export default {
    data() {
      return {
        form_data: {
          mobile: '',
          type: '7',
          vcode: '',
          number: ''
        },
        countSecond: 0,
        isChecked: '',
      }
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-golf.jpg';
      this.$parent.title = '高尔夫'
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
//        url: "https://www.stxcve.cn/sk/sendSms.php",
          url: "/sk/sendSms.php",
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
        } else if(!this.form_data.number === '') {
          _error = '请输入您的差点数';
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
            // url: "https://www.stxcve.cn/sk/myOrder.php",
            url: "/sk/myActivityOrder.php",
            data: {
              mobile: this.form_data.mobile,
              check_code: this.form_data.vcode,
              type: this.form_data.type,
              number: this.form_data.number
            },
            datatype: 'jsonp',
            jsonp: 'jsonp_callback',
            success: (data) => {
              console.log(data);
              if($.trim(data) === '恭喜您预约成功，工作人员会与您取得联系。') {
                // this.$router.push({'name': 'form.finish'});  
                this.$router.replace({'name': 'subscribe.result', 'params': {'type': this.form_data.type}}) 
              } else {
                this.$root.pop(data);
                // this.$router.replace({'name': 'subscribe.result'}) 
              }
            },
            error: (_error) => {
              this.$root.pop(_error);
            }         
          });

        }, this.form_data.type)
      },
      back() {
        this.$router.go(-1);
      }
    },
    beforeDestroy() {
      this.countSecond = 0;
    }

  }
</script>