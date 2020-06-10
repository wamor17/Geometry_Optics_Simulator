
var x_positions = [500, 499, 498, 497, 496, 495, 494, 493, 492, 491, 490 ,489 ,488 ,487 ,486 ,485 ,484 ,483 ,482 ,481 ,480 ,479 ,478 ,477 ,476 ,475 ,474 ,473 ,472 ,471 ,470 ,469 ,468 ,467 ,466 ,465 ,464 ,463 ,462 ,461 ,460 ,459 ,458 ,457 ,456 ,455 ,454 ,453 ,452 ,451 ,450 ,449 ,448 ,447 ,446 ,446 ,445 ,444 ,443 ,442 ,442 ,441 ,440 ,439 ,438 ,437 ,436 ,435 ,434 ,433 ,432 ,431 ,430 ,429 ,428 ,427 ,426 ,425 ,424 ,423, 422 ,421 ,420 ,420 ,419 ,418 ,417 ,416 ,415 ,414 ,413 ,412 ,411 ,410 ,410 ,409 ,408 ,407 ,406 ,405, 404, 403, 402, 401, 400, 399, 398, 397, 396, 395, 394, 393, 392, 391, 390, 389, 388, 387, 386, 386, 385, 384, 383, 382, 381, 381, 380, 379, 378, 377, 376, 375, 374, 373, 372, 371, 370, 369, 369, 368, 367, 366, 366, 365, 364, 363, 362, 362, 361, 360, 359, 358, 358, 357, 357, 356, 355, 354, 353, 352, 352, 351, 351, 350, 349, 348, 347, 346, 345, 344, 343, 343, 342, 342, 341, 341, 340, 340, 339, 339, 338, 338, 337, 337, 336, 336, 335, 335, 334, 334, 333, 332, 331, 330, 329, 328, 328, 327, 327, 326, 326, 325, 324, 323, 323, 322, 322, 321, 321, 320, 319, 319, 318, 318, 317, 316, 316, 315, 315, 314, 314, 313, 313, 312, 311, 311, 310, 309, 309, 308, 307, 307, 306, 306, 305, 305, 304, 304, 303, 303, 302, 302, 301, 301, 300, 300, 299, 299, 298, 298, 297, 297, 296, 296, 295, 295, 294, 294, 293, 293, 292, 292, 291, 291, 291, 290, 290, 290, 289, 289, 288, 288, 288, 287, 287, 287, 286, 286, 286, 285, 285, 285, 284, 284, 284, 283, 283, 283, 282, 282, 282, 281, 281, 281, 281, 280, 280, 280, 280, 279, 279, 279, 279, 279, 278, 278, 278, 278, 278, 277, 277, 277, 277, 276, 276, 276, 276, 276, 276, 275, 275, 275, 275, 275, 275, 274, 274, 274, 274, 274, 274, 274, 273, 273, 273, 273, 273, 273, 273, 273, 273, 273, 273, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 271, 271 ];
var y_positions = [75, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 74, 74, 74, 74, 74, 74, 74, 75, 75, 75, 75, 75, 75, 76, 76, 76, 76, 76, 76, 77, 77, 77, 77, 78, 78, 78, 78, 78, 79, 79, 79, 79, 79, 80, 80, 80, 80, 81, 81, 81, 81, 82, 82, 82, 83, 83, 83, 84, 84, 84, 85, 85, 85, 86, 86, 86, 87, 87, 87, 88, 88, 88, 89, 89, 90, 90, 90, 91, 91, 91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 96, 97, 97, 98, 98, 99, 99, 100, 100, 101, 101, 102, 102, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108, 109, 109, 110, 111, 111, 112, 113, 113, 114, 114, 115, 115, 116, 116, 117, 118, 118, 119, 119, 120, 121, 121, 122, 122, 123, 123, 124, 125, 126, 126, 127, 127, 128, 128, 129, 130, 131, 132, 133, 134, 134, 135, 135, 136, 136, 137, 137, 138, 138, 139, 139, 140, 140, 141, 141, 142, 142, 143, 143, 144, 145, 146, 147, 148, 149, 150, 151, 151, 152, 152, 153, 154, 155, 156, 157, 157, 158, 158, 159, 160, 161, 162, 162, 163, 164, 165, 166, 166, 167, 168, 169, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 181, 182, 183, 184, 185, 186, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 242, 243, 244, 245, 246, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 300, 300]
//                   0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20   21   22   23   24   25   26   27   28   29   30   31   32   33   34   35   36   37   38   39   40   41   42   43   44   45   46   47   48   49   50   51   52   53   54   55   56   57   58   59   60   61   62   63   64   65   66   67   68   69   70   71   72   73   74   75   76   77   78   79   80   81   82   83   84   85   86   87   88   89   90   91
var x_reflection = [507, 513, 515, 517, 515, 522, 528, 532, 538, 542, 548, 556, 559, 564, 570, 575, 581, 586, 592, 598, 603, 609, 615, 621, 628, 633, 636, 645, 652, 659, 666, 673, 679, 686, 693, 700, 708, 716, 724, 732, 740, 752, 760, 768, 776, 779, 783, 789, 792, 792, 792, 795, 800, 805, 810, 815, 818, 824, 834, 844, 854, 864, 874, 884, 894, 904, 914, 928, 938, 948, 958, 968, 978, 980, 980, 980, 980, 980, 980, 980, 980, 850, 850, 850, 850, 850, 850, 850, 850, 850, 850, 850];
var y_reflection = [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   2,   9,  14,  20,  26,  35,  42,  46,  55,  58,  62,  68,  74,  78,  80,  82,  84,  86,  88,  92,  94,  96,  98, 105, 110, 115, 120, 125, 130, 138, 145, 152, 162, 174, 184, 194, 202, 235, 242, 248, 254, 260, 266, 272, 278, 284, 292, 300];
var x_positions90 = [], y_positions90 = [];
var x_refraction = [], y_refraction = [];
var x_end = 502, y_end = 302;
var svg_width = 770, svg_heigth = 600;
var MaxIntensityLaser = 1, IntensityReflection = 0.5, IntensityRefraction = 1;
var RefractionIndex;
var h = 30;
var R, G, B;

