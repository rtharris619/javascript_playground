let mySingleton = (function () {

    let instance;
  
    function init() {
  
      function privateMethod() {
        console.log("I'm private");
      }
  
      let privateVariable = "I'm also private";
      let privateRandomNumber = Math.random();
  
      return {
        publicMethod: function () {
          console.log("The public can see me");
        },
        publicProperty: "I'm also public",
        getRandomNumber: function () {
          return privateRandomNumber;
        }
      };
    }
  
    return {
      getInstance: function () {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
    };
  
  })();
  
  let singleA = mySingleton.getInstance();
  let singleB = mySingleton.getInstance();
  console.log(singleA.getRandomNumber() === singleB.getRandomNumber());
  
  
  let SingletonTester = (function () {
  
    function Singleton(options) {
      options = options || {};
      this.name = "SingletonTester";
      this.pointX = options.pointX || 6;
      this.pointY = options.pointY || 10;
    }
  
    let instance;
  
    let _static = {
      name: "SingletonTester",
      getInstance: function (options) {
        if (instance === undefined) {
          instance = new Singleton(options);
        }
        return instance;
      }
    }
  
    return _static;
  
  })();
  
  let singletonTester = SingletonTester.getInstance({pointX: 5});
  console.log(singletonTester.pointX);
  