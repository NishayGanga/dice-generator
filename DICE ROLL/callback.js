document.getElementById("btn").addEventListener("click", ()=>{
    var input = document.getElementById("num").value;
    var Random_Number = Math.floor(Math.random() * input) + 1;
    document.getElementById("output").innerHTML = "Your random dice number is : " + Random_Number;
})