function DrawLine(X_i, Y_i, X_o, Y_o, opacity_in, R, G, B){
    var svg = document.getElementsByTagName('svg')[0];
    var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');

    line.setAttributeNS(null, "x1", X_i );
    line.setAttributeNS(null, "y1", Y_i );
    line.setAttributeNS(null, "x2", X_o );
    line.setAttributeNS(null, "y2", Y_o );

    line.style.stroke = 'rgba('+R+', '+G+', '+B+', '+opacity_in+')';
    line.style.strokeWidth = "4px";
    line.style.zIndex = "10";

    svg.appendChild(line);
}

function toRadians(theta){
    var radians = (theta*Math.PI)/180;

    return radians;
}

function toDegrees( radians ){
    var degrees = (radians*180)/Math.PI;

    return degrees;
}

function Snell_Law( n1, n2, theta1 ){
    var theta1_radians = toRadians(theta1);
    var argument_degrees = (n1/n2)*Math.sin( theta1_radians );
    var theta2 = Math.asin( argument_degrees );

    return toDegrees(theta2);
}

function SetRefractionIndex(value){
    var RefIndex;
    
    if( value == 1 )
        RefIndex = 1.00;
    else if( value == 2 )
        RefIndex = 1.33;
    else
        RefIndex = 1.50;

    return RefIndex;
}

