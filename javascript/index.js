fetch("https://smartluggagebackend.herokuapp.com/api/v1/trip").then((response) => response.json()).then((TripData) => {
    // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
    // console.log("List of items in the trip", TripData);
    //setTripData(TripData);
    // calculateLastTripId();
});


fetch("https://smartluggagebackend.herokuapp.com/displayUsers").then((response) => response.json()).then((TripData) => {
    // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
    // console.log("List of items in the trip", TripData);
    //setTripData(TripData);
    // calculateLastTripId();
});




function typeWriter(text, elementId, delay) {
    let i = 0;
    const element = document.getElementById(elementId);
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.remove('hidden');
                typeWriter("Hello World !", "typewriter", 300);
                observer.unobserve(element);
            }
        });
    });

    const target = document.getElementById('typewriter');
    observer.observe(target);
});