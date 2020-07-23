class Formatter {

	static capitalize(string) {
		return string[0].toUpperCase() + string.slice(1);
	}

	static sanitize(string) {
		return string.replace(/[^\w\d \-']+/g, "");
	}

	static titleize(string) {
		//credit to Berel for the replace regex
		const badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
		let newString = string.replace(/\b(\w+)/g, (word) => {
			if(badWords.includes(word)){
				return word;
			}
			else{
				return this.capitalize(word);
			}
		})

		return this.capitalize(newString);
	}
}
