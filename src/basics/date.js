// Create 
// Date()
// Date(milliseconds) >> w.r.t Dec 31 1969 16:00:00 GMT
// Date(dateString) >> yyyy/mm/dd format
// Date(year, month, day, hours, minutes, seconds, milliseconds)

var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

var date = new Date();
console.log(date)

var mDate = new Date(0)
console.log(mDate)

var strDate = new Date('2022/12/27 12:00:00')
console.log(strDate)

console.log(strDate.toJSON())

console.log("getDate" , strDate.getDate());
console.log("getMonth", months[strDate.getMonth()])
console.log("getYear", strDate.getFullYear())