function PaintBackgroundColor(){
    var svg = document.getElementsByTagName('svg')[0];
    var state_index_3  = false; //$('#checkbox-activate-index-3').prop('checked');
    var select_index_2 = $('#select-refractive-index-2');
    var select_index_3 = $('#select-refractive-index-3');
    var BackgroundColor = '';

    if( state_index_3 ){
        $('.ref-index3-container').css('display', 'block');

        if( select_index_3.val() == 1 ){
            if( select_index_2.val() == 1 )
                BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(255, 255, 255) 50.3%, rgb(255, 255, 255) 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 75.3%, rgb(255, 255, 255) 75.3%, rgb(255, 255, 255) 100%)';
            else if( select_index_2.val() == 2 )
                BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(227, 241, 255) 50.3%, rgb(227, 241, 255) 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 75.3%, rgb(255, 255, 255) 75.3%, rgb(255, 255, 255) 100%)';
            else
                BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(240, 240, 240) 50.3%, rgb(240, 240, 240) 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 75.3%, rgb(255, 255, 255) 75.3%, rgb(255, 255, 255) 100%)';
        }else if( select_index_3.val() == 2 ){
            if( select_index_2.val() == 1 )
                BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(255, 255, 255) 50.3%, rgb(255, 255, 255) 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 75.3%, rgb(227, 241, 255) 75.3%, rgb(227, 241, 255) 100%)';
            else if( select_index_2.val() == 2 )
                BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(227, 241, 255) 50.3%, rgb(227, 241, 255) 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 75.3%, rgb(227, 241, 255) 75.3%, rgb(227, 241, 255) 100%)';
            else
                BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(240, 240, 240) 50.3%, rgb(240, 240, 240) 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 75.3%, rgb(227, 241, 255) 75.3%, rgb(227, 241, 255) 100%)';
        }else{
            if( select_index_2.val() == 1 )
                BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(255, 255, 255) 50.3%, rgb(255, 255, 255) 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 75.3%, rgb(240, 240, 240) 75.3%, rgb(240, 240, 240) 100%)';
            else if( select_index_2.val() == 2 )
                BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(227, 241, 255) 50.3%, rgb(227, 241, 255) 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 75.3%, rgb(240, 240, 240) 75.3%, rgb(240, 240, 240) 100%)';
            else
                BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(240, 240, 240) 50.3%, rgb(240, 240, 240) 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 75.3%, rgb(240, 240, 240) 75.3%, rgb(240, 240, 240) 100%)';
        }
    }else{
        $('.ref-index3-container').css('display', 'none');

        if( select_index_2.val() == 1 ){
            $('.ref-index2').text( SetRefractionIndex(1) );
            BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(255, 255, 255) 50.3%, rgb(255, 255, 255) 100%)';
        }else if( select_index_2.val() == 2 ){
            $('.ref-index2').text( SetRefractionIndex(2) );
            BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(227, 241, 255) 50.3%, rgb(227, 241, 255) 100%)';
        }else{
            $('.ref-index2').text( SetRefractionIndex(3) );
            BackgroundColor = 'linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50.3%, rgb(240, 240, 240) 50.3%, rgb(240, 240, 240) 100%)';
        }
    }

    svg.style.background = BackgroundColor;
}

function DrawLaserFigures(degrees, degreesRefraction){
    $('#svg_paint').empty();
    var boolReflection = $('#checkboxReflection').prop('checked');
    var boolRefraction = $('#checkboxRefraction').prop('checked');

    if( boolReflection && boolRefraction ){
        // Laser source
        DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end, MaxIntensityLaser, R, G, B);
        // Reflection 
        DrawLine(x_reflection[degrees-1], y_reflection[degrees-1], x_end, y_end, IntensityReflection, R, G, B );
        // Refraction
        DrawLine(x_refraction[ Math.round(degreesRefraction) ], y_refraction[ Math.round(degreesRefraction) ], x_end, y_end, IntensityRefraction, R, G, B );
    }else if( boolReflection ){
        // Laser source
        DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end, MaxIntensityLaser, R, G, B);
        // Reflection 
        DrawLine(x_reflection[degrees-1], y_reflection[degrees-1], x_end, y_end, IntensityReflection, R, G, B );
    }else if( boolRefraction ){
        // Laser source
        DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end, MaxIntensityLaser, R, G, B);
        // Refraction
        DrawLine(x_refraction[ Math.round(degreesRefraction) ], y_refraction[ Math.round(degreesRefraction) ], x_end, y_end, IntensityRefraction, R, G, B );
    }else{
        // Laser source
        DrawLine(x_positions90[degrees-1], y_positions90[degrees-1], x_end, y_end, MaxIntensityLaser, R, G, B);
    }
}

