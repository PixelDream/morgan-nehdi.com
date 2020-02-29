window.onload = async function() {
    let data = await fetch("assets/data.json").then(resp => resp.json());

    let slideIndex = 0;
    let birthday = +new Date('2001-03-05');

    let years = document.getElementById("years");
    let modal = document.getElementById("Modal");
    let btn = document.getElementsByClassName("btn");
    let span = document.getElementById("modal-span");
    let h3 = document.getElementById("modal-h3");
    let p = document.getElementById("modal-p");
    let li = document.getElementById("modal-li");
    let tech = document.getElementById("modal-tech");
    let dot = document.getElementById("modal-dot");
    let dots = document.getElementsByClassName("slide-dot");


    years.innerText = ~~((Date.now() - birthday) / (31557600000));;

    Array.from(btn).forEach(el => {
        el.onclick = function() {
            set(el.dataset.btn);
            modal.style.display = "block";
            document.body.style = "overflow: hidden;";
        };
    });

    span.onclick = function() {
        modal.style.display = "none";
        document.body.style = undefined;
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style = undefined;
        }
    };

    function set(btn) {
        let dataModal = data.filter(el => el.title == btn)[0];
        let a = "<ul>",
            b = "</ul>",
            m = "",
            t = ""
            d = ""
            i = 0;


        h3.innerText = dataModal.title;
        p.innerText = dataModal.desc;

        for (i = 0; i < dataModal.images.length; i++) {
            m += '<li class="mySlides fade"><img src="img/portfolio/' + dataModal.images[i] + '" alt="' + dataModal.title + '" style="width:100%"><div class="numbertext">' + (i + 1) + ' / ' + dataModal.images.length + '</div></li>';
            d += '<span class="slide-dot" data-slide="' + i + '"></span>';
        }

        for (i = 0; i < dataModal.tech.length; i++) {
            t += '<li class="tech">' + dataModal.tech[i] + '</li>';
        }

        li.innerHTML = m;
        tech.innerHTML = t;
        dot.innerHTML = d;

        slideIndex = 0;
        dots = document.getElementsByClassName("slide-dot");


        Array.from(dots).forEach(el => {
            el.onclick = function() {
                showSlides(el.dataset.slide);
            };
        });
        showSlides(slideIndex);
    }

    let upSlides = document.getElementById("upSlide");
    let downSlides = document.getElementById("downSlide");

    downSlides.onclick = function(event) {
        showSlides((slideIndex -= 1));
    };
    upSlides.onclick = function(event) {
        showSlides((slideIndex += 1));
    };

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");

        if (n > (slides.length - 1) || n < 0) {
            slideIndex = 0;
        } else {
            slideIndex = n;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex].style.display = "block";
        dots[slideIndex].className += " active";
    }
};