class Formatter {
  static capitalize(str) {
    let down = str.toLowerCase()
    return down.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(str) {
    let articlePrep = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']    
    let downcase = str.toLowerCase().split(' ');
    let caps = downcase.map( word => {
      if(!articlePrep.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word
      }
    });
    let final = caps.join(' ')
    return final.charAt(0).toUpperCase() + final.slice(1);
  }
}