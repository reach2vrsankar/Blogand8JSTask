// Do the below programs in anonymous function & IIFE & arrow functions

// 	1. Print odd numbers in an array 
console.log("problem 1: Print odd numbers in an array ");
	// i) anonymous function
			const printOdd = function(arr){
				let odd = arr.filter((iteam)=> iteam%2 ===1	);
				return odd;
			}
			console.log(printOdd([1,2,3,4,5,6,7,8,9,10,11]));
	// ii) IIFE 
			(function(arr){
					let even = arr.filter((iteam)=> iteam%2 ===0	);
					console.log(even);
			}) ([1,2,3,4,5,6,7,8,9,10,11]);
	// iii) arrow functions
			let arr = [1,2,3,4,5,6,7,8,9,10,11];
			console.log(arr.filter(item => item%2));


// 	2. Convert all the strings to title caps in a string array
console.log("problem 2: Convert all the strings to title caps in a string array");
	// i) anonymous function
			const capitalize = function(arr){
				let capdata = arr.map((item)=>{
					let temp = item.split("");
					temp[0] = temp[0].toUpperCase();
					return temp.join("");
				});
				return capdata;
			}
			console.log(capitalize(["hi","apple","banana","orange"]));
	// ii) IIFE 
				console.log((function(arr){
					let capdata2 = arr.map(item=>{
						let temp = item.split("");
						temp[0] = temp[0].toUpperCase();
						return temp.join("");
					})
					return capdata2;
				})(["hi","apple","banana","orange"]));
	// iii) arrow functions
			const capitalized = arr=> arr.map(item=>{
									let temp = item.split("");
									temp[0] = temp[0].toUpperCase();
									return temp.join("");
									});
			console.log(capitalized(["hi","apple"]));
			// console.log(capitalized(["banana","orange"]));

// 	3. Sum of all numbers in an array
console.log("problem 3: Sum of all numbers in an array");
	// i) anonymous function
			const sumOfAll = function(arr){
				return arr.reduce((sum,curval)=>sum+curval);
			};
			console.log(sumOfAll([1,2,3,4,5]));
	// ii) IIFE 
			console.log((function(arr){
				return arr.reduce((sum,curval)=>sum+curval);
			})([5,5,5,5,5,5]));
	// iii) arrow functions
			const sumOfAllV = arr => arr.reduce((sum,curval)=>sum+curval);			
			console.log(sumOfAllV([1,2,3,4]));

// 	4. Return all the prime numbers in an array
console.log("problem 4: Return all the prime numbers in an array");
	// i) anonymous function
			const prime = function(arr){
				let outprime = arr.filter((item)=>{
					for(let i=2;i<=Math.sqrt(item);i++){
						if(item%i ===0) return false;
					}
					return true;
				})
				return outprime;
			};
			console.log(prime([2,3,7,6,8,5]))
	// ii) IIFE 
			console.log((function(arr){
				return arr.filter(item=>{
					for(let i=2;i<=Math.sqrt(item);i++){
						if(item%i ===0) return false;
					}
					return true;
				})
			})([1,2,3,4,5,6,7,8,9,10]));
	// iii) arrow functions
			const primeV = arr=>{
				let outprime = arr.filter((item)=>{
					for(let i=2;i<=Math.sqrt(item);i++){
						if(item%i ===0) return false;
					}
					return true;
				});
				return outprime;
			}
				
			console.log(primeV([2,3,7,6,8,5]));

// 	5. Return all the palindromes in an array
console.log("problem 5: Return all the palindromes in an array");
	// i) anonymous function
			let palindromes = function(arr){
				let outpal =[];
				arr.map(item=>{
					let n = item;
					let m = item;
					let sum=0;
					while(n>0){
						let rem = n%10;
						sum = sum *10 +rem;
						n = Math.floor(n/10);
					}
					if(sum === m){
						outpal.push(m);
					}
				})
				return outpal;
			};
			console.log(palindromes([23,121,44,100,1001]));
	// ii) IIFE 
			console.log((function(arr){
				  arr.map((item)=>{
					let n =item;
					let m =item.split("").reverse().join("");
					if(m===n){
						console.log(item);
					}
				})
			})(['viicc', 'cecarar', 'honda', 'ada',"sks"]));
	// iii) arrow functions
			let palVal = arr =>{
				let outpal = [];
				arr.map((item)=>{
					let n=item;
					let m = Number(String(item).split("").reverse().join(""));
					if(m===n){
						outpal.push(item);
					}
				})
				return outpal;
			}
			console.log(palVal([23,121,44,100,1001]));

// 	6. Return median of two sorted arrays of same size 
console.log("problem 6: Return median of two sorted arrays of same size ");
	// i) anonymous function		
			let median = function(arr1,arr2){
				let temp = [...arr1,...arr2].sort((a,b)=>a-b);
				if(temp.length%2===0){
					let mid2 = temp[Math.floor(temp.length/2)];
					let mid1 = temp[Math.floor(temp.length/2)-1];
					console.log("median is : " +(mid2+mid1)/2);
				}else{
					let mid2 = temp[Math.floor(temp.length/2)];
					console.log("median is : " +mid2/2);
				}

			};
			console.log(median([1,2,9],[3,4,7]));
	// ii) IIFE 
			console.log((function(arr1,arr2){
				let temp = [...arr1,...arr2].sort((a,b)=>a-b);
				return temp[Math.floor(temp.length/2)]/2;
			})([1,2,3],[4,5,6,7]));
	// iii) arrow functions
			let medianV =  (arr1,arr2)=>{
				let temp = [...arr1,...arr2].sort((a,b)=>a-b);
				return temp[Math.floor(temp.length/2)]/2;
			};
			console.log(medianV([1,2,9],[3,4,7,8]));

// 	7. Remove duplicates from an array
console.log("problem 7:  Remove duplicates from an array");
	// i) anonymous function
			let removeDup = function(arr){
				return [...new Set(arr)];
			}
			console.log(removeDup(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]));
	// ii) IIFE 
			console.log((function(arr){
				return [...new Set(arr)];
			})([1,2,31,2,4,2,31,1]));
	// iii) arrow functions
			let removeDupV = arr=> [...new Set(arr)];
			console.log(removeDupV([1,2,1,3,4,"Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]));

// 	8. Rotate an array by k times and return the rotated array
console.log("problem 8: Rotate an array by k times and return the rotated array");
	// i) anonymous function
			let rotate = function(arr,n){
				let temp ;
				for(let i=0;i<n;i++){
					temp =arr.shift();
					arr.push(temp);
				}
				return arr;
			}
			console.log(rotate([1,2,3,4,5,6],2));
	// ii) IIFE 
			console.log((function(arr,n){
				let temp ;
				for(let i=0;i<n;i++){
					temp =arr.shift();
					arr.push(temp);
				}
				return arr;
			})([1,2,3,4],3));
	// iii) arrow functions
			let rotateV = (arr,n)=>{
				let temp ;
				for(let i=0;i<n;i++){
					temp =arr.shift();
					arr.push(temp);
				}
				return arr;
			}
			console.log(rotateV([1,2,3,4,5,6],2));

