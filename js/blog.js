$(function() {
  Parse.$ = jQuery;
 //console.log(Parse);
  
  Parse.initialize("rBAyYVKtLXu0SqO4751YQb1P7aa1t7oGzym15dzb", "V02n1O65AhwAaVWtD8pFkj1OF5C26YGmfk3lfx16");
  
  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "bar"}).then(function(object) {
    //console.log("yay! it worked");
  });
  
  var TestObject2 = Parse.Object.extend("TestObject2");
  var testObject2 = new TestObject2();
  testObject2.save({toto: "bar"}).then(function(object) {
    //console.log("An other instance of a new Class created!");
  });

});