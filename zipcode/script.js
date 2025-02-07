const getCity = (event) => {
    console.log(event.target.value);
    fetch(`http://api.zippopotam.us/fr/${event.target.value}`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        displayCity(data);
        
    });
}

const zp = document.getElementById('zipcode');
zp.addEventListener('change', getCity);

const displayCity = (data) => {
    const city = document.getElementById('city');

    for (let i = 0; i < data.places.length; i++) {
        const options = document.createElement('option');
        options.text = data.places[i]['place name']; 
        city.appendChild(options);
    }
     

}