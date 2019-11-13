
$(function(){
    var nbGames = 0;
    var computerScore = 0;
    var playScore = 0;
    var draw = 0;

    $('button').click(function(){
        var playerChoice = $('select option:selected').val();
        var imgPlayer = $('<img />');
        var imgComputer = $('<img />');
            imgPlayer.attr('src', `../assests/img/${playerChoice}.png`);
            $('#player>img').remove();
            $('#player-span').after(imgPlayer);//place l'élément après

        var computerChoice = Math.floor(Math.random() * 3);
            imgPlayer.attr('src', `../assests/img/${playerChoice}.png`);
            $('#player>img').remove();
            $('#player-span').before(imgComputer);//place l'élément avant
        ++nbGames

        if(computerChoice == playerChoice){
            alert('Egalité');
        }
        else if ((computerChoice == 0 && playerChoice == 2) || (computerChoice == 1 && playerChoice == 0) || (computerChoice == 2 && playerChoice == 1)){
            ++computerScore
            alert('Vous avez perdu !');
            ++playScore
        }
        else{
            alert('Vous avez gagné !');
        }

        /*let victoryPlayer =((playerScore / nbGames) * 100).toFixed(2);
        let victoryComputer = ((computerScore / nbGames) * 100).toFixed(2);
        draw = 100 - (victoryPlayer - victoryComputer).toFixed(2);*/

        alert(victoryPalyer);
        alert(victoryComputer);
        alert(draw);
    });
});