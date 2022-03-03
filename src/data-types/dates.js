
function dateConversion(date) {
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
}

function testDateConversion() {
    let date = "03/10/2022";    
    let dt = new Date(date);
    console.log(dateConversion(dt));
}

module.exports.testDateConversion = testDateConversion;
