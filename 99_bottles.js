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
 *
 * @param {Integer} start The starting number of bottles
 */
function bottleSong(start) {
  for (let n = start; n > 0; n--) {
    console.log(
      `${n} bottle${n == 1 ? "" : "s"} of beer on the wall, ` +
        `${n} bottle${n == 1 ? "" : "s"} of beer.\n` +
        "Take one down and pass it around, " +
        `${n - 1} bottle${n - 1 == 1 ? "" : "s"} of beer on the wall.`
    );
  }

  console.log(
    "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more, " +
      `${start} bottle${start == 1 ? "" : "s"} of beer on the wall.`
  );
}

bottleSong(99);
