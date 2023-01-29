// // function countDown(num) {
// //     if (num <= 0) {
// //         // This is the base case, where te recursion its going to end.
// //         console.log("All done");
// //         return;
// //     }
// //     console.log(num);
// //     num--;
// //     countDown(num);
// // }

// // countDown(70);

// // function sumRange(nume) {
// // 	if (nume === 1) return 1;
// // 	return nume + sumRange(nume - 1);
// // }

// // sumRange(5); 13
// //     return 5 + 8
// //                     return 4 + 8
// //                                     return 3 + 5
// //                                                     return 2 + 3
// //                                                                 return 2 + 1

// // Write a function called power which accepts a base and an exponent.
// //  The function should return the power of the base to the exponent.
// //  This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
// function power(base, expo) {
// 	// base case => hacer la llamada recursiva las veces que diga el exponente
// 	if (expo === 0 || base === 0) return 1;
// 	let result = power(base, expo - 1);
// 	return result;
// }

// console.log(power(2, 4));
// console.log(power(5, 3));
// console.log(power(0, 0));
// console.log(power(1, 2));
// console.log(power(10, 4));
function reverse(str) {
	// add whatever parameters you deem necessary - good luck!
	let reversedSring = "";
	let leng = str.lenght;
	function reverseHelper() {
		if (str.lenght === reversedSring.lenght) return reversedSring;
		reversedSring.concat(reverseHelper(str.slice(leng--)));
	}
	console.log(reversedSring);
	console.log(1 + 1);
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
