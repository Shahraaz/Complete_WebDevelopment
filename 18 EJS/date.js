// console.log(module);

module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate() {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
}

function getDay() {
    var today = new Date();
    var options = {
        weekday: "long",
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
}