function alignAnglesInExtremes(degrees, degreesRefraction){
    var boolReflection = $('#checkboxReflection').prop('checked');
    var boolRefraction = $('#checkboxRefraction').prop('checked');
    var intensityLaser = parseInt( $('#txt-laser-intensity').val().split(' ')[0] );

    if( boolReflection && boolRefraction ){
        if( degrees == 90 ){
            $('.angle-reflection-result').empty().text( '-°' );
            $('.angle-refraction-result').empty().text( '-°' );

            $('.resultReflectance').text( '1.00' );
            $('.resultTransmittance').text( '0.00' );
            $('.resultReflectionIntensity').text( intensityLaser+'.00 mW' );
            $('.resultRefractionIntensity').text( '0.00 mW' );

            $('#svg_paint').empty();
            DrawLine( x_positions90[degrees-1], y_positions90[degrees-1]+3, x_end+x_positions90[degrees-1], y_end-1, MaxIntensityLaser, R, G, B );
        }else if( degrees == 0 ){
            $('.angle-reflection-result').empty().text( '0°' );
            $('.angle-refraction-result').empty().text( '0°' );  
            $('.result-max-distance').text( h+' cm' );
            LaserIntensityViewAndResult();

            $('#svg_paint').empty();
            DrawLine( x_positions90[degrees+1]+4, y_positions90[degrees+1], x_end, y_end+y_end, MaxIntensityLaser, R, G, B );
        }else{
            $('.angle-reflection-result').empty().text(degrees+'°');
            $('.angle-refraction-result').empty().text( degreesRefraction.toFixed(1)+'°');
            $('.result-max-distance').text( getMaxDistance( degrees, RefractionIndex, h ).toFixed(2)+' cm' );
            LaserIntensityViewAndResult();
        }
    }else if( boolReflection ){
        if( degrees == 90 ){
            $('.angle-reflection-result').empty().text( '-°' );
            $('.angle-refraction-result').empty().text( '-°' );
            $('.resultReflectance').text( '1.00' );
            $('.resultTransmittance').text( '0.00' );
            $('.resultReflectionIntensity').text( intensityLaser+'.00 mW' );
            $('.resultRefractionIntensity').text( '0.00 mW' );

            $('#svg_paint').empty();
            DrawLine( x_positions90[degrees], y_positions90[degrees]+3, x_end+x_positions90[degrees], y_end-1, MaxIntensityLaser, R, G, B );
        }else if( degrees == 0 ){
            $('.angle-reflection-result').empty().text( '0°' );

            $('.resultReflectance').text( '0.00' );
            $('.resultTransmittance').text( '1.00' );
            $('.resultReflectionIntensity').text( '0.00 mW' );
            $('.resultRefractionIntensity').text( intensityLaser+'.00 mW' );

            $('#svg_paint').empty();
            DrawLine( x_positions90[degrees]+4, y_positions90[degrees], x_end, y_end+y_end, MaxIntensityLaser, R, G, B );
        }else{
            $('.angle-reflection-result').empty().text( degrees+'°' );
            LaserIntensityViewAndResult();
        }
    }else if( boolRefraction ){
        if( degrees == 90 ){
            $('.angle-reflection-result').empty().text( '-°' );
            $('.angle-refraction-result').empty().text( '-°' );
            $('.resultReflectance').text( '-' );
            $('.resultTransmittance').text( '-' );
            $('.resultReflectionIntensity').text( '-' );
            $('.resultRefractionIntensity').text( '-' );

            $('#svg_paint').empty();
            DrawLine( x_positions90[degrees], y_positions90[degrees]+3, x_end+x_positions90[degrees], y_end-1, MaxIntensityLaser, R, G, B );
        }else if( degrees == 0 ){
            $('.angle-refraction-result').empty().text( '0°' );
            $('.result-max-distance').text( h+' cm' );
            $('.resultReflectance').text( '-' );
            $('.resultTransmittance').text( '-' );
            $('.resultReflectionIntensity').text( '-' );
            $('.resultRefractionIntensity').text( '-' );

            $('#svg_paint').empty();
            DrawLine( x_positions90[degrees+1]+4, y_positions90[degrees+1], x_end, y_end+y_end, MaxIntensityLaser, R, G, B );
        }else{
            $('.angle-refraction-result').empty().text( degreesRefraction.toFixed(1)+'°');
            $('.result-max-distance').text( getMaxDistance( degrees, RefractionIndex, h ).toFixed(2)+' cm' );
            
            LaserIntensityViewAndResult();
        }
    }else{
        $('.resultReflectance').text( '-' );
        $('.resultTransmittance').text( '-' );
        $('.resultReflectionIntensity').text( '-' );
        $('.resultRefractionIntensity').text( '-' );

        $('#svg_paint').empty();
        DrawLine( x_positions90[degrees], y_positions90[degrees], x_end, y_end, MaxIntensityLaser, R, G, B );
        console.log( 'AlignAnglesInExtremes' )
    }
}

function getCoefficient_R(n1, n2, degrees, degreesRefraction){
//    frac = ( n2 - n1 )/( n2 + n1 );
    var r, R;

    r = ( n1*Math.cos( toRadians(degrees) ) - n2*Math.cos( toRadians(degreesRefraction) ) )/( n1*Math.cos( toRadians(degrees) ) + n2*Math.cos( toRadians(degreesRefraction) ) );
    R = Math.pow(r, 2);

    return R;
}

