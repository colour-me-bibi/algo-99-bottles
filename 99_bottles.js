/**
 * This function returns the pluralized version of the word if n is not 1.
 *
 * @param {Integer} n The number of items
 * @param {String} word The word to pluralize
 * @returns
 */
function pluralize(n, word) {
  return `${n} ${word}${n == 1 ? "" : "s"}`;
}

/**
 * This function sings the bottle song by printing to the console:
 *    99 bottles of beer on the wall, 99 bottles of beer.
 *    Take one down and pass it around, 98 bottles of beer on the wall.
 *    98 bottles of beer on the wall, 98 bottles of beer.
 *    Take one down and pass it around, 97 bottles of beer on the wall.
 *    97 bottles of beer on the wall, 97 bottles of beer.
 *    Take one down and pass it around, 96 bottles of beer on the wall.
 *    96 bottles of beer on the wall, 96 bottles of beer.
 *    Take one down and pass it around, 95 bottles of beer on the wall.
 *    95 bottles of beer on the wall, 95 bottles of beer.
 *    Take one down and pass it around, 94 bottles of beer on the wall.
 *    94 bottles of beer on the wall, 94 bottles of beer.
 *    Take one down and pass it around, 93 bottles of beer on the wall.
 *    93 bottles of beer on the wall, 93 bottles of beer.
 *    Take one down and pass it around, 92 bottles of beer on the wall.
 *    92 bottles of beer on the wall, 92 bottles of beer.
 *    Take one down and pass it around, 91 bottles of beer on the wall.
 *    91 bottles of beer on the wall, 91 bottles of beer.
 *    Take one down and pass it around, 90 bottles of beer on the wall.
 *    ...
 *    ...
 *    ...
 *    Take one down and pass it around, 1 bottle of beer on the wall.
 *    1 bottle of beer on the wall, 1 bottle of beer.
 *    Take one down and pass it around, no more bottles of beer on the wall.
 *    No more bottles of beer on the wall, no more bottles of beer.
 *    Go to the store and buy some more, 99 bottles of beer on the wall.
 */
function bottleSong() {
  for (let nBottles = 99; nBottles > 0; nBottles--) {
    console.log(
      `${pluralize(nBottles, "bottle")} of beer on the wall, ${pluralize(nBottles, "bottle")} of beer.\n` + 
      `Take one down and pass it around, ${pluralize(nBottles - 1, "bottle")} of beer on the wall.`
    );
  }

  console.log(
    "No more bottles of beer on the wall, no more bottles of beer.\n" +
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );
}

/**
 * This function recursively sings the bottles song.
 *
 * @param {Integer} nBottles The number of bottles to sing
 */
function recursiveBottleSong(nBottles = 99) {
  if (nBottles === 0) {
    console.log(
      "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    );
    return;
  }

  console.log(
    `${pluralize(nBottles, "bottle")} of beer on the wall, ${pluralize(nBottles, "bottle")} of beer.\n` +
    `Take one down and pass it around, ${pluralize(nBottles - 1, "bottle")} of beer on the wall.`
  );
  recursiveBottleSong(nBottles - 1);
}

bottleSong();
// recursiveBottleSong();
