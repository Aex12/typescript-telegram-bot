/*
	This script still needs some tweaking.
	
	It's meant to be run inside the developer console of any modern browser with the following url opened:
	https://core.telegram.org/bots/api
*/
(function () {
	function getType (t) {
		if (/^Array of /.test(t)) {
			return t.replace(/Array of (.+)/, (str, p1) => {
				return `${getType(p1)}[]`
			});
		}

		const or = t.split(' or ');
		if (or.length >= 2) {
			return or
				.map((tt) => getType(tt))
				.join(' | ');
		}

		switch (t) {
			case 'Integer':
				return 'number';
			case 'Float':
				return 'number';
			case 'String':
				return 'string';
			case 'Boolean':
				return 'boolean';
			default:
				return `${t}`;
		}
	}

	function capFirst (s) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}

	function getPrevH4 (el, maxDepth = 3, depth = 0) {
		if (depth > maxDepth) {
			return false;
		}
		if (depth === 0) {
			return getPrevH4(el.previousSibling, maxDepth, depth+1);
		}
		if (el.localName === 'h4') {
			return el;
		}
		return getPrevH4(el.previousSibling, maxDepth, depth+1);
	}

	let output = '';

	document.querySelectorAll('table.table').forEach((table, i) => {
		const h4 = getPrevH4(table, 12);

		if (!h4) {
			console.log(table);
			return;
		}

		table.querySelectorAll('tbody > tr').forEach((row, i) => {
			const columns = row.querySelectorAll('td');

			if (i === 0) {
				const interface = h4.innerText;
				if (columns.length === 3) {
					output += `export interface ${interface} {\n`;
				} else {
					output += `export interface ${capFirst(interface)}Parameters {\n`;
				}
			}

			const field = columns[0].innerText;
			const type = getType(columns[1].innerText);
			const optional = columns[2].innerText.startsWith('Optional') ? '?' : '';

			output += `\t${field}${optional}: ${type};\n`;
		})
		
		output += `}\n\n`;
	})

	console.log(output);
})();