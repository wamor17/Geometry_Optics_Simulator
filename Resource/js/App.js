
var x_positions = [500, 499, 498, 497, 496, 495, 494, 493, 492, 491, 490 ,489 ,488 ,487 ,486 ,485 ,484 ,483 ,482 ,481 ,480 ,479 ,478 ,477 ,476 ,475 ,474 ,473 ,472 ,471 ,470 ,469 ,468 ,467 ,466 ,465 ,464 ,463 ,462 ,461 ,460 ,459 ,458 ,457 ,456 ,455 ,454 ,453 ,452 ,451 ,450 ,449 ,448 ,447 ,446 ,446 ,445 ,444 ,443 ,442 ,442 ,441 ,440 ,439 ,438 ,437 ,436 ,435 ,434 ,433 ,432 ,431 ,430 ,429 ,428 ,427 ,426 ,425 ,424 ,423 ,422 ,421 ,420 ,420 ,419 ,418 ,417 ,416 ,415 ,414 ,413 ,412 ,411 ,410 ,410 ,409 ,408 ,407 ,406 ,405, 404, 403, 402, 401, 400, 399, 398, 397, 396, 395, 394, 393, 392, 391, 390, 389, 388, 387, 386, 386, 385, 384, 383, 382, 381, 381, 380, 379, 378, 377, 376, 375, 374, 373, 372, 371, 370, 369, 369, 368, 367, 366, 366, 365, 364, 363, 362, 362, 361, 360, 359, 358, 358, 357, 357, 356, 355, 354, 353, 352, 352, 351, 351, 350, 349, 348, 347, 346, 345, 344, 343, 343, 342, 342, 341, 341, 340, 340, 339, 339, 338, 338, 337, 337, 336, 336, 335, 335, 334, 334, 333, 332, 331, 330, 329, 328, 328, 327, 327, 326, 326, 325, 324, 323, 323, 322, 322, 321, 321, 320, 319, 319, 318, 318, 317, 316, 316, 315, 315, 314, 314, 313, 313, 312, 311, 311, 310, 309, 309, 308, 307, 307, 306, 306, 305, 305, 304, 304, 303, 303, 302, 302, 301, 301, 300, 300, 299, 299, 298, 298, 297, 297, 296, 296, 295, 295, 294, 294, 293, 293, 292, 292, 291, 291, 291, 290, 290, 290, 289, 289, 288, 288, 288, 287, 287, 287, 286, 286, 286, 285, 285, 285, 284, 284, 284, 283, 283, 283, 282, 282, 282, 281, 281, 281, 281, 280, 280, 280, 280, 279, 279, 279, 279, 279, 278, 278, 278, 278, 278, 277, 277, 277, 277, 276, 276, 276, 276, 276, 276, 275, 275, 275, 275, 275, 275, 274, 274, 274, 274, 274, 274, 274, 273, 273, 273, 273, 273, 273, 273, 273, 273, 273, 273, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272 ];
var y_positions = [75, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 74, 74, 74, 74, 74, 74, 74, 75, 75, 75, 75, 75, 75, 76, 76, 76, 76, 76, 76, 77, 77, 77, 77, 78, 78, 78, 78, 78, 79, 79, 79, 79, 79, 80, 80, 80, 80, 81, 81, 81, 81, 82, 82, 82, 83, 83, 83, 84, 84, 84, 85, 85, 85, 86, 86, 86, 87, 87, 87, 88, 88, 88, 89, 89, 90, 90, 90, 91, 91, 91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 96, 97, 97, 98, 98, 99, 99, 100, 100, 101, 101, 102, 102, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108, 109, 109, 110, 111, 111, 112, 113, 113, 114, 114, 115, 115, 116, 116, 117, 118, 118, 119, 119, 120, 121, 121, 122, 122, 123, 123, 124, 125, 126, 126, 127, 127, 128, 128, 129, 130, 131, 132, 133, 134, 134, 135, 135, 136, 136, 137, 137, 138, 138, 139, 139, 140, 140, 141, 141, 142, 142, 143, 143, 144, 145, 146, 147, 148, 149, 150, 151, 151, 152, 152, 153, 154, 155, 156, 157, 157, 158, 158, 159, 160, 161, 162, 162, 163, 164, 165, 166, 166, 167, 168, 169, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 181, 182, 183, 184, 185, 186, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 242, 243, 244, 245, 246, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300]
var x_positions90 = [], y_positions90 = [];
var x_reflection = [], y_reflection = [];
var x_refraction = [], y_refraction = [];
var x_end = 502, y_end = 302;
var boolReflection, boolRefraction;

