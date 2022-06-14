const game = () => {
 
    // Function to
    const playGame = () => {
        const tombolBatu = document.querySelector('.batu');
        const tombolKertas = document.querySelector('.kertas');
        const tombolGunting = document.querySelector('.gunting');
        const playerOptions = [tombolBatu,tombolKertas,tombolGunting];
        const computerOptions = ['.batu','.kertas','.gunting'];
         
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
 
                // Function to check who wins
                winner(this.innerText,computerChoice)
            })
        })
         
    }
 
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Seri'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Menang';
            }else{
                result.textContent = 'Player Menang';
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Menang';
            }else{
                result.textContent = 'Player Menang';
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Menang';
            }else{
                result.textContent = 'Player Menang';
            }
        }
    }
 
        const reloadBtn = document.querySelector('.reload');
        
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
 
// Calling the game function
game();