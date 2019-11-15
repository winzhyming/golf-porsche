<template>
  <div class="ei-main">
    <div class="ar-box">
      <div class="ar-form">
        <div class="af-group">
          <p style="font-size: 2.1875vmin;">* 12 月 1 日的试驾活动仅面向保时捷高尔夫活动的邀请嘉宾开放，
请返回活动预约 – 嘉宾预约 – 分界洲岛试驾体验，进行预约。
</p>
        </div>
        <div class="af-group">
          <input type="text" class="form-control" placeholder="姓名" v-model="form_data.name"/>
        </div>
        <div class="af-group">
          <select_comp :sel_data="sex_select"></select_comp>
        </div>
        <div class="af-group">
          <input type="text" class="form-control" placeholder="电话" v-model="form_data.mobile"/>
        </div>
        <div class="af-group code-group">
          <input type="text" class="form-control" placeholder="验证码" v-model="form_data.vcode"/>
          <a href="javascript:;" class="btn-get-code" v-if="countSecond">{{ countSecond }}s后重发</a>
          <a href="javascript:;" class="btn-get-code" v-else @click="getVcode">获取验证码</a>
        </div>
        <div class="af-group clearfix">
          <div class="fl label-left">试驾车辆:</div>
          <div class="fr check-right">
            <span class="check-span">
              <input type="radio" name="car_type" value="1" v-model="form_data.car_type"/><label for="">&nbsp;911</label>
            </span>
            <span class="check-span">
              <input type="radio" name="car_type" value="2" v-model="form_data.car_type"/><label for="">&nbsp;New Macan</label>
            </span>
            <span class="check-span">
              <input type="radio" name="car_type" value="3" v-model="form_data.car_type"/><label for="">&nbsp;718 Cayman</label>
            </span>
            <span class="check-span">
              <input type="radio" name="car_type" value="4" v-model="form_data.car_type"/><label for="">&nbsp;Cayenne E3</label>
            </span>
          </div>
        </div>
        <div class="af-group clearfix">
          <div class="fl label-left">参与人数:</div>
          <div class="fr check-right">
            <span class="check-span">
              <input type="radio" name="join_num" value="1" v-model="form_data.join_num"/><label for="">&nbsp;1</label>
            </span>
            <span class="check-span">
              <input type="radio" name="join_num" value="2" v-model="form_data.join_num"/><label for="">&nbsp;2</label>
            </span>
          </div>
        </div>
        <div class="af-group clearfix">
          <div class="fl label-left">试驾日期:</div>
          <div class="fr check-right">
            <span class="check-span">
              <input type="radio" name="activity_date" value="1" v-model="form_data.activity_date"/><label for="">&nbsp;11 月 29 日</label>
            </span>
            <span class="check-span">
              <input type="radio"  name="activity_date" value="2" v-model="form_data.activity_date"/><label for="">&nbsp;11 月 30 日</label>
            </span>
            <span class="check-span">
              <input type="radio"  name="activity_date" value="2" v-model="form_data.activity_date"/><label for="">&nbsp;12 月 02 日</label>
            </span>
          </div>
        </div>
        <div class="af-group clearfix">
          <div class="fl label-left">试驾时间:</div>
          <div class="fr check-right">
            <span class="check-span">
              <input type="radio" name="activity_time" value="1" v-model="form_data.activity_time"/><label for="">&nbsp;09:30</label>
            </span>
            <span class="check-span">
              <input type="radio" name="activity_time" value="2" v-model="form_data.activity_time"/><label for="">&nbsp;10:30</label>
            </span>
            <span class="check-span">
              <input type="radio" name="activity_time" value="3" v-model="form_data.activity_time"/><label for="">&nbsp;11:30</label>
            </span>
            <span class="check-span">
              <input type="radio" name="activity_time" value="4" v-model="form_data.activity_time"/><label for="">&nbsp;13:30</label>
            </span>
            <span class="check-span">
              <input type="radio" name="activity_time" value="5" v-model="form_data.activity_time"/><label for="">&nbsp;14:30</label>
            </span>
            <span class="check-span">
              <input type="radio" name="activity_time" value="6" v-model="form_data.activity_time"/><label for="">&nbsp;15:30</label>
            </span>
          </div>
        </div>
        <div class="af-btns">
          <p class="tips-bot fen" style="font-size: 2.1875vmin;">* 请现场携带驾驶证,并签署免责条款，参加试驾活动。</p>
          <p class="tips-bot fen" style="font-size: 2.1875vmin; margin-top:0;">* 11 月 29、30 日及 12 月 2 日的试驾活动面向全体入住酒店的嘉宾。。</p>
          <div class="condition-check clearfix">
            <div class="label-left fl">
            	&nbsp;
            </div>
            <div class="fr check-right">
              <input type="checkbox" value="1" v-model="isChecked"/>&nbsp;我已阅读《<router-link :to="{'name': 'form.cond'}">隐私条款</router-link>》
            </div>
          </div>
          <a @click="save" class="btn-red">确定预约</a>
          <br>
          <p  style="font-size: 2.1875vmin;">* 预约参加活动，即视为授权同意保时捷将您与同行伙伴的姓名与肖像权使用于公共宣传目的。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import select_comp from '@/views/public/select'
  import dao from '@/api'
  
  export default {
    data() {
      let _form_data = this.$parent.form_data;
      return {
        sex_select: {
          selections: [
            {name: '男', val: '1'},
            {name: '女', val: '2'}
          ],
          val: _form_data && _form_data.gender || '',
          tips: '性别',
          name: 'sex'
        },
        form_data: _form_data || {
          name: '',
          gender: '',
          mobile: '',
          car_type: '',
          join_num: '',
          activity_date: '',
          activity_time: ''
        },
        countSecond: 0,
        isChecked: '',
        loading: true
      }
    },
    methods: {
      save() {
        // this.$router.push({'name': 'form.finish'});   
        // return;

        let _error = this.checkValidate();
        if(_error) return this.$root.pop(_error);
        let _data = this.getFormData();
        $.ajax({
          type: "POST",
          // url: "https://www.stxcve.cn/sk/myOrder.php",
          url: "/sk/myOrder.php",
          data: _data,
          datatype: 'jsonp',
          jsonp: 'jsonp_callback',
          success: (data) => {
            console.log(data);
            if($.trim(data) === '预约成功') {
              this.$router.push({'name': 'form.finish'});   
            } else {
              this.$root.pop(data);
            }
          },
          error: (_error) => {
            this.$root.pop(_error);
          }         
        });
        
      },
      getFormData() {
        let _form_data = {
          name: this.form_data.name,
          gender: parseInt(this.form_data.gender),
          mobile: this.form_data.mobile,
          car_type: parseInt(this.form_data.car_type),
          join_num: parseInt(this.form_data.join_num),
          activity_date: parseInt(this.form_data.activity_date),
          activity_time: parseInt(this.form_data.activity_time),
          check_code: this.form_data.vcode
        };
        return _form_data;
      },
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
//      dao.form.send_sms.save({}, {
//        'mobile': this.form_data.mobile
//      }).then(() => {
//        
//      }).catch(() => {
//        
//      });
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
        if(!this.form_data.name) {
          _error = '请填写姓名';
        } else if(!this.form_data.gender) {
          _error = '请选择性别';
        } else if(!this.form_data.mobile) {
          _error = '请填写电话号码';
        } else if(!this.form_data.car_type) {
          _error = '请选择试驾类型';
        } else if(!this.form_data.vcode) {
          _error = '请填请输入验证码 并 勾选阅读隐私条款';
        } else if(!this.form_data.join_num) {
          _error = '请选择参与人数';
        } else if(!this.form_data.activity_date) {
          _error = '请选择参与试驾日期';
        } else if(!this.form_data.activity_time) {
          _error = '请选择参与试驾时间';
        } else if(!this.isChecked) {
          _error = '请勾选 我已阅读 隐私条款';
        }
        return _error;
      }
    },
    components: {
      select_comp
    },
    watch: {
      'sex_select.val'(_val) {
        this.form_data.gender = _val;
      },
      'form_data'(_val) {
        this.$parent.form_data = _val;
      }
    },
    beforeDestroy() {
      this.countSecond = 0;
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/form/drive.vue