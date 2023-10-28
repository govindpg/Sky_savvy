const search=async()=>{
       city=input.value 
       response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=860d68d2f28ddcfee345a96d05c2640d&units=metric`)
      console.log(response.status);
       if(response.status>=400){
              alert("Enter correct city");
       }else{
             wheather= await response.json()
       console.log(wheather);

       const status=wheather.weather[0].main;
       console.log(status);

       // BG IMAGE
       if(status=="Clouds" || status=="Haze" || status=='Mist'){
              document.getElementById("im").src='./pics/cloud.png'
              document.getElementById('bg').style.backgroundImage = "url('./pic/clouds.jpg')";

       }else if(status=='Clear'){
              document.getElementById("im").src='./pics/clear.png'
              document.getElementById('bg').style.backgroundImage = "url('./pic/clear.jpg')";

       }else if(status=="Rain"){
              document.getElementById("im").src='./pics/rain.png'
              document.getElementById('bg').style.backgroundImage = "url('./pic/rain1.jpg')";


       }
       const ncity=wheather.name;
       console.log(ncity);

       const temp=wheather.main.temp
       console.log(temp);

       const pressure=wheather.main.pressure
       console.log(pressure);

       const humidity=wheather.main.humidity
       console.log(humidity);

       const windspeed=wheather.wind.speed
       console.log(windspeed);

// aI SUUGESTIONS
if(temp<=10 || status=="Rain"){
      
       document.querySelector('.ai-suggestion').innerHTML=`<ul><li> warm clothes 🧶</li></ul> in this Temperture`
       
}else if((temp>=20 && temp<30) &&  status=="Clouds"){
      
       document.querySelector('.ai-suggestion').innerHTML=`<ul> <li>light clothes 👕</li></ul> in this Temperture`
       
}else if(temp>=30 || status=="Clear"){
      
       document.querySelector('.ai-suggestion').innerHTML=`<ul><li> Use Sunglass 🕶</li> <li>light clothes 👕</li><li>Drink water 🥛</li></ul> in this Temperture`
       
}


// city timing
if(ncity=="Leh"){
       document.querySelector('.ai2').innerHTML=`➡️ Best time to visit leh is between Jan-Apr`

}else if(ncity=="Agra"){
       document.querySelector('.ai2').innerHTML=`➡️ Best time to visit Agra is between Dec-May`

}else if(ncity=="Shimla"){
       document.querySelector('.ai2').innerHTML=`➡️ Best time to visit shimla is between Nov-May`

}else if(ncity=="Kochi"){
       document.querySelector('.ai2').innerHTML=`➡️ Best time to visit kochi is between Oct-Feb`

}
else{
       document.querySelector('.ai2').innerHTML=``
  
}


       document.querySelector(".namee").innerHTML=ncity

       document.querySelector(".tem").innerHTML=temp+'°C'
       
       document.querySelector(".sta").innerHTML=status

       document.querySelector(".pressure ").innerHTML=pressure +'PA'

       document.querySelector(".humidity ").innerHTML=humidity +'%'
       document.querySelector(".wind ").innerHTML=windspeed +'KMPH'
   
       }

     document.getElementById('oute').style.display='block';


}

function clock(){

const time=new Date()
  day=''
 
if(time.getDay()==0){
       day="Sunday"
}else if(time.getDay()==1)
{
       day="Monday"
}else if(time.getDay()==2)
{
       day="Tuesday"
}
else if(time.getDay()==3)
{
       day="Wednesday"
}else if(time.getDay()==4)
{
       day="Thursday"
}else if(time.getDay()==5)
{
       day="Friday"
}else if(time.getDay()==6)
{
       day="Saturday"
}


let hour =time.getHours()
let min=time.getMinutes()
let sec=time.getSeconds()

tim.innerHTML=`${day},${hour}:${min}:${sec}`
setTimeout(()=>{clock(),1000})
}
clock();

