<template>
  <!-- 瑜伽 -->
  <div class="ei-main">
    <div class="yuyue2019">
      <div class="desc">
        <p>保时捷中国车主俱乐部协同威斯汀酒店一起安排的户外瑜伽，让大家都有机会在美丽独特的海边美景中释放压力,舒缓身心,希望海边的日光和海风可以为您提供一种健康放松的方式打开新的一天。</p>
        <br>
        <p><strong>场次: </strong></p>
        <p><input type="radio" name="changci" value="5" v-model="form_data.type"/><label for="">08:00 - 09:00</label></p>
        <p><input type="radio" name="changci" value="6" v-model="form_data.type"/><label for="">09:30 - 10:30</label></p>
        <br>
        <p>地址: 酒店海滨草坪</p>
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
          type: '5',
          vcode: ''
        },
        countSecond: 0,
        isChecked: '',
      }
    },
    mounted() {
      this.$parent.img_path = '/static/images/2019/top-yoga.jpg';
      this.$parent.title = '瑜伽'
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
            // url: "https://www.stxcve.cn/sk/myOrder.php",
            url: "/sk/myActivityOrder.php",
            data: {
              mobile: this.form_data.mobile,
              check_code: this.form_data.vcode,
              type: this.form_data.type
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