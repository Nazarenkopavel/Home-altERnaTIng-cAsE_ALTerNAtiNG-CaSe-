/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
*/
String.prototype.toAlternatingCase = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] == this[i].toUpperCase()) {
      arr.push(this[i].toLowerCase());
    } else if (this[i] == this[i].toLowerCase()) {
      arr.push(this[i].toUpperCase());
    }
  }
  return arr.join("");
};

/*
  String.prototype.toAlternatingCase = function () {
      return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
  }
  */
