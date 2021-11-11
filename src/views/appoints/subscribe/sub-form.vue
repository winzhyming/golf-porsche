<template>
  <div class="ei-main" style="padding-bottom: 60vmin;">
    <div class="ar-box" style="padding-top: 10vmin;">
      <div class="ar-form">
        <div class="af-group">
          <input type="text" class="form-control" placeholder="姓名" v-model="form_data.name"/>
        </div>
        <div class="af-group">
          <select_comp :sel_data="sex_select"></select_comp>
        </div>
        <div class="af-group">
          <input type="text" class="form-control" placeholder="电话" v-model="form_data.mobile"/>
        </div>
        <div class="af-group">
          <select_comp :sel_data="activity_select"></select_comp>
        </div>
        <div class="af-group" v-if="activity_select.val === '2'">
          <select_comp :sel_data="drive_select"></select_comp>
        </div>
        <div class="af-group fen" v-if="drive_select.val === '1'">
          <select_comp :sel_data="interest_car"></select_comp>
        </div>
        <div class="af-group clearfix">
          <div class="fl label-left">预约时间:</div>
          <div class="fr check-right">
            <span class="check-span" v-if="activity_select.val === '2'">
              <input type="radio" name="activity_time" value="1" v-model="form_data.activity_time"/><label for="">&nbsp;10:00</label>
            </span>
            <span class="check-span">
              <input type="radio" name="activity_time" value="2" v-model="form_data.activity_time"/><label for="">&nbsp;13:00</label>
            </span>
          </div>
        </div>
        <div class="af-btns">
          <a @click="sure" class="btn-red">确定预约</a>
          <p class="tips-bot">*请注意，出于时间安排，您只能在保时捷友谊赛、分界洲岛自由行与试驾体验三个活动中选择一项参与。</p>
          <p class="tips-bot">* 预约参加活动，即视为授权同意保时捷将您与同行伙伴的姓名与肖像权使用于公共宣传目的。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import select_comp from '@/views/public/select'
  
  export default {
    data() {
      let _params = this.$route.params;
      console.log('[winzhyming] form params is :', _params);
      return {
        sex_select: {
          selections: [
            {name: '男', val: '1'},
            {name: '女', val: '2'}
          ],
          val: '',
          tips: '性别',
          name: 'sex'
        },
        activity_select: {
          selections: [
            {name: '分界洲岛自由行', val: '1'},
            {name: '分界洲岛试驾体验', val: '2'}
          ],
          val: _params.activity || '',
          tips: '活动',
          disabled: !!_params.activity,
          name: 'activity'
        },
        drive_select: {
          selections: [
            {name: '是', val: '1'},
            {name: '否', val: '2'}
          ],
          val: '',
          tips: '是否试驾',
          name: 'drive'
        },
        interest_car: {
          selections: [
            {name: '911', val: '1'},
            {name: 'New Macan', val: '2'},
            {name: '718 Cayman', val: '3'},
            {name: 'Cayenne E3', val: '4'}
          ],
          val: '',
          tips: '感兴趣车型',
          name: 'interest'
        },
        loading: true,
        form_data: {
          name: '',
          gender: '',
          mobile: '',
          tour_type: _params.activity || '',
          is_dt: '',
          interest_car: '',
          activity_time: '2'
        }
      }
    },
    methods: {
      sure() {
        // this.$router.push({'name': 'subscribe.result', 'params': {'type': this.activity_select.val}});
        // return;

        let _error = this.checkValidate();
        if(_error) return this.$root.pop(_error);
        let _data = this.getFormData();
        
        $.ajax({
          type: "POST",
          url: "/sk/myOrder2.php",
          // url: "https://www.stxcve.cn/sk/myOrder2.php",
          data: _data,
          datatype: 'jsonp',
          jsonp: 'jsonp_callback',
          success: (data) => {
            this.$router.push({'name': 'subscribe.result', 'params': {'type': this.activity_select.val}});   
          },
          error: (_error) => {
            this.$root.pop(_error);
//          this.$router.push({'name': 'subscribe.result', 'params': {'type': this.activity_select.val}});  
          }         
        });
      },
      getFormData() {
        let _form_data = {
          name: this.form_data.name,
          gender: parseInt(this.form_data.gender),
          mobile: this.form_data.mobile,
          tour_type: parseInt(this.form_data.tour_type),
          is_dt: parseInt(this.form_data.is_dt),
          interest_car: parseInt(this.form_data.interest_car)
        };
        return _form_data;
      },
      checkValidate() {
        let _error = '';
        if(!this.form_data.name) {
          _error = '请填写姓名';
        } else if(!this.form_data.gender) {
          _error = '请选择性别';
        } else if(!this.form_data.mobile) {
          _error = '请填写电话号码';
        } else if(this.form_data.mobile && !this.checkPhone(this.form_data.mobile)) {
          _error = '手机号码有误，请重填';
        } else if(!this.form_data.tour_type) {
          _error = '请选择活动类型';
        } else if((this.form_data.tour_type === '2') && !this.form_data.is_dt) {
          _error = '请选择是否试驾';
        } else if((this.form_data.tour_type === '2') && (this.form_data.is_dt === '1') && !this.form_data.interest_car) {
          _error = '请填写感兴趣车型';
        }
        return _error;
      },
      checkPhone(_val) {
        if(!(/^1[345789]\d{9}$/.test(_val))) { 
          return false; 
        } else {
          return true;
        }
      }
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/bg-top11.jpg';
    },
    components: {
      select_comp
    },
    watch: {
      'drive_select.val'(_val) {
        this.form_data.is_dt = _val;
      },
      'activity_select.val'(_val) {
        this.form_data.tour_type = _val;
      },
      'sex_select.val'(_val) {
        this.form_data.gender = _val;
      },
      'interest_car.val'(_val) {
        this.form_data.interest_car = _val;
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-form.vue