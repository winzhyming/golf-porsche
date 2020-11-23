<template>
  <div class="ei-main">
    <div class="desc">
      <h1>敬请期待</h1>
    </div>
    <!-- <div class="yuyue2019">
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
        <a @click="confirm" href="javascript:;">查询</a>
        <a @click="back" href="javascript:;">返回</a>
      </div>
    </div> -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      form_data: {
        mobile: '18014929630',
        vcode: '737589'
      },
      countSecond: 0,
      isChecked: '',
    }
  },
  mounted() {

  },
  methods: {
    confirm() {
      let _error = this.checkValidate();
      if(_error) return this.$root.pop(_error);

      $.ajax({
        type: "POST",
        // url: "http://travelclub.devnow.cn/2020/data/myTravel.php?mobile=" + this.form_data.mobile + '&check_code=' + this.form_data.vcode,
        url: "http://travelclub.devnow.cn/2020/data/myTravel.php",
        data: {
          mobile:  this.form_data.mobile,
          check_code: this.form_data.vcode
        },
        datatype: 'jsonp',
        jsonp: 'jsonp_callback',
        success: (data) => {
          console.log('[winzhyming] query response is:', data);
        },
        error: (_error) => {
          this.$root.pop(_error);
        }  
      }) 
    },
    back() {
      this.$router.go(-1);
    },
    getVcode() {
      
      if(!this.form_data.mobile) {
        this.$root.pop('请填写手机号码');
        return;
      }
      if(!this.checkPhone(this.form_data.mobile)) return;
      $.ajax({
        type: "POST",
        // url: "/2020/data/sendSms.php",
        url: "http://travelclub.devnow.cn/2020/data/sendSms.php",
        // url: "https://golf.devnow.cn/2020/data/sendSms.php",
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
  }
}
</script>