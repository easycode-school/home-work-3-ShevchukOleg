// Task 1

/**
 * addItemInfoDecorator - декоратор класса Item, который вносит изменения в конструктор
 * @param target - функция класса конструктора
 * @param method - метод для изменения
 * @param descriptor - Объект интерфейса PropertyDescriptor
 * @return {void}
 */
function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor): void {
  let mainMethod = descriptor.value;
  descriptor.value = function(){
    this.date = new Date();
    this.info = `${this.name}-${this.price}`
    let origResult = mainMethod.apply(this);
    return origResult;
  }

}


class Item {
    public price: number;
    public name: string;

     /**
     *  constructor - метод инициализации
     * @param {string} name 
     * @param {number} price
     */
    constructor(name: string ,price: number) {
        this.name = name;
        this.price = price;
    }

    /**
     * getItemInfo - матод для получения значений свойств екземпляра класса
     * @return {object}
     */
    @addItemInfoDecorator
    public getItemInfo(): object {
        return {
            name: this.name, 
            price: this.price
        };
    }
}

let item = new Item('Apple', 100);
// console.log(item.getItemInfo());


// Task 2
//  Очень грубый метод получается в детораторе нужно повторить весь класс и добавить то что нужно...
function shangeClass(type: string) {
    return function(targetClass){
        return class {
            public name:string;
            public age: number;
            public type: string;
            public createDate: {};
        
            constructor(name: string, age:number) {
                this.name = name;
                this.age = age;
                this.type = type;
                this.createDate = new Date();
            }
            getUserInfo(){
            return this;
            }
        }
    }
}
let param: string = "Admin";
@shangeClass(param)
class UserClass{
  public name:string;
  public age: number;

  constructor(name: string, age:number) {
      this.name = name;
      this.age = age;
  }
  /**
   * getUserInfo - возвращает информацию о пользователе
   */
  getUserInfo(){
    return this;
  }
}

let User1 = new UserClass('Mykola', 22);
User1.getUserInfo();

//  Task 3
                                            // News api USA
namespace USA {
    export interface INews {
        id: number;
        title: string;
        text: string;
        author: string;
    }

    export class NewsService {
        protected apiurl: string = 'https://news_api_usa_url'
        public getNews() {} // method
    }
}


                                            // News api Ukraine
namespace Ua {
    export interface INews {
        uuid: string;
        title: string;
        body: string;
        author: string;
        date: string;
        imgUrl: string;
    }

    export class NewsService {
        protected apiurl: string = 'https://news_api_2_url'
        public getNews() {} // method get all news
        public addToFavorite() {} // method add to favorites
    }
}
//  Task 4

class Junior {
    /**
     * doTasks -выполнение заданий
     * @returns {void}
     */
    doTasks(): void {
        console.log('Actions!!!');
    }
}

class Middle {
    /**
     * createApp -создание преложений
     * @returns {void}
     */
    createApp(): void {
        console.log('Creating!!!');
    }
}

class Senior implements Junior, Middle{
    doTasks(): void {
    }
    createApp(): void {
    }
    /**
     * createArchitectur - разработка архитектуры
     *  @returns {void}
     */
    public createArchitecture(): void{
        console.log("Makin total logic!!!");
    }
}
/**
 * @param {Object} Senior - куда вводятся свойства
 * @param {Array} [Junior, Middle] - доноры
 */
applyMixins(Senior, [Junior, Middle]); 
/**
 * applyMixins - функция применения миксина
 * @param {any} targetClass  -целевой класс 
 * @param {any[]} baseClasses - примешуэмиые классы
 */
function applyMixins (targetClass: any, baseClasses: any[]) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName]; 
        });
    });
}