$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.ref-index1').text('1.00');
    $('.ref-index2').text('1.33');

    cont = 0;
    for(i=0; i<(x_positions.length+1)/4; i++){
        x_positions90.push( x_positions[cont] );
        y_positions90.push( y_positions[cont] );

        var val_x = 500 - x_positions[cont];
        x_reflection.push( 500 + val_x  );
        y_reflection.push( y_positions[cont]  );

        var val_xRef = 500 - x_positions[cont];
        var val_yRef = 300 - y_positions[cont];
        x_refraction.push( 500 + val_xRef  );
        y_refraction.push( 300 + val_yRef  );

        cont = cont + 4;
    }

    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);

    if( boolReflection && boolRefraction ){
        // Laser source
        DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
        // Reflection 
        DrawLine(x_reflection[degrees], y_reflection[degrees], x_end, y_end );
        // Refraction
        DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end );
    }else if( boolReflection ){
        // Laser source
        DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
        // Reflection 
        DrawLine(x_reflection[degrees], y_reflection[degrees], x_end, y_end );
    }else if( boolRefraction ){
        // Laser source
        DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
        // Refraction
        DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end );
    }else{
        // Laser source
        DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
    }

    var svg = document.getElementsByTagName('svg')[0];
    var square = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

    square.setAttributeNS(null, "x", 200 );
    square.setAttributeNS(null, "y", 200 );
    square.setAttributeNS(null, "width", 20 );
    square.setAttributeNS(null, "height", 30 );
//    square-setAttributeNS(null, "transform-origin", "center center");
    square.setAttributeNS(null, "transform", "rotate(10)");

    square.style.stroke = 'rgb(0, 255, 0)';
    square.style.strokeWidth = "3px";
    square.style.fill = 'rgb(0, 255, 0)';

    svg.appendChild(square);
//    <rect x="50" y="20" width="150" height="150" style="fill:blue;stroke:pink;stroke-width:5;opacity:0.5" />
});

$('#checkboxReflection').on('change', function(){
    // console.log( 'Reflection', $('#checkboxReflection').prop('checked') );
    boolReflection = $('#checkboxReflection').prop('checked');
    var degrees = parseInt($('#txtLaserPosition').val().split('°')[0]);

    if( boolReflection )
        DrawLine(x_reflection[degrees], y_reflection[degrees], x_end, y_end );
});

$('#checkboxRefraction').on('change', function(){
    boolRefraction = $('#checkboxRefraction').prop('checked');
    var degrees = parseInt($('#txtLaserPosition').val().split('°')[0]);

    if( boolRefraction )
        DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end );
});

$('#btnDrawCircle').on('click', function(){
    var svg = document.getElementsByTagName('svg')[0];
    var y = svg.height.animVal.value;
    var x = svg.width.animVal.value;
    var x1 = 0, y1 = 0, r = 228, r_i, cont = 0;
    var x_positions = [];
    var y_positions = [];

    for(i=0; i<=(y/2); i++){
        for(j=(x/2); j>=(x/4); j--){

            p1 = i - (y/2);
            p2 = j - (x/2);
            r_i = Math.round( Math.sqrt( Math.pow(p1, 2) + Math.pow(p2, 2) ) );

            if( r_i == r ){
                x_positions.push(j);
                y_positions.push(i);
                DrawLine(j, i, j+3, i+3)
            }

        }
    }

    console.log(x_positions, y_positions);

});

