<template>
  <div class="ei-main">
    <!-- <div class="desc">
      <h1>敬请期待</h1>
    </div> -->
    <div class="yuyue2019">
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
      <div class="ar-result">
        <table>
          <tr>
            <td>姓</td>
            <td>{{ query_result.last_name }}</td>
          </tr>
          <tr>
            <td>名</td>
            <td>{{ query_result.first_name }}</td>
          </tr>
          <tr>
            <td>性别</td>
            <td>{{ query_result.gender }}</td>
          </tr>
          <tr>
            <td>手机号</td>
            <td>{{ query_result.mobile }}</td>
          </tr>
          <tr>
            <td>到达日期</td>
            <td>{{ query_result.arrival_date }}</td>
          </tr>
          <tr>
            <td>返程日期</td>
            <td>{{ query_result.return_date }}</td>
          </tr>
          <tr>
            <td>12月5日活动</td>
            <td>{{ query_result.activity_name }}</td>
          </tr>
        </table>
      </div>
      <div class="yuyue-btns">
        <a @click="confirm" href="javascript:;">查询</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form_data: {
        mobile: '18014929630',
        vcode: '543924'
      },
      query_result: {
        activity_name: '',
        arrival_date: '',
        first_name: '',
        gender: '',
        last_name: '',
        mobile: '',
        return_date: ''
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
          if (data) {
            data = JSON.parse(data)
          }
          this.query_result.last_name = data.last_name
          this.query_result.arrival_date = data.arrival_date
          this.query_result.first_name = data.first_name
          this.query_result.gender = data.gender
          this.query_result.mobile = data.mobile
          this.query_result.return_date = data.return_date
          this.query_result.activity_name = data.activity_name
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