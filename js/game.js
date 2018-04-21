$(() => {

    $('.start').on('click', function () {
        this.parentElement.style.visibility = "hidden";
        this.parentElement.nextElementSibling.style.visibility = 'visible';

        let header = function(){
            let pass = $('#password').val();
            $('#inf').text("WPISZ WYRAZ Z " + pass.length + " LITER");
        }();
    });

    $('.check').on('click', function () {
        let newValue = $('#answer').val();
        let pass = $('#password').val();
        let valid = function(){
            let alfabet = "aąbcćdeęfghijklłmnńoóprsśtuvxyzżź";

        }();

        if (newValue.length > pass.length) {
            let tooLong = function(){
                $('#inf').text("ZBYT DUŻO LITER! PODAJ WYRAZ Z " + pass.length + " LITER");
                $('#answer').val('');
            }();
        } else if(newValue.length < pass.length) {
            let tooShort = function(){
                $('#inf').text("ZBYT MAŁO LITER! PODAJ WYRAZ Z " + pass.length + " LITER");
                $('#answer').val('');
            }();
        } else {console.log("ok");

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
            for (var i = 0; i < red; i++) {
                let q = `<div class="green"></div>`;
                array.push(q);
            }
            for (var i = 0; i < white; i++) {
                let q = `<div class="white"></div>`;
                array.push(q);
            }

            let arrayNew = array.join("");
            newWord.innerHTML = `<p class="word">${newValue.toUpperCase()}</p>
                                <div class="dots">${arrayNew}</div>`;

            wordsList.prepend(newWord);

            $('#answer').val('');
        }
        function isInArray(va, ar) {
            return ar.indexOf(va) > -1;
        }
    });
});

