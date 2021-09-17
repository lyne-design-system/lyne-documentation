import {
  Autocomplete,
  Field,
  Input,
  Radio,
  Select,
  Tabs
} from 'buefy/src/components';

// import 'buefy/dist/buefy.css';

const CustomBuefy = {
  install(Vue) {
    Vue.use(Radio);
    Vue.use(Field);
    Vue.use(Select);
    Vue.use(Tabs);
    Vue.use(Input);
    Vue.use(Autocomplete);
  }
};

export default CustomBuefy;
