// using the js sort method to sort in a diferent way, numbers will be num1 - num2,
// strings by its length str1 - str2.

const unsortedArray = [
	"antonio",
	"jessica",
	"gabriela",
	"jonathan",
	"isis",
	"ximena",
	"a",
];

const sortedArray = unsortedArray.sort((str1, str2) => {
	return str1.length - str2.length;
});

// console.log(sortedArray);

const unsortedNumbers = [14, 29, 18, 37, 10, 9, 56, 92, 1, 90];

function bubbleSort(arr) {
	// first traverse the array, so we need a loop
	let temp;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
		}
	}
	return arr;
}

console.log(bubbleSort(unsortedNumbers));
