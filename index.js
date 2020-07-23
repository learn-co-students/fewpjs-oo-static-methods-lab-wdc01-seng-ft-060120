class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    const nonCapitalWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    const splitSentence = sentence.split(' ');
    splitSentence[0] = this.capitalize(splitSentence[0])
    return splitSentence.map(word => {return nonCapitalWords.includes(word) ? word : this.capitalize(word);}).join(' ')
  }
}