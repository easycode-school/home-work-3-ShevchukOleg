// Task 1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * addItemInfoDecorator - декоратор класса Item, который вносит изменения в конструктор
 * @param target - функция класса конструктора
 * @param method - метод для изменения
 * @param descriptor - Объект интерфейса PropertyDescriptor
 * @return {void}
 */
function addItemInfoDecorator(target, method, descriptor) {
    let mainMethod = descriptor.value;
    descriptor.value = function () {
        this.date = new Date;
        this.info = `${this.name}-${this.price}`;
        let origResult = mainMethod.apply(this);
        return origResult;
    };
}
class Item {
    /**
    *  constructor - метод инициализации
    * @param {string} name
    * @param {number} price
    */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    /**
     * getItemInfo - матод для получения значений свойств екземпляра класса
     * @return {object}
     */
    getItemInfo() {
        return {
            name: this.name,
            price: this.price
        };
    }
}
__decorate([
    addItemInfoDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Item.prototype, "getItemInfo", null);
let item = new Item('Apple', 100);
// console.log(item.getItemInfo());
// Task 2
//  Очень грубый метод получается в детораторе нужно повторить весь класс и добавить то что нужно...
function shangeClass(type) {
    return function (targetClass) {
        return class {
            constructor(name, age) {
                this.name = name;
                this.age = age;
                this.type = type;
                this.createDate = new Date;
            }
            getUserInfo() {
                return this;
            }
        };
    };
}
let param = "Admin";
let UserClass = class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * getUserInfo - возвращает информацию о пользователе
     */
    getUserInfo() {
        return this;
    }
};
UserClass = __decorate([
    shangeClass(param),
    __metadata("design:paramtypes", [String, Number])
], UserClass);
let User1 = new UserClass('Mykola', 22);
User1.getUserInfo();
//  Task 3
// News api USA
var USA;
(function (USA) {
    class NewsService {
        constructor() {
            this.apiurl = 'https://news_api_usa_url';
        }
        getNews() { } // method
    }
    USA.NewsService = NewsService;
})(USA || (USA = {}));
// News api Ukraine
var Ua;
(function (Ua) {
    class NewsService2 {
        constructor() {
            this.apiurl = 'https://news_api_2_url';
        }
        getNews() { } // method get all news
        addToFavorite() { } // method add to favorites
    }
})(Ua || (Ua = {}));
//  Task 4
class Junior {
    /**
     * doTasks -выполнение заданий
     * @returns {void}
     */
    doTasks() {
        console.log('Actions!!!');
    }
}
class Middle {
    /**
     * createApp -создание преложений
     * @returns {void}
     */
    createApp() {
        console.log('Creating!!!');
    }
}
class Senior {
    doTasks() {
    }
    createApp() {
    }
    /**
     * createArchitectur - разработка архитектуры
     *  @returns {void}
     */
    createArchitecture() {
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
function applyMixins(targetClass, baseClasses) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName];
        });
    });
}