function getCoefficient_T(n1, n2, degrees, degreesRefraction){
//    frac = ( 4*n1*n2 )/( Math.pow( (n1 + n2), 2) );
    var t, T;

    t = ( 2*n1*Math.cos( toRadians(degrees) ) )/( n1*Math.cos( toRadians(degrees) ) + n2*Math.cos( toRadians(degreesRefraction) ) );
    T = ( n2*Math.cos( toRadians(degreesRefraction) ) )/( n1*Math.cos( toRadians(degrees) ) )*Math.pow(t, 2);

    return T;
}

function getMaxDistance(theta, n, h){
    var distance;
    distance = h*Math.sin( toRadians(theta) )*( 1 - ( Math.cos( toRadians(theta) ) )/( Math.sqrt( Math.pow(n, 2) - Math.pow( Math.sin( toRadians(theta) ), 2) )  ) );

    return distance;
}

// takes wavelength in nm and returns an rgba value
function WavelengthToRGB(wavelength) {
    var Gamma = 0.80,

    IntensityMax = 255,
    factor, red, green, blue;

    if((wavelength >= 380) && (wavelength<440)){
      red = -(wavelength - 440) / (440 - 380);
      green = 0.0;
      blue = 1.0;
    }else if((wavelength >= 440) && (wavelength<490)){
      red = 0.0;
      green = (wavelength - 440) / (490 - 440);
      blue = 1.0;
    }else if((wavelength >= 490) && (wavelength<510)){
      red = 0.0;
      green = 1.0;
      blue = -(wavelength - 510) / (510 - 490);
    }else if((wavelength >= 510) && (wavelength<580)){
      red = (wavelength - 510) / (580 - 510);
      green = 1.0;
      blue = 0.0;
    }else if((wavelength >= 580) && (wavelength<645)){
      red = 1.0;
      green = -(wavelength - 645) / (645 - 580);
      blue = 0.0;
    }else if((wavelength >= 645) && (wavelength<781)){
      red = 1.0;
      green = 0.0;
      blue = 0.0;
    }else{
      red = 0.0;
      green = 0.0;
      blue = 0.0;
    };

    // Let the intensity fall off near the vision limits
    if((wavelength >= 380) && (wavelength<420))
      factor = 0.3 + 0.7*(wavelength - 380) / (420 - 380);
    else if((wavelength >= 420) && (wavelength<701))
      factor = 1.0;
    else if((wavelength >= 701) && (wavelength<781))
      factor = 0.3 + 0.7*(780 - wavelength) / (780 - 700);
    else
      factor = 0.0;
    
    if (red !== 0)
        red = Math.round(IntensityMax * Math.pow(red * factor, Gamma));

    if (green !== 0)
        green = Math.round(IntensityMax * Math.pow(green * factor, Gamma));
    
    if (blue !== 0)
        blue = Math.round(IntensityMax * Math.pow(blue * factor, Gamma));
    
    return [red,green,blue];
}

function ChangeLinesColor(){
    var type_material =  $('#select-refractive-index-2').val();
    var degrees = parseInt($('#txtLaserPosition').val().split('°')[0]);
    var degreesRefraction = Snell_Law(1, RefractionIndex, degrees);
    var Color = WavelengthToRGB( $('#range-color').val() );

    R = Color[0];
    G = Color[1];
    B = Color[2];
 
    if( type_material == 1 ){
        //alignAnglesInExtremes(degrees, degreesRefraction);
        $('.angle-reflection-result').empty().text( '-°' );
        $('.angle-refraction-result').empty().text( '-°' );
        $('.resultReflectance').text( '-' );
        $('.resultTransmittance').text( '-' );
        $('.resultReflectionIntensity').text( '-' );
        $('.resultRefractionIntensity').text( '-' );

        DrawLine(x_positions90[degrees+1]+8, y_positions90[degrees+1], x_end, y_end, MaxIntensityLaser, R, G, B);
        DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end, MaxIntensityLaser, R, G, B);
    }else
        DrawLaserFigures(degrees, degreesRefraction);
   
}

