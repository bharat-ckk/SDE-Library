/*Given a list of timestamps and commodity prices, find out highest commodity price at given timestamp. 
timestamps are not necessarily in sorted order, there can be multiple entries for a timestamp as well.
Followup: after each timestamp, commodity price entry, we are putting a checkpoint, 
given a timestamp and checkpoint find maximum commodity prices till then. //

Entries:[(3, 120),(1, 100),(2, 110),(3, 150),(2, 105),(1, 130)]
Query Timestamp: 3

Output: 150
*/

let Enteries = new Map();

const Entry = function (timestamp, price, checkpoint) {
  if (Enteries.has(timestamp)) {
    let val = [...Enteries.get(timestamp), price];
    Enteries.set(timestamp, val);
  } else {
    Enteries.set(timestamp, [price]);
  }
  if (checkpoint) {
    let val = [...Enteries.get(timestamp), checkpoint];
    Enteries.set(timestamp, val);
  }
};

const higestPrice = function (timestamp, checkpoint) {
  let maxPrice = 0;
  let prices = Enteries.get(timestamp); //array
  for (let i = 0; i < prices.length - 1; i++) {
    maxPrice =
      typeof prices[i] === "number" ? Math.max(maxPrice, prices[i]) : maxPrice;
    if (prices[i + 1] === checkpoint) {
      return maxPrice;
    }
  }
  return maxPrice;
};
Entry(1, 140);
Entry(2, 220);
Entry(1, 130, "a");
Entry(1, 160);
Entry(1, 260);
Entry(1, 30);
Entry(1, 230, "b");
Entry(1, 230, "c");
Entry(1, 30);

console.log(Enteries);
let ans1 = higestPrice(1, Enteries); // 260
let ans2 = higestPrice(1, "a"); // 140
let ans = higestPrice(1, "c"); // 140

console.log(ans); // 260
