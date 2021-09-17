import { observable, action, makeObservable, computed } from "mobx";
import data from './data.json'
import vegan from './Vegan.json'
import dessert from './Dessert.json'
import chicken from './Chicken.json'
import beef from './Beef.json'
class MealStore {

    Meals = data;
    ArrayFav = [];
    element = 0;
    totall = 0;
    Vegan = vegan;
    Dessert = dessert;
    Chicken = chicken;
    Beef = beef;
    click = 1;
    value = null;
    auth = false;
    like = false;
Arr=[]
NeArr =[]
Val=null;

setArr (a){
   this.Arr=[]
   this.NeArr=[]
a.map((itm)=> this.Arr.push({src:itm.src.original ,id:itm.id }))
a.map((itm)=> this.NeArr.push({src:itm.src.original ,id:itm.id }))
}


 setAuth(){
     this.auth = !this.auth
 }
    handleClick(num) {
        this.click = num
    }

    NumberOfMeal(item, arr) {
        if (arr == 'beef') {
            for (let index = 0; index < this.Beef.length; index++) {
                if (item.idMeal == this.Beef[index].idMeal) {
                    this.Beef[index].num++;
                }


            }
        } else if (arr == 'chicken') {
            for (let index = 0; index < this.Chicken.length; index++) {
                if (item.idMeal == this.Chicken[index].idMeal) {
                    this.Chicken[index].num++;
                }


            }
        } else if (arr == 'dessert') {
            for (let index = 0; index < this.Dessert.length; index++) {
                if (item.idMeal == this.Dessert[index].idMeal) {
                    this.Dessert[index].num++;
                }


            }
        } else if (arr == 'vegan') {
            for (let index = 0; index < this.Vegan.length; index++) {
                if (item.idMeal == this.Vegan[index].idMeal) {
                    this.Vegan[index].num++;
                }


            }
        }

        else if (arr == 'meals') {
            for (let index = 0; index < this.Meals.length; index++) {
                if (item.idMeal == this.Meals[index].idMeal) {
                    this.Meals[index].num++;
                }


            }
        }
    }


    minusMeal(item, arr) {
        if (arr == 'beef') {
            if (item.num > 1) {
                for (let index = 0; index < this.Beef.length; index++) {
                    if (item.idMeal == this.Beef[index].idMeal) {
                        this.Beef[index].num--;
                    }
                }
            }
        } else if (arr == 'chicken') {
            if (item.num > 1) {
                for (let index = 0; index < this.Chicken.length; index++) {
                    if (item.idMeal == this.Chicken[index].idMeal) {
                        this.Chicken[index].num--;
                    }
                }
            }
        } else if (arr == 'dessert') {
            if (item.num > 1) {
                for (let index = 0; index < this.Dessert.length; index++) {
                    if (item.idMeal == this.Dessert[index].idMeal) {
                        this.Dessert[index].num--;
                    }
                }
            }
        } else if (arr == 'vegan') {
            if (item.num > 1) {
                for (let index = 0; index < this.Vegan.length; index++) {
                    if (item.idMeal == this.Vegan[index].idMeal) {
                        this.Vegan[index].num--;
                    }
                }
            }
        }

        else if (arr == 'meals') {
            if (item.num > 1) {
                for (let index = 0; index < this.Meals.length; index++) {
                    if (item.idMeal == this.Meals[index].idMeal) {
                        this.Meals[index].num--;
                    }
                }
            }
        }
    }


    BasketArray(item) {
        if (this.ArrayFav.includes(item)) {

        } else {
            this.ArrayFav.push(item);
        }
    }

    get count() {
        return this.Meals.length;
    }

    isLiked(item, arr) {
        if (arr == 'beef') {
            for (let index = 0; index < this.Beef.length; index++) {
                if (item.idMeal == this.Beef[index].idMeal) {
                    if (this.Beef[index].islike === "false") {
                        this.Beef[index].islike = "true"
                        this.like=true
                    } else {
                        this.Beef[index].islike = "false"
                        this.like=false 
                    }
                }
            }
        } else if (arr == 'chicken') {
            for (let index = 0; index < this.Chicken.length; index++) {
                if (item.idMeal == this.Chicken[index].idMeal) {
                    if (this.Chicken[index].islike === "false") {
                        this.Chicken[index].islike = "true"
                    } else {
                        this.Chicken[index].islike = "false"
                    }
                }
            }


        } else if (arr == 'dessert') {
            for (let index = 0; index < this.Dessert.length; index++) {
                if (item.idMeal == this.Dessert[index].idMeal) {
                    if (this.Dessert[index].islike === "false") {
                        this.Dessert[index].islike = "true"
                    } else {
                        this.Dessert[index].islike = "false"
                    }
                }
            }


        } else if (arr == 'vegan') {
            for (let index = 0; index < this.Vegan.length; index++) {
                if (item.idMeal == this.Vegan[index].idMeal) {
                    if (this.Vegan[index].islike === "false") {
                        this.Vegan[index].islike = "true"
                    } else {
                        this.Vegan[index].islike = "false"
                    }
                }
            }
        }

        else if (arr == 'meals') {

            for (let index = 0; index < this.Meals.length; index++) {
                if (item.idMeal == this.Meals[index].idMeal) {
                    if (this.Meals[index].islike === "false") {

                        this.Meals[index].islike = "true"
                    } else {

                        this.Meals[index].islike = "false"
                    }
                }
            }



        }




    }

    SearchofMeal(item) {
        for (let index = 0; index < this.Meals.length; index++) {
            if (item == this.Meals[index].strMeal) {
                this.value = this.Meals[index];
                console.log(this.value);
                return;
            }
        }
        this.value = null;
        console.log(this.value)
    }

    // Del(id){
    //     // for (let index = 0; index < this.Arr.length; index++) {
    //     //     if (item == this.Arr[index].id) {
    //     //         this.Val = this.Arr[index];
    //     //         console.log(this.Val);
    //     //         this.Arr[index]=''
    //     //         return;
    //     //     }
    //     // }
        
    // // this.Arr.map().filter(itm => itm.id !== id)
  
    //     this.Val = null;
    //     console.log(this.Val)
    //     console.log(this.Arr)
    // }
    Del = (id) => {
        if(this.NeArr.length>0){
            this.NeArr = this.NeArr.filter(t => t.id !== id)
            this.NeArr.length--;
        }
        
      }
    setValue() {
        this.value = ''
    }


    fetchh(array) {
        this.Meals.push(array);
    }
    constructor() {
        makeObservable(this, {
            Meals: observable,
            count: computed,
            fetchh: action,
            ArrayFav: observable,
            BasketArray: action,
            NumberOfMeal: action,
            minusMeal: action,
            isLiked: action,
            element: observable,
            totall: observable,
            Vegan: observable,
            Dessert: observable,
            Chicken: observable,
            Beef: observable,
            click: observable,
            handleClick: action,
            SearchofMeal: action,
            value: observable,
            auth: observable,
            like: observable,
            setValue: action,
            setAuth:action,
            Arr:observable,
            setArr:action,
            Val:observable,
            Del:action,
            NeArr:observable

        })
    }

}
export const MealStores = new MealStore();