function LaserIntensityViewAndResult(){
    // Data require
    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);
    var degreesRefraction = Snell_Law(1, RefractionIndex, degrees);
    var intensityLaser = parseInt( $('#txt-laser-intensity').val().split(' ')[0] );

    // Calculated R, T, Intensity Reflection and Intensity Refraction
    var R_coefficient = getCoefficient_R(  1.00, RefractionIndex, degrees, degreesRefraction).toFixed(2);
    var T_coefficient = getCoefficient_T(1.00, RefractionIndex, degrees, degreesRefraction).toFixed(2);
    IntensityReflection = parseFloat(R_coefficient) + 0.1;
    IntensityRefraction = parseFloat(T_coefficient) + 0.1;

    var IReflection_result = intensityLaser*R_coefficient;
    var IRefraction_result = intensityLaser*T_coefficient;

    // Show the result
    $('.resultReflectionIntensity').text(IReflection_result.toFixed(2)+' mW');
    $('.resultRefractionIntensity').text(IRefraction_result.toFixed(2)+' mW');
    $('.resultReflectance').text( R_coefficient );
    $('.resultTransmittance').text( T_coefficient );
}

$(document).ready(function(){
    // Initialize Materialize components
    $('.collapsible').collapsible();

    // Initialize values and states
    $('.ref-index1').text('1.00');
    $('.ref-index2').text('1.33');
    $('#checkboxImgTransportador').prop('checked', true);
    $('#checkboxReflection').prop('checked', true);
    $('#checkboxRefraction').prop('checked', true);
    $('#checkboxImgTransportador').prop('checked', false);
    $('#select-refractive-index-2').val(2);
    $('#range-color').val(450);

    var type_material =  $('#select-refractive-index-2').val();
        RefractionIndex = SetRefractionIndex(type_material);
    var boolReflection = $('#checkboxReflection').prop('checked');
    var boolRefraction = $('#checkboxRefraction').prop('checked');

    cont = 0;
    for(i=0; i<(x_positions.length+1)/4; i++){
        x_positions90.push( x_positions[cont] );
        y_positions90.push( y_positions[cont] );
        cont = cont + 4;
    }

    var y_aux, x_aux;
    for(i=0; i<x_reflection.length+1; i++){
        y_aux = y_end - y_reflection[i];

        x_refraction.push( x_reflection[i] );
        y_refraction.push( y_aux + 300 );
    }

    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);
    var degreesRefraction = Snell_Law(1, RefractionIndex, degrees);

    $('.angle-reflection-result').empty().text(degrees+'°');
    $('.angle-refraction-result').empty().text(degreesRefraction.toFixed(1)+'°');
    $('.result-max-distance').text( getMaxDistance( degrees, RefractionIndex, h ).toFixed(2)+' cm' );

    ChangeLinesColor();
    PaintBackgroundColor();
    DrawLaserFigures(degrees, degreesRefraction);
    alignAnglesInExtremes(degrees, degreesRefraction);
    LaserIntensityViewAndResult();
});

$('#range-color').on('mousedown mousemove change', function(){
    ChangeLinesColor();
});

$('#checkboxReflection').on('change', function(){
    var boolReflection = $('#checkboxReflection').prop('checked');
    var boolRefraction = $('#checkboxRefraction').prop('checked');
    var degrees = parseInt($('#txtLaserPosition').val().split('°')[0]);
    var degreesRefraction = Snell_Law(1, RefractionIndex, degrees);

    DrawLaserFigures(degrees, degreesRefraction);

    if( boolReflection )
        $('.angle-reflection-result').empty().text(degrees+'°');
    else
        $('.angle-reflection-result').empty().text('-°');
});

$('#checkboxRefraction').on('change', function(){
    var boolReflection = $('#checkboxReflection').prop('checked');
    var boolRefraction = $('#checkboxRefraction').prop('checked');
    var degrees = parseInt($('#txtLaserPosition').val().split('°')[0]);
    var degreesRefraction = Snell_Law(1, RefractionIndex, degrees);

    DrawLaserFigures(degrees, degreesRefraction);

    if( boolRefraction ){
        $('.angle-refraction-result').empty().text(degreesRefraction.toFixed(1)+'°');
        $('.result-max-distance').text( getMaxDistance( degrees, RefractionIndex, h ).toFixed(2)+' cm' );
    }else{
        $('.angle-refraction-result').empty().text('-°');
        $('.result-max-distance').text( '- cm' );
    }
});

