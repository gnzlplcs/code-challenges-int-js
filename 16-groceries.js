/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
*/
const groceries = obj => {
  let stringsArr = [];
  obj.forEach(element => {
    stringsArr.push(element.item);
  });
  return format(stringsArr);
}

const format = arr => {
  if (arr.length == 1) {
    return arr[0];
  } else if (arr.length == 2) {
    return arr.join(' and ');
  } else {
    let longArr = arr.slice(0, -1).join(', ');
    return longArr += ` and ${arr[arr.length - 1]}`;
  }
}

console.log(groceries([{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }]));
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
console.log(groceries( [{item: 'Cheese Balls'}] ) );