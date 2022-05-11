
    function FatherType () {
        this.name = ['aa','bb','cc'];
        this.property = true;
      }
   
      //为父类型添加方法
      FatherType.prototype.getFatherrValue = function() {
        return this.property;
      };
   
      //为子类型创建构造函数
      function SunType() {
        this.test = ['a','b','c','d'],
        this.subproperty = false
      }
   
      //子类型的原型指向父类型的实例
      SunType.prototype = new FatherType();
   
      //给子类型添加方法，一定要在实现继承之后，否则会在将指针指向父类型的实例，则方法为空
      SunType.prototype.geSunValue = function() {
        return this.subproperty;
      }
   
      // 测试代码
      var instance1 = new SunType();
      instance1.name.push('dd');
      instance1.test.push('e');
      console.log(instance1);
      console.log(instance1.getFatherrValue()); //true
      console.log(instance1.geSunValue());  //false
      console.log(instance1.name);
      console.log(instance1.test);
   
      var instance2 = new SunType();
      console.log(instance2);
      
      console.log(instance2.name);
      console.log(instance2.test);
      
      var instance3 = new FatherType();
      console.log(instance3);
   
      /* 缺点：原型链代码存在的第一个问题是由于子类型的原型是父类型的实例，也就是子类型的原型中包        
      含的父类型的属性，从而导致引用类型值的原型属性会被所有实例所共享。以上代码的 
      instance1.name.push('yzy');就可以证明此问题的存在。而原型链的第二个问题就是：在创建子类型 
      的实例时，不能向超类型的构造函数中传递参数。因此我们在实际开发中，很少单独使用原型链。  */
