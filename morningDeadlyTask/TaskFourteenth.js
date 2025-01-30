const getTimeNow = () => {
    let currentDate = new Date();
    let toString = "current date: " + currentDate.getDay() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear() + "\n";
    toString += "time: " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return toString;
}

console.log(getTimeNow());
