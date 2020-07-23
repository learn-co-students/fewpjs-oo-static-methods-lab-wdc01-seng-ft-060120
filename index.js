class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let new_arr = [];
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
      if(i === 0) {
        new_arr.push(this.capitalize(words[i]));
      } else {
        if(exclude.includes(words[i])){
          new_arr.push(words[i])
        } else {
          new_arr.push(this.capitalize(words[i]))
        }
      }
    }
    return new_arr.join(" ");
  }
}

