$(() => {

    $('.timer-btn').on('click', function () {
        this.parentElement.nextElementSibling.style.display = 'block';
    })
    let valMin = 0;
    $('.up-min').on('click', function () {
       valMin = valMin + 1;
       $('.min-value').text(valMin);
    });

    $('.down-min').on('click', function () {
        if (valMin > 0) {
            valMin = valMin - 1;
            $('.min-value').text(valMin);
        } else {
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

     if (valSec === 0 && valMin > 0) {
            valSec = 55;
            valMin = valMin - 1;
            $('.min-value').text(valMin);
            $('.sec-value').text(valSec);
        } else if (valSec === 0 && valMin === 0) {
            valSec = 0;
            $('.sec-value').text(valSec);
        } else {
            valSec = valSec - 5;
            $('.sec-value').text(valSec);
        }
    });
//////////////////////// end timer adjust ////////////////////////////////
const game = function() {
    $('.check').on('click', function () {
        let pass = $('#password').val().toUpperCase();
        $('#inf').text("WPISZ WYRAZ Z " + pass.length + " LITER");
        let newValue = $('#answer').val().toUpperCase();

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
            let green = 0;
            let white = 0;
            for (let i = 0; i < pass.length; i++) {
                if (pass.indexOf(newValue[i]) > -1) {
                    if (pass[i] == newValue[i]) {
                        green = green + 1;
                    }
                }
            }
            let uniqueLetters = [];
            $.each([...newValue],function (i, el) {
                if ($.inArray(el, uniqueLetters) === -1) uniqueLetters.push(el);
                return uniqueLetters;
            });
            let number = 0;

            function countInArray(pass, value) {
                let ok = [...pass].reduce((n, x) => n + (x === value), 0);
                if (ok > 0) {
                    number = number + ok;
                }
                white = number - green;
            }

            for (var i = 0; i < uniqueLetters.length; i++) {
                countInArray(pass, uniqueLetters[i]);
            }

            let newWord = document.createElement("li");
            let array = [];
            let black = pass.length - (green + white);
            if (black == pass.length) {
                newWord.innerHTML = `<div class="word">${newValue.toUpperCase()}</div>
                                    <div class="dots"><div class="black">-------------------</div></div>`;

            } else {
                for (var i = 0; i < green; i++) {
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
            let attempt = $('.answers').find('li');

            if (green == pass.length) {
                this.nextElementSibling.style.display = "flex";
                console.log(this.nextElementSibling.firstElementChild)

                this.nextElementSibling.firstElementChild.innerHTML = `GRATULACJE!!!<br> ODGADŁEŚ HASŁO W ${attempt.length} PRÓBIE`;

            }

            $('#answer').val('');

        }
    });
}
    const timeGame = function () {
        let count = valMin * 60 + valSec;
        let counter = setInterval(timer, 1000);


        function timer() {
            count = count - 1;
            if (count === 0) {
                clearInterval(counter);
                document.querySelector('.win').style.display = "flex";
                document.querySelector('.win').firstElementChild.innerHTML = `CZAS MINĄŁ!!! <br> SPRÓBUJ JESZCZE RAZ`;

            }else if (count > 0) {
                game();
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

        if(valMin==0 && valSec == 0){
            this.parentElement.nextElementSibling.children[3].style.display = "none";
        }else{
            this.parentElement.nextElementSibling.children[3].style.display = "block";
        }
        let pass = $('#password').val().toUpperCase();
        console.log("hasło:" + pass);
        $('#inf').text("WPISZ WYRAZ Z " + pass.length + " LITER");
        if (pass.length !== 0) {

            this.parentElement.style.display = "none";
            this.parentElement.nextElementSibling.style.display = 'flex';

            let count = valMin * 60 + valSec;
            if (count > 0) {
                timeGame();
            }
            else {
                game();

            };
        }
    });

});

