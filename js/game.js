$(() => {

    $('.timer-btn').on('click', function(){

        this.parentElement.nextElementSibling.style.display = 'block';
        })

    let valMin = 0;
$('.up-min').on('click', function () {
    console.log('qwerty');
    valMin = valMin + 1;
    $('.min-value').text(valMin);
});

$('.down-min').on('click', function () {
    console.log("ertyui");
    if(valMin>0) {
        valMin = valMin - 1;
        $('.min-value').text(valMin);
    }else{
        $('.min-value').text(valMin);
    }
});
let valSec = 0;
$('.up-sec').on('click', function () {
    valSec = valSec + 5;

    if (valSec === 60) {
        valSec = 0;
        valMin = valMin + 1;
    }
    $('.min-value').text(valMin);
    $('.sec-value').text(valSec);
});

$('.down-sec').on('click', function () {


    if (valSec === 0 && valMin>0) {
        valSec = 55;
        valMin = valMin - 1;
        $('.min-value').text(valMin);
        $('.sec-value').text(valSec);
    }else if(valSec===0 && valMin===0){
        valSec=0;
        $('.sec-value').text(valSec);
    }else{
        valSec=valSec - 5;
        $('.sec-value').text(valSec);
    }
});


const timer = function(){
    let count = valMin * 60 + valSec;
    let counter = setInterval(timer, 1000);
    function timer() {
        count = count - 1;
        if (count === -1) {
            clearInterval(counter);
            return;
        }
        if (count === 0) {
            alert("asdfghjkl");
        }
        let seconds = count % 60;
        let minutes = Math.floor(count / 60);

        minutes %= 60;

        let adsec = ("0" + seconds).slice(-2);
        let admin = ("0" + minutes).slice(-2);

        $(".inner-time").text(admin + " : " + adsec);

    }
};
    $('.start').on('click', function () {
        timer();
        this.parentElement.style.display = "none";
        console.log( this.parentElement.nextElementSibling);
        this.parentElement.nextElementSibling.style.visibility = 'visible';

        let header = function () {
            let pass = $('#password').val();
            $('#inf').text("WPISZ WYRAZ Z " + pass.length + " LITER");
            if (pass.length > 6) {
                $('.word').style.paddingRight = "0";
            }
        }();
    });


    $('.check').on('click', function () {

        let pass = $('#password').val();
        let newValue = $('#answer').val();

        if (newValue.length > pass.length) {
            let tooLong = function () {
                $('#inf').text("ZBYT DUŻO LITER! PODAJ WYRAZ Z " + pass.length + " LITER");
                $('#answer').val('');
            }();
        } else if (newValue.length < pass.length) {
            let tooShort = function () {
                $('#inf').text("ZBYT MAŁO LITER! PODAJ WYRAZ Z " + pass.length + " LITER");
                $('#answer').val('');
            }();
        } else {
            const wordsList = $('.answers');
            let red = 0;
            let white = 0;
            for (let i = 0; i < pass.length; i++) {
                if (pass.indexOf(newValue[i]) > -1) {
                    if (pass[i] == newValue[i]) {
                        red = red + 1;
                    }
                }
            }
            let uniqueLetters = [];
            $.each([...newValue], function (i, el) {
                if ($.inArray(el, uniqueLetters) === -1) uniqueLetters.push(el);
                return uniqueLetters;
            });
            let counter = 0;

            function countInArray(pass, value) {
                let ok = [...pass].reduce((n, x) => n + (x === value), 0);
                if (ok > 0) {
                    counter = counter + ok;
                }
                white = counter - red;
            }

            for (var i = 0; i < uniqueLetters.length; i++) {
                countInArray(pass, uniqueLetters[i]);
            }

            let newWord = document.createElement("li");
            let array = [];
            let black = pass.length - (red + white);
            if (black == pass.length) {
                newWord.innerHTML = `<div class="dots"><div class="word">${newValue.toUpperCase()}</div></div>
                                <div class="dots"><div class="black">-------------------</div></div>`;

            } else {
                for (var i = 0; i < red; i++) {
                    let q = `<div class="green"></div>`;
                    array.push(q);
                }
                for (var i = 0; i < white; i++) {
                    let q = `<div class="white"></div>`;
                    array.push(q);
                }

                let arrayNew = array.join("");
                newWord.innerHTML = `<div class="word">${newValue.toUpperCase()}</div>
                                <div class="dots">${arrayNew}</div>`;
            }
            wordsList.prepend(newWord);
            $('#answer').val('');
        }
    });
});

