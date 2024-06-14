let sections = document.querySelectorAll('section');
let header = document.querySelector('header')
let a = document.querySelectorAll('nav a')
let button = document.querySelector('.scroll-change');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    })

    header.classList.toggle("sticky", window.scrollY > 0)

    a.forEach(as => {
        if (window.scrollY > 0) {
            as.classList.replace('btn-outline-light', 'btn-outline-dark');
        } else {
            as.classList.replace('btn-outline-dark', 'btn-outline-light');
        }
    })
}
function abrirLinkedin() {
    window.open("https://www.linkedin.com/in/diego-alonso-liza-cruzalegui-41114b23a/", "_blank");
}
function abrirWhatsapp() {
    window.open("https://api.whatsapp.com/send/?phone=51932765697", "_blank");
}
function abrirGmail() {
    window.location.href = "mailto:diego03liza@gmail.com";
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})