$('#checkboxImgTransportador').on('change', function(){
    ShowImage = $('#checkboxImgTransportador').prop('checked');
    Image = $('#img-transportador');
    console.log( ShowImage );

    if( ShowImage )
        Image.show();
    else
        Image.hide();

});
/*
$('#checkbox-activate-index-3').on('change', function(){
    var refractive_index_3 = $('#checkbox-activate-index-3');
    var refi_3_state = refractive_index_3.prop('checked');
    var select_refractive_index_3 = $('#select-refractive-index-3');
    var degrees = parseInt($('#txtLaserPosition').val().split('°')[0]);
    var RefIndex;

    if( refi_3_state ){
        select_refractive_index_3.removeAttr('disabled');
        $('.ref-index3').text( SetRefractionIndex( select_refractive_index_3.val() ) );
        $('.result-max-distance').text( getMaxDistance( degrees, RefractionIndex, h ).toFixed(2)+' cm' );
        PaintBackgroundColor();
    }else{
        select_refractive_index_3.prop('disabled', 'true');
        RefIndex = SetRefractionIndex( select_refractive_index_3.val() );
        $('.ref-index3').text( '0' );
        PaintBackgroundColor();
    }

});
*/
$('#btnMoreDegrees').on('click', function(){
    var type_material =  $('#select-refractive-index-2').val();
    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);
    var degreesRefraction = Snell_Law(1, RefractionIndex, degrees);
    var boolReflection = $('#checkboxReflection').prop('checked');
    var boolRefraction = $('#checkboxRefraction').prop('checked');

    if( degrees < 90 )
        degrees = degrees + 1;
    else{
        M.toast({html: 'Max 90 degrees', classes: 'rounded'});
    }

    txtLaserPosition.val(degrees+'°');

    if( type_material == 1 ){
        $('#checkboxReflection').prop('checked', false);
        $('#checkboxRefraction').prop('checked', false);
        $('.angle-reflection-result').empty().text( '-°' );
        $('.angle-refraction-result').empty().text( '-°' );
        $('.resultReflectance').text( '-' );
        $('.resultTransmittance').text( '-' );
        $('#svg_paint').empty();

        DrawLine( x_positions90[degrees+1]+8, y_positions90[degrees], x_end, y_end, MaxIntensityLaser, R, G, B );
        DrawLine( x_refraction[degrees+1], y_refraction[degrees+1], x_end, y_end, MaxIntensityLaser, R, G, B );
    }else{
        DrawLaserFigures(degrees, degreesRefraction);
        alignAnglesInExtremes(degrees, degreesRefraction);
        //LaserIntensityViewAndResult();
    }
});

$('#btnLessDegrees').on('click', function(){
    var type_material =  $('#select-refractive-index-2').val();
    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);
    var degreesRefraction = Snell_Law(1, RefractionIndex, degrees);
    var boolReflection = $('#checkboxReflection').prop('checked');
    var boolRefraction = $('#checkboxRefraction').prop('checked');

    $('#svg_paint').empty();

    if( degrees > 0 )
        degrees = degrees - 1;
    else{
        M.toast({html: 'Min 0 degrees', classes: 'rounded'})
        $('.resultReflectance').text( '0' );
        $('.resultTransmittance').text( '1' );
    }
    
    txtLaserPosition.val(degrees+'°');

    if( type_material == 1 ){
        $('.angle-reflection-result').empty().text( '-°' );
        $('.angle-refraction-result').empty().text( '-°' );

        $('#svg_paint').empty();
        $('.resultReflectance').text( '-' );
        $('.resultTransmittance').text( '-' );
        
        DrawLine( x_positions90[degrees+1]+8, y_positions90[degrees], x_end, y_end, MaxIntensityLaser, R, G, B );
        DrawLine( x_refraction[degrees+1], y_refraction[degrees+1], x_end, y_end, MaxIntensityLaser, R, G, B );
    }else{
        DrawLaserFigures(degrees, degreesRefraction);
        alignAnglesInExtremes(degrees, degreesRefraction);

        //LaserIntensityViewAndResult();
    }
});

/*
$('#select-refractive-index-3').change(function(){
    var txtLaserPosition = $('#txtLaserPosition');
    var type_material =  $('#select-refractive-index-3').val();
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);
    var type_material =  $('#select-refractive-index-2').val();
        RefractionIndex = SetRefractionIndex(type_material);
    var degreesRefraction = Snell_Law(1, RefractionIndex, degrees);

    $('.ref-index3').text( SetRefractionIndex( type_material ) );
    PaintBackgroundColor();
    alignAnglesInExtremes(degrees, degreesRefraction);
});
*/

