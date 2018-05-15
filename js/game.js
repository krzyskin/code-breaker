$(() => {

    $('.timer-btn').on('click', function () {
        this.parentElement.nextElementSibling.style.display = 'block';
    });
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

    const game = function () {
        $('.check').on('click', function () {

            let pass = $('#password').val().toUpperCase();
            $('#inf').text("ENTER A WORD CONSISTING OF " + pass.length + " LETTERS");
            let newValue = $('#answer').val().toUpperCase();

            if (newValue.length > pass.length) {
                let tooLong = function () {
                    $('#inf').text("TO MANY LETTERS! ENTER A WORD CONSISTING OF  " + pass.length + " LETTERS");
                    $('#answer').val('');
                }();
            } else if (newValue.length < pass.length) {
                let tooShort = function () {
                    $('#inf').text("NOT ENOUGH LETTERS! ENTER A WORD CONSISTING OF  " + pass.length + " LETTERS");
                    $('#answer').val('');
                }();
            } else {
                const wordsList = $('.answers');
                let green = 0;
                let white = 0;

                function countInArray(array, value) {
                    let valNum = array.reduce((n, x) => n + (x === value), 0);
                    return valNum;
                }
                let  arr= [];
                for( let i=0;i<pass.length;i++){
                    for( let j=0;j<newValue.length;j++) {
                        if(pass[i] == newValue[j]){
                            arr.push(pass[i]);
                            if (i==j) {
                                green = green + 1;

                            }
                        }
                    }
                }
                let uniq = [...new Set(arr)];

                for(let i=0;i<uniq.length;i++){
                    let passUniq = countInArray([...pass],uniq[i]);
                    let newValueUniq = countInArray([...newValue],uniq[i]);
                    let uniqNumber = Math.min(passUniq,newValueUniq);

                    white = white + uniqNumber;
                }
                white=white-green;

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

                    this.nextElementSibling.firstElementChild.innerHTML = `CONGRATULATIONS!!!<br> YOU GUESSED THE PASSWORD<br> IN ${attempt.length} ATTEMPT!!!`;

                }

                $('#answer').val('');

            }
        });
    };
    const timeGame = function () {
        let count = valMin * 60 + valSec;
        let counter = setInterval(timer, 1000);


        function timer() {
            count = count - 1;
            if (count === 0) {
                clearInterval(counter);
                document.querySelector('.win').style.display = "flex";
                document.querySelector('.win').firstElementChild.innerHTML = `TIME IS UP!!! <br> TRY ONCE AGAIN!`;

            } else if (count > 0) {
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

        let pass = $('#password').val().toUpperCase();

        if (pass.length !== 0) {
            if (valMin == 0 && valSec == 0) {
                this.parentElement.parentElement.nextElementSibling.children[2].style.display = "none";
            } else {
                this.parentElement.parentElement.nextElementSibling.children[2].style.display = "block";
            }


            $('#inf').text("WPISZ WYRAZ Z " + pass.length + " LITER");
            this.parentElement.style.display = "none";
            this.parentElement.parentElement.nextElementSibling.style.display = "flex";
            this.parentElement.nextElementSibling.style.display = "block";


            let count = valMin * 60 + valSec;
            if (count > 0) {
                timeGame();
            }
            else {
                game();

            }
            ;
        }
    });


});


