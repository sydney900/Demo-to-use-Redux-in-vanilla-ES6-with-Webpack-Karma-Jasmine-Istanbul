require('../../scss/main.scss');
import { createStore } from 'redux';
//import { createStore} from '../../node_modules/redux/dist/redux';
import { increment, decrement } from './actions';
import { rootReducer } from './reducers';

class Counter {
  constructor(options) {

    this.store = options.store;

    this.inc = () => {
      this.store.dispatch(increment());
    };
  
    this.dec = () => {
      this.store.dispatch(decrement())
    };
  
  
    this.update = () => {
      console.log(this.store.getState());
      this.$el.querySelector('#text').innerHTML = this.store.getState().countReducer.count;
    };
  
    this.render = () => {
      this.update();
    };

    this.store.subscribe(this.update);    

    this.$el = options.el;
    this.$el.querySelector('#inc').addEventListener('click', this.inc.bind(this));
    this.$el.querySelector('#dec').addEventListener('click', this.dec.bind(this));

  };

}

export function init() {
  console.clear();

  document.addEventListener("DOMContentLoaded", () => {
  //create store
  const store = createStore(rootReducer);

  const counter = new Counter({
      el: document.getElementById('counter'),
      store: store
    });

    counter.render();
  });
}

init();