$('#select-refractive-index-2').change(function(){
    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);
    var boolReflection = $('#checkboxReflection').prop('checked');
    var boolRefraction = $('#checkboxRefraction').prop('checked');
    var type_material =  $('#select-refractive-index-2').val();
        RefractionIndex = SetRefractionIndex(type_material);
    var degreesRefraction = Snell_Law(1, RefractionIndex, degrees);

    $('.ref-index2').text( RefractionIndex );
    $('#svg_paint').empty();
    
    if( type_material == 1 ){
        boolReflection = false;
        boolRefraction = false;
        
        $('#checkboxReflection').prop('checked', false);
        $('#checkboxRefraction').prop('checked', false);
        $('#checkboxReflection').prop('disabled', true);
        $('#checkboxRefraction').prop('disabled', true);

        $('.angle-reflection-result').empty().text( '-°' );
        $('.angle-refraction-result').empty().text( '-°' );

//        alignAnglesInExtremes(degrees, degreesRefraction);
//        DrawLine(x_positions90[degrees], y_positions90[degrees], x_end, y_end, MaxIntensityLaser, R, G, B);
//        DrawLine(x_refraction[degrees], y_refraction[degrees], x_end, y_end, MaxIntensityLaser, R, G, B);
        ChangeLinesColor();
        console.log('Type material 1');
    }else{
        boolReflection = true;
        boolRefraction = true;
        $('#checkboxReflection').prop('checked', true);
        $('#checkboxRefraction').prop('checked', true);
        $('#checkboxReflection').removeAttr('disabled');
        $('#checkboxRefraction').removeAttr('disabled');
        $('.result-max-distance').text( getMaxDistance( degrees, RefractionIndex, h ).toFixed(2)+' cm' );

        alignAnglesInExtremes(degrees, degreesRefraction);
        DrawLaserFigures(degrees, degreesRefraction);
        LaserIntensityViewAndResult();
    }

    PaintBackgroundColor();
});

$('#btn-more-laser-intensity').on('click', function(){
    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);
    var degreesRefraction = Snell_Law(1, RefractionIndex, degrees);
    var laser_intensity = parseInt( $('#txt-laser-intensity').val().split(' ')[0] );
    var type_material =  $('#select-refractive-index-2').val();

    if( laser_intensity < 80 )
        laser_intensity = laser_intensity + 1;
    else
        M.toast({html: 'Max 80 mW', classes: 'rounded'});

    if( type_material == 1){
        $('.angle-reflection-result').empty().text( '-°' );
        $('.angle-refraction-result').empty().text( '-°' );
        $('.resultReflectance').text( '-' );
        $('.resultTransmittance').text( '-' );
    }else{
        LaserIntensityViewAndResult();
    }

    $('#txt-laser-intensity').val(laser_intensity+' mW');
});

$('#btn-less-laser-intensity').on('click', function(){
    var txtLaserPosition = $('#txtLaserPosition');
    var degrees = parseInt(txtLaserPosition.val().split('°')[0]);
    var laser_intensity = parseInt( $('#txt-laser-intensity').val().split(' ')[0] );
    var type_material =  $('#select-refractive-index-2').val();
    
    if( laser_intensity > 10 )
        laser_intensity = laser_intensity - 1;
    else
        M.toast({html: 'Min 50 mW', classes: 'rounded'});

    if( type_material == 1 ){
        $('.angle-reflection-result').empty().text( '-°' );
        $('.angle-refraction-result').empty().text( '-°' );
        $('.resultReflectance').text( '-' );
        $('.resultTransmittance').text( '-' );        
    }else{
        LaserIntensityViewAndResult();
    }

    $('#txt-laser-intensity').val(laser_intensity+' mW');
});

$('.btn-draw-circle').on('click', function(){
    DrawCircle();
});

/*
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

var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');

line.setAttributeNS(null, "x1", j);
line.setAttributeNS(null, "y1", i);
line.setAttributeNS(null, "x2", j+3);
line.setAttributeNS(null, "y2", i+3);

line.style.stroke = 'rgb(0, 0, 255)';
line.style.strokeWidth = "3px";

svg.appendChild(line);
*/
