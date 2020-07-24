class Formatter {
  //add static methods here
  static capitalize(str){
    let strFirst = str[0];
    let strfirst = str[0].toUpperCase();
    return  str.replace(strFirst,strfirst);
  }

  static sanitize(str){
   return  str.replace(/[^\w\d \-']+/g, "");
  }

  static titleize(str){
    let word = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let arr = [];
    let wordArr = str.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
      if(i === 0) {
        arr.push(this.capitalize(wordArr[i]));
      } else {
        if(word.includes(wordArr[i])){
          arr.push(wordArr[i])
        } else {
          arr.push(this.capitalize(wordArr[i]))
        }
      }
    }
    return arr.join(" ");
  }
}