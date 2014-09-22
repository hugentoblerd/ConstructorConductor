//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
 
var test = 'this is a test';
new String(test);

String.prototype.revStr =  function (str) {
  str = str.split('').reverse().join('');
  return str;
}