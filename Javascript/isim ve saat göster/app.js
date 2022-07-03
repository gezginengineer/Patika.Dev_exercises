const ad = prompt('Lutfen adinizi giriniz ? ')

document.getElementById("myName").textContent = ad

let timeEl = document.getElementById("myClock")

let showTime = parametre => {    
    let dateString = new Date().toLocaleString("tr-TR", {timeZone: "Turkey"});
    let formattedString = dateString.replace(", ", " - ");
    timeEl.innerHTML = formattedString;  
}
setInterval(showTime, 1000);
