var number=prompt("Enter Your age")

if(number<18){
    console.log(
        "Your not metured"
    )
}
else if(number==18){
    console.log("You are a young")
}
else if(number>18 && number<30){
    console.log(
        "You are a metured"
    )
}
else{
    console.log(
        "You are old"
    )
}