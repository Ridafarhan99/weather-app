
var APIURL = 'https://www.metaweather.com/api/location/search/?query='; //API link
var temp = document.querySelector('.temp');
var city = document.querySelector('.city');
const mycity = document.getElementById("search"); //getting data from html




const myform = document.getElementById("frm"); 
myform.addEventListener("submit", (e) => {
    e.preventDefault();

    const cityname = document.getElementById("search").value;
    const url = APIURL+cityname;
    // console.log(url);
    
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const name = data[0].title;
        const id = data[0].woeid;
        console.log(name);
        document.getElementById("city").innerHTML=name;
    
        // console.log(id);

        fetch('https://www.metaweather.com/api/location/'+id+'/')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            const temp = data;
            const temperature = temp.consolidated_weather[0].the_temp;
            const cel=temperature.toFixed(2);
            console.log(cel)
            document.getElementById("temp").innerHTML=cel+'° C';

        })
        .catch((err)=>{
            alert("city not found!");
        });
    })
    .catch((err)=>{
        alert("city not found");
    });
});




