var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 700;
var Radis = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime = new Date(2016,5,22,12,30,23);
console.log(endTime)
var curShowTimeSeconds = 0;


window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    curShowTimeSeconds = getCurrentShowTimeSeconds();



    render( context );

};

function getCurrentShowTimeSeconds(){
    var dataTime = new Date();
    var ret = endTime.getTime() - dataTime.getTime();
    ret = Math.round( ret/1000 );

    return ret >= 0 ? ret : 0;
}

function render( cxt ){




    var hours = parseInt(curShowTimeSeconds / 3600);
    var minutes = parseInt( (curShowTimeSeconds - hours * 3600) / 60) ;
    var seconds = curShowTimeSeconds % 60;

    console.log(seconds);


    renderDigit( MARGIN_LEFT , MARGIN_TOP , parseInt(hours/10), cxt);
    renderDigit( MARGIN_LEFT + 15 * ( Radis + 1 ), MARGIN_TOP, parseInt(hours%10), cxt);
    renderDigit( MARGIN_LEFT + 30 * ( Radis + 1 ), MARGIN_TOP, 10 , cxt);


    renderDigit( MARGIN_LEFT + 39 * ( Radis + 1), MARGIN_TOP, parseInt(minutes/10) , cxt);
    renderDigit( MARGIN_LEFT + 54 * ( Radis + 1), MARGIN_TOP, parseInt(minutes%10) , cxt);
    renderDigit( MARGIN_LEFT + 69 * ( Radis + 1), MARGIN_TOP, 10 , cxt);

    renderDigit( MARGIN_LEFT + 79 * ( Radis + 1), MARGIN_TOP, parseInt(seconds/10) , cxt);
    renderDigit( MARGIN_LEFT + 94 * ( Radis + 1), MARGIN_TOP, parseInt(seconds%10) , cxt);
    renderDigit( MARGIN_LEFT + 109 * ( Radis + 1), MARGIN_TOP, 10 , cxt);

}


function renderDigit( x , y, num , cxt){
    cxt.fillStyle = "rgb(0,102,153)";
    cxt.shadowColor = "#FF0000"

    for(var i = 0; i < digit[num].length; i++){
        for(var j = 0; j < digit[num][i].length; j++){

            if( digit[num][i][j] == 1 ){
                cxt.beginPath();
                cxt.arc( x + j * 2 * (Radis + 1) + (Radis + 1), y + i * 2 * (Radis + 1) + (Radis + 1), Radis, 0, 2 * Math.PI );
                cxt.closePath();

                cxt.fill();
            }
        }
    }
}