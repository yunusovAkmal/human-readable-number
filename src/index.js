const def = {
	0: "zero",
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
	100: "hundred",
	1000: "thousand",
	1000000: "million",
	1000000000: "billion",
};

const calc = (num, zeroes, word, m = 1) => {
	const n = `${num}`.slice(0, -zeroes);
	let q = num % 10 ** zeroes;
	return toReadable(n * m) + word + (q ? toReadable(q) : "");
};

const toReadable = (num) => {
	if (def[num]) return def[num];
	if (num < 100) return calc(num, 1, "-", 10);
	if (num < 1000) return calc(num, 2, " hundred ");
	if (num < 1000000) return calc(num, 3, " thousand ");
	if (num < 1000000000) return calc(num, 6, " million ");
	if (num < 1000000000000) return calc(num, 9, " billion ");
};
