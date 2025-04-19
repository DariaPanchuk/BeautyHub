document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#datetime", {
        enableTime: true, 
        dateFormat: "Y-m-d H:i", 
        minDate: "today", 
        time_24hr: true 
    });
});

const modal = document.getElementById("myModal");
const btns = document.querySelectorAll(".openModal"); 
const span = document.getElementById("closeModal");

btns.forEach(btn => {
    btn.onclick = function() {
        modal.style.display = "block";
        document.body.classList.add("no-scroll");
    }
});

span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}