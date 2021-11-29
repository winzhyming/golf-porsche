<template>
  <div class="ei-main">
    <!-- <div class="desc">
      <h1>敬请期待</h1>
    </div> -->
    <div class="yuyue2019 es-data em2018">
      <div class="ar-box" style="margin-top: 3.125vmin;" v-if="!is_show_result">
        <div class="ar-form">
          <div class="af-group">
            <input type="text" class="form-control" placeholder="电话" v-model="form_data.mobile"/>
          </div>
          <p style="text-align: center; margin-bottom: 2.1875vmin;">
            <a href="javascript:;" class="btn-get-code" v-if="countSecond" style="font-size: 3.125vmin;">{{ countSecond }}s后重发</a>
            <a href="javascript:;" class="btn-get-code" v-else @click="getVcode" style="font-size: 3.125vmin;">获取验证码</a>
          </p>
          <div class="af-group">
            <input type="text" class="form-control" placeholder="验证码" v-model="form_data.vcode"/>
          </div>
        </div>
      </div>
      <div class="event-schedule" v-else>
        <h3 style="text-align: center;">您已预约 12 月 6 日 以下活动</h3>
        <table style="width: 100%; line-height: 4.375vmin; font-size: 3.125vmin; margin-top: 5vmin;">
          <tr>
            <td style="width: 40%;">姓名</td>
            <td>{{ query_result.last_name + query_result.first_name }}</td>
          </tr>
          <tr>
            <td>手机号</td>
            <td>{{ query_result.mobile }}</td>
          </tr>
          <tr>
            <td>预约活动</td>
            <td>{{ query_result.activity_name }}</td>
          </tr>
          <tr>
            <td>活动日期</td>
            <td>{{ query_result.arrival_date }}</td>
          </tr>
          <tr>
            <td>出发地点</td>
            <td>{{ query_result.origin }}</td>
          </tr>
        </table>
      </div>
      <div class="yuyue-btns"  v-if="!is_show_result">
        <a @click="confirm" href="javascript:;" style="padding: 0; border: 0;"><img src="https://d.devnow.cn/pcc/2021/check_route.png" style="width: 30.3125vmin"></a>
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
        vcode: ''
      },
      is_show_result: false,
      query_result: {
        activity_name: '',
        arrival_date: '',
        first_name: '',
        gender: '',
        origin: '',
        last_name: '',
        mobile: '',
        return_date: ''
      },
      countSecond: 0,
      isChecked: '',
    }
  },
  mounted() {
    this.is_show_result = false
  },
  methods: {
    confirm() {
      let _error = this.checkValidate();
      if(_error) return this.$root.pop(_error);

      $.ajax({
        type: "POST",
        // url: "http://travelclub.devnow.cn/2021/data/myTravel.php",
        url: "/2021/data/myTravel.php",
        data: {
          mobile:  this.form_data.mobile,
          check_code: this.form_data.vcode
        },
        datatype: 'jsonp',
        jsonp: 'jsonp_callback',
        success: (data) => {
          console.log('[winzhyming] query response is:', data);
          try {
            if (data) {
              data = JSON.parse(data)
            }
            this.query_result.last_name = data.last_name
            this.query_result.arrival_date = data.arrival_date
            this.query_result.first_name = data.first_name
            this.query_result.gender = data.gender
            this.query_result.mobile = data.mobile
            this.query_result.origin = data.origin
            this.query_result.return_date = data.return_date
            this.query_result.activity_name = data.activity_name
            this.is_show_result = true
          } catch (err) {
            this.$root.pop(data);
          }
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
        url: "/2021/data/sendSms.php",
        // url: "http://travelclub.devnow.cn/2021/data/sendSms.php",
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
        _error = '请填写验证码';
      }
      return _error;
    },
  }
}
</script>

<style scoped>
table tr td{padding: 0 10px;}
table tr td:first-child{
  text-align: right;
}
</style>