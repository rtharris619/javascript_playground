
function dateConversion(date) {
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
}

function testDateConversion() {
    let date = "03/10/2022";    
    let dt = new Date(date);
    console.log(dateConversion(dt));
}

function makeAdjustment(start, end, adjustment) {

    let result = end;
    
    if (start.valueOf() > adjustment.valueOf()) {
        let hourDiff = start.getUTCHours() - adjustment.getUTCHours();
        let minDiff = start.getMinutes() - adjustment.getMinutes();

        if (hourDiff > 0) {
            result.setUTCHours(result.getUTCHours() - hourDiff);
        }
        if (minDiff > 0) {
            result.setMinutes(result.getMinutes() - minDiff);
        }
    } else {
        let hourDiff = adjustment.getUTCHours() - start.getUTCHours();
        let minDiff = adjustment.getMinutes() - start.getMinutes();

        if (hourDiff > 0) {
            result.setUTCHours(result.getUTCHours() + hourDiff);
        }
        if (minDiff > 0) {
            result.setMinutes(result.getMinutes() + minDiff);
        }
    }

    return result;
}

function testTimeAdjustment1() {
    let startTime = new Date();
    startTime.setUTCHours(14);
    startTime.setMinutes(30);    

    let endTime = new Date();
    endTime.setUTCHours(15);
    endTime.setMinutes(0);

    let newStartTime = new Date();
    newStartTime.setUTCHours(13);
    newStartTime.setMinutes(0);    

    let result = makeAdjustment(startTime, endTime, newStartTime)
    console.log(result);
}

function testTimeAdjustment2() {
    let startTime = new Date();
    startTime.setUTCHours(12);
    startTime.setMinutes(0);        

    let newStartTime = new Date();
    newStartTime.setUTCHours(13);
    newStartTime.setMinutes(15);

    let endTime = new Date();
    endTime.setUTCHours(13);
    endTime.setMinutes(0);

    let result = makeAdjustment(startTime, endTime, newStartTime)
    console.log(result);
}

function testTimeAdjustment() {
    testTimeAdjustment2();
}

function testDateFormatting() {
    let yourDate = new Date();
    let temp = yourDate.toISOString().split('T')[0];

    console.log(new Date(temp));
}

module.exports.testDateFormatting = testDateFormatting;
module.exports.testDateConversion = testDateConversion;
module.exports.testTimeAdjustment = testTimeAdjustment;
