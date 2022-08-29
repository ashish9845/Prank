let time=prompt("Enter the current time in 24 hour format(Not in AM PM Format)")
if(time<12){
    alert(`It's ${time}. So Good Morning`)
}
else if(time>=12 && time<=24){
    alert(`It's ${time}. So Good Evening`)
}
else{
    alert(`It's ${time}. Please enter correct time`)
}