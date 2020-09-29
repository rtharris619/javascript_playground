
function loopOverArray (array) {
  array.forEach(function(item, index) {
    console.log(item, index);
  });
}

module.exports.loopOverArray = loopOverArray;
