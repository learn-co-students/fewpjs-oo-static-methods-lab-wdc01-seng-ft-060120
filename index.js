class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let wordArray = string.split(" ")
    let firstWord = wordArray[0]
    wordArray[0] = this.capitalize(firstWord)

    const capWords =  wordArray.map(function(word) {
      if (word != "the" && word != "a" && word != "an" && word !== "but" && word != "of" && word != "and" && word != "for" && word != "at" && word != "by" && word != "from"){
        return Formatter.capitalize(word)
      }
      else{
        return word
      }
    })

    return capWords.join(" ")
  }

}

