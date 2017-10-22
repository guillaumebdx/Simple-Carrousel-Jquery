$(document).ready(function(){


    var $carrousel = $('#carrousel'),
        $img = $('#carrousel img'),
        indexImg = $img.length - 1,
        i = 0,
        $currentImg = $img.eq(i);

    $img.css('display', 'none');
    $currentImg.css('display', 'block');

    $('.next').click(function(){

        i++;
        if( i <= indexImg ){
            //Note pour plus tard : ajouter un fadeIn quand j'aurai le temps
            $img.css('display', 'none');

            $currentImg = $img.eq(i);

            $currentImg.css('display', 'block');
        }
        else{
            i = 0;
            $img.css('display', 'none');

            $currentImg = $img.eq(i);

            $currentImg.css('display', 'block');


        }

    });

    $('.prev').click(function(){

        i--;

        if( i >= 0 ){
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        }
        else{
            i = 2; //là je triche un peu, je devrais plutôt compter les images et mettre le chiffre -1
            $img.css('display', 'none');

            $currentImg = $img.eq(i);

            $currentImg.css('display', 'block');
        }


    });

    //Pour que ce soit plus agréable, il faudrait que je lance cette fonction uniquement lorsque la souris n'est pas sur les images

    function slideImg(){
        setTimeout(function(){

            if(i < indexImg){
                i++;
            }
            else{
                i = 0;
            }

            $img.css('display', 'none');

            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');

            slideImg();

        }, 3000);
    }

    slideImg();

});
