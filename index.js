class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(str) {
    let arr = str.split(' ')
    let returnArray = []

    returnArray.push(this.capitalize(arr[0]))

    for (let i = 1; i < arr.length; i++) {
      if (
        arr[i] != 'the' &&
        arr[i] != 'a' &&
        arr[i] != 'an' &&
        arr[i] != 'but' &&
        arr[i] != 'of' &&
        arr[i] != 'and' &&
        arr[i] != 'for' &&
        arr[i] != 'at' &&
        arr[i] != 'by' &&
        arr[i] != 'from'
      ) {
        returnArray.push(this.capitalize(arr[i]))
      } else {
        returnArray.push(arr[i])
      }
    }
    return returnArray.join(' ')
  }
}
