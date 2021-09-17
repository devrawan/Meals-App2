
import { decorate, observable, action ,makeObservable} from "mobx";
import axios from 'react-native-axios';
import loadMeals from '../src/network/Api'
var arr =[]
class Store {
   text="rawanmmmm";
  updateText = (text) => {
    this.text = text;
  }

  data =null;

  setData(dataa){
    this.data = dataa;
  };

  callData(){
       loadMeals().then(function (response) {
        console.log("arrrrrr")
     console.log( response.data )
     this.setData(response.data)

}).catch(function (error) {
    console.error(error);
});
  }



    constructor(text) {
        makeObservable(this, {
            text: observable,
            updateText: action,
            data:observable,
            callData:action,
            setData:action,
        })
    }

 




}


export default new Store();