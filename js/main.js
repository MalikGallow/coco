$('.carousel').carousel();


// Welcome
    function name(){
        var input_value = document.getElementById('data').value;
        if (user !== null){
            document.getElementById("welcome").innerHTML = "Welcome " + input_value;
        }

        else {
            document.getElementById("welcome").innerHTML = "Welcome Guest";
        }
    }