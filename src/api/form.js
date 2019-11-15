import Vue from 'vue'

export default {
  
  init() {
    this.send_sms = Vue.resource('https://www.stxcve.cn' + '/sk/sendSms.php');
    this.my_order_activity = Vue.resource('https://www.stxcve.cn' + '/sk/myOrder.php');
    this.my_order_victory = Vue.resource('https://www.stxcve.cn' + '/sk/myOrder2.php');
    return this;
  }
}



// WEBPACK FOOTER //
// ./src/api/form.js