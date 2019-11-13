function getRandomIntInclusive(min, max) {
        min = Math.ceil(1);
        max = Math.floor(3);
    return Math.floor(Math.random() * (max - min +1)) + min;
  };

$(function(){
    var choiceComputer = getRandomIntInclusive();
    
    $('valid').on('click', function(){
        var choiceGamer = $('option').text();
            if(choiceGamer == choiceComputer){
                alert('Identique, on recommence !')
            }
            else if(choiceGamer <= choiceComputer){
                alert('Perdu');
            }
            else{
                alert('gagner');
            }
    });
});