function DrawLine(X_i, Y_i, X_o, Y_o){
    var svg = document.getElementsByTagName('svg')[0];
    var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');

    line.setAttributeNS(null, "x1", X_i );
    line.setAttributeNS(null, "y1", Y_i );
    line.setAttributeNS(null, "x2", X_o );
    line.setAttributeNS(null, "y2", Y_o );

    line.style.stroke = 'rgb(0, 0, 255)';
    line.style.strokeWidth = "3px";
    line.style.zIndex = "10";

    svg.appendChild(line);
}

$('#btnMoreDegrees').on('click', function(){
    // Borramos la linea anteriormente dibujada
    $('#svg_paint').empty();

    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);

    if( degrees < 90 ){
        txtLaserPosition.val(degrees+1+'°');

        if( boolReflection && boolRefraction ){
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
            // Reflection 
            DrawLine(x_reflection[degrees], y_reflection[degrees], x_end, y_end );
            // Refraction
            DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end );
        }else if( boolReflection ){
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
            // Reflection 
            DrawLine(x_reflection[degrees], y_reflection[degrees], x_end, y_end );
        }else if( boolRefraction ){
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
            // Refraction
            DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end );
        }else{
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
        }

    }else
        M.toast({html: 'Máximo 90 grados', classes: 'rounded'});
});

$('#btnLessDegrees').on('click', function(){
    // Borramos la linea anteriormente dibujada
    $('#svg_paint').empty();

    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);

    if( degrees > 0 ){
        txtLaserPosition.val(degrees-1+'°');

        if( boolReflection && boolRefraction ){
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
            // Reflection 
            DrawLine(x_reflection[degrees], y_reflection[degrees], x_end, y_end );
            // Refraction
            DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end );
        }else if( boolReflection ){
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
            // Reflection 
            DrawLine(x_reflection[degrees], y_reflection[degrees], x_end, y_end );
        }else if( boolRefraction ){
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
            // Refraction
            DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end );
        }else{
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
        }

//        DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end );
//        DrawLine(x_reflection[degrees-1], y_reflection[degrees-1], x_end, y_end );
    }else
        M.toast({html: 'Mínimo 0 grados', classes: 'rounded'})
});

$('#txtLaserPosition').change(function(){
    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);

    if( degrees > 0 ){
        txtLaserPosition.val(degrees-1+'°');

        if( boolReflection && boolRefraction ){
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
            // Reflection 
            DrawLine(x_reflection[degrees], y_reflection[degrees], x_end, y_end );
            // Refraction
            DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end );
        }else if( boolReflection ){
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
            // Reflection 
            DrawLine(x_reflection[degrees], y_reflection[degrees], x_end, y_end );
        }else if( boolRefraction ){
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
            // Refraction
            DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end );
        }else{
            // Laser source
            DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end);
        }

//        DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end );
//        DrawLine(x_reflection[degrees-1], y_reflection[degrees-1], x_end, y_end );
    }else
        M.toast({html: 'Mínimo 0 grados', classes: 'rounded'})
});

$('#select-refraction-index').change(function(){
    var type_material =  $('#select-refraction-index').val();

    if( type_material == 1 ){
        // Aire   ->  1.00
        $('.ref-index2').text('1.00');
    }else if( type_material == 2 ){
        // Agua   ->  1.33
        $('.ref-index2').text('1.33');
    }else{
        // Vídrio ->  1.5
        $('.ref-index2').text('1.50');
    }

});

/*
var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');

line.setAttributeNS(null, "x1", j);
line.setAttributeNS(null, "y1", i);
line.setAttributeNS(null, "x2", j+3);
line.setAttributeNS(null, "y2", i+3);

line.style.stroke = 'rgb(0, 0, 255)';
line.style.strokeWidth = "3px";

svg.appendChild(line);
*/
