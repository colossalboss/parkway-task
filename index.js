// TASK 1
// A company has a number of software developers and a number of treats to pass out to them.
// Their HR decides the fairest way to divide the treats is to seat the developers around a circular table in sequentially numbered chairs.
// A chair number will be drawn from a hat. Beginning with the developer in that chair, one candy will be handed to each developer sequentially around 
// the table until all have been distributed. 

// The HR is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful.
// Determine the chair number occupied by the developer who will receive that candy.

// For example, there are 4 developers and 6 pieces of candy. The developers arrange themselves in seats numbered 1 to 4.
// Let's suppose two (2) is drawn from the hat. Developers receive candy at positions 2, 3, 4, 1, 2, 3. The developer to be warned sits in chair number 3.

// Function Description

// Write a warnTheDeveoper function that will return an integer representing the chair number of the developer to warn.
 
// warnTheDeveoper(n, m, s) function has the following parameter(s):
 
// n: an integer, the number of developers
// m: an integer, the number of sweets
// s: an integer, the chair number to begin passing out sweets from

// SOLUTION
const warnTheDeveoper = (n, m, s) => {  
  //check if treats would go round a number of times
  m = m > n ? m - (Math.floor(m / n) * n) : m;

  //give developer treat
  m = m - 1;
  while (m > 0) {
    //give next devloper
    m = m - 1;
    // increment seat number
    s = s < n ? s + 1 : 1;
  }
  return s;
}
const developerSeatNumber = warnTheDeveoper(4, 6, 2);
console.log({ developerSeatNumber })