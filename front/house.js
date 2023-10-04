async function registerHouse() {
    let address = document.getElementById('address').value;
    let amount = document.getElementById('amount').value;
    let cityId = document.getElementById('cityId').value;

    let token = localStorage.getItem('token');

    let response = await fetch('http://localhost:3000/house', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({
            address,
            amount,
            cityId
        })
    });

    alert(await response.text());
}

async function getCities() {
    let selectCity = document.getElementById('cityId');

    let response = await fetch('http://localhost:3000/city', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    });

    let cities = await response.json();

    for(let city of cities) {
        let option = document.createElement('option');

        option.value = city.id;
        option.innerHTML = city.name;

        selectCity.appendChild(option);
    }
}

document.addEventListener('DOMContentLoaded', getCities());



