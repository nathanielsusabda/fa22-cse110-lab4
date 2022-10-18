# Part 2
1. It will print 3. This is because the variable i still lives after the for loop. The reason is because the variable i is declared as var i, thus it will live after the for loop. Moreover, since the for loop will run for 3 times since the input is an array of 3, the value of i will be 3.
2. It will print 150. This is because the discountedPrice is declared as var discountedPrice. Thus, it will still live after the for loop ends. Moreover, the discountedPrice will consider the last iteration of the loop, when it is computing prices[2]. We know that based on the input, the prices[2] = 300. Thus, when we calculate the discountedPrice = 300 * (1-0.5) = 150. Thus, 150 will be printed.
3. It will print 150. This is because the finalPrice is declared as var finalPrice. Thus, it will still live after the for loop and function ends. Moreover, the finalPrice will consider the last iteration of the loop, when it is computing prices[2]. We know that based on the input, the prices[2] = 300. Thus, when we calculate the discountedPrice = 300 * (1-0.5) = 150. Then the finalPrice = Math.round(discountedPrice * 100) / 100. Thus, it will compute Math.round(150 * 100) / 100 = 150. Thus, 150 will be printed.
4. Here it will return an array of the discountedPrice. The array that will be returned is [50, 100, 150]. This is because the input array is [100, 200, 300] and the discount for each elements in the array is 50%. Thus, the array that will be returned is [50, 100, 150].
5. The code will return an error. This is because the variable i is delcared using let i. Thus, the variable i will die after the for loop ends. thus, the code will return an error.
6. The code will return an error. This is because the variable discountedPrice is declared using let discountedPrice. Thus, since the declaration is inside the for loop, the variable discountedPrice dies after the for loop ends.
7. The code will print 150. Although the variable finalPrice is declared using let finalPrice, but the declaration is located outside of the for loop. This means that it is in the same scope as line 14. Thus, the code will still print 150. Also, 150 will be printed because it calculates the finalPrice of the last item in the array. This is because the last time finalPrice will be reassigned is when the last iteration of for loop happens. Thus, 150 will be printed.
8. The code will return an array of the discountedPrice. The array that will be returned is [50, 100, 150]. This is because the input array is [100, 200, 300] and the discount for each elements in the array is 50%. Thus, the array that will be returned is [50, 100, 150]. Although the variable discounted is declared using let discounted, but since it is declared outside of the for loop, it will have the same scope as when the function returns.
9. The code will return an error. This is because the variable i is delcared using let i. Thus, the variable i will die after the for loop ends. thus, the code will return an error.
10. The code will print 3. This is because the value length has been set before the for loop (const length = prices.length). Thus, since the array length is 3 (based on the input). It will print the value of 3.
11. The code will return an array of the discountedPrice. The array that will be returned is [50, 100, 150]. This is because the input array is [100, 200, 300] and the discount for each elements in the array is 50%. Thus, the array that will be returned is [50, 100, 150]. Although the discountedPrice array is declared as const discountedPrice, we can still add some elements to the array. A const array means that the array cannot be reassigned. Thus, adding elements are still valid.
12. A) student.name \
    B) student['Grad year']\
    C) student.greeting()\
    D) student['Favorite Teacher'].name\
    E) student.courseLoad[0]

13. A) 32 , This is because integers map to their exact string representation.\
    B) 1 , This is because the 3 is converted into an integer.\
    C) 3 , This is because the null is converted to a 0 integer.\
    D) 3null , This is because the null is converted to a string and combined with 3.\
    E) 4 , This is because true maps to 1. Thus, 3 + 1 = 4.\
    F) 0 , This is because false maps to 0 and null maps to 0. Thus, 0+0 = 0.\
    G) 3undefined , This is because undefined maps to a string and combined with 3. \
    H) NaN , This is because the conversion failed, thus resulting to a NaN.

14. A) true , This is because 2 is converted to an integer and since 2 > 1, it returns true.\
    B) false , This is because 2 and 12 is converted to an integer.\
    C) true , This will do the type conversion of '2' into an integer of 2, then it will compare. Since 2 = 2, it returns true.\
    D) false , This is because there is no type conversion. Thus it will directly compares, since they have different types (integer and char), it will return false.\
    E) false , This is because it will do a type conversion of true to 1, then compares. Since 1 is not equal to 2, it will return false.\
    F) true , This is because Boolean(2) will evaluates to true. Thus, since true === true, it will returns true.

15. == operator does the type conversion first then compares, while the === operator is checking the equality without type conversions.
16. In part2-question16.js
17. It will return the array of [2, 4, 6]. This is because we pass a function doSomething to the second parameter of modiftArray's function. We know that doSomething will multiple each of the element in the array by 2. Thus, since we have the input [1, 2, 3], when each of the element in the array is multiplied by 2, it will return the array of [2, 4, 6].
18. In part2-question18.js
19. 1\
    4\
    3\
    2
