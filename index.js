class Formatter {
  static capitalize(str)
  {
    return (str.charAt(0).toUpperCase() + str.substring(1));
  }

  static sanitize(str)
  {
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(str)
  {
    str = Formatter.capitalize(str);
    const ignore = ["a", "an", "but", "of", "and", "for", "at", "by","from", "the"];
    let words = str.split(" ");

    return words.reduce((memo,word) =>
    {
      let w;
      if (!ignore.includes(word))
      {
        w = Formatter.capitalize(word);
      }
      else
      {
        w = word;
      }
      return memo + " " + w;
    });
  }
}
//mdn Array.reduce;