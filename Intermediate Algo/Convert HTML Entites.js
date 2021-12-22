function convertHTML(str) {
	// object with HTML strings to their correspoinding entites.
	const htmlEnities = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;'
	};
	return str.replace(/([&<>'"])/g, match => htmlEnities[match]) // used replaced with REGEX and callback function to switch them
}
  console.log(convertHTML("Dolce & Gabbana"))

  /*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
  */