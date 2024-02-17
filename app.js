// indexOf
// lastIndexOf

// var names = ["rehman",'kashif','rizwan','abdullah',"kashif"]
// var newArray = names.replace("rehman","Ali")
// console.log(newArray)



// var check = names.lastIndexOf("kashif")
// var check = names.indexOf("kashif",2)

// console.log(check)

// var str = "Rehman"

// var check = str.indexOf("R")

// console.log(check)


// var name1 = "Ali"
// var ch = name1.charAt(6)
// console.log(ch)

// var text = "Hello world hello world"

// var rp = text.replaceAll('world','Saylani')

// var rp = text.replace(/world/g,'Pakistan')

// console.log(rp)

// console.log(Math.random() * 4)

// var userInp = parseInt(prompt("Enter value"))
// document.write(typeof(userInp))

// var str = 34.72648723678
// console.log(str.toFixed(1))

// console.log(typeof(str.toString()))
// console.log(typeof(Number(str)))

// var days = ['sun','mon','tues','wed','thurs','fri','sat']
// var rightNow = new Date()

// console.log(days[rightNow.getDay()])

// console.log(rightNow.getDay())


// console.log(rightNow.toString().slice(16,24))
// document.write(rightNow.toString().slice(0,10))



// var date = new Date()
// console.log(date.getTime())

function timer (){
var ramDate = "11 March 2024"
var today = new Date()
var endDate = new Date(ramDate)
var calc = (endDate - today)/1000
console.log (calc)
var days = Math.floor(calc/ (60*60*24))
console.log (days)
document.getElementById("days").innerHTML = days
var hours = Math.floor(calc/3600)%24
document.getElementById("hours").innerHTML = hours
var mins = Math.floor(calc/60)%60
document.getElementById("mins").innerHTML = mins
var sec = Math.floor(calc%60)
document.getElementById("sec").innerHTML = sec
}

setInterval(() => {
  timer ()  
}, 1000);