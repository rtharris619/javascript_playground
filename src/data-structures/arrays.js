
function loopOverArray (array) {
  array.forEach(function(item, index) {
    console.log(item, index);
  });
}

function insertIntoArray (array, insertIndex, itemToInsert) {
  array.splice(insertIndex, 0, itemToInsert);
  return array;
}

function insertAtBeginning (array, itemToInsert) {
  array.unshift(itemToInsert);
  return array;
}

function removeFromBeginning (array) {
  array.shift();
  return array;
}

module.exports.loopOverArray = loopOverArray;
module.exports.insertIntoArray = insertIntoArray;
module.exports.insertAtBeginning = insertAtBeginning;
module.exports.removeFromBeginning = removeFromBeginning;