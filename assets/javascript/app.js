var number = 30;
var intervalId;

function run() {
    intervalId = setInterval(decrement, 1000);
}

$(window).on("load", hide);

$('#start').on('click', function(){
    $(this).hide();
    show();
});

function decrement() {
    //  Decrease number by one.
    number--;
     
     //  Show the number in the #show-number tag.
     $("#timer").html(" " + number + " seconds");
    
    //  Once number hits one...
    if (number === 1) {
        $("#timer").html(" " + number + " second");
    }
      //  Once number hits zero...
    else if (number === 0) {
        //  ...run the stop function.
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
}
    //  Execute the run function.
run();

//This function will hide some contents
function hide(){
    $('.form-group').hide();
    $('#time').hide();
    $('#done').hide();
}

//This function will hide some contents
function show() {
    $('.form-group').show();
    $('#time').show();
    $('#done').show();
}