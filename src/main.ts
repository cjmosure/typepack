import * as $ from 'jquery';
// import * as _ from 'lodash';

export default class App {
  public $el: JQuery;
  constructor() {
    this.$el = $('body');
  }
  public sayHi() {
    this.$el.append('<h1>It Works!</h1>');
  }
}

const app = new App;
app.sayHi();
