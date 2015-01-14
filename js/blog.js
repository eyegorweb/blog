$(function() {
  Parse.$ = jQuery;
  
  Parse.initialize("rBAyYVKtLXu0SqO4751YQb1P7aa1t7oGzym15dzb", "V02n1O65AhwAaVWtD8pFkj1OF5C26YGmfk3lfx16");

  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "bar"}).then(function(object) {
    alert("yay! it worked");
  });
});