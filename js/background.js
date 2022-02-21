// const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// bgImage.src = `img/${chosenImage}`;

const bgImage = document.querySelector("img");

const clientID = "kKF-JLSWQ6V8_I6343JL7ngZJmELfUfHOOXf5CfR718";


const endpoint = `https://api.unsplash.com/photos/?client_id=${clientID}`;
console.log(endpoint);

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        bgImage.src = data[0].urls.regular;
    })

