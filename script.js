var btns = document.querySelectorAll('.btn');
var resetBtn = document.getElementById('reset');

var turn_O = true;
var winPatterns = [
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

function resetGame(){
    turn_O = true;
    enableBtn();
}

function disableBtn(){
    for(var btn of btns){
        btn.disabled = true;
    }
}
function enableBtn(){
    for(var btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
}

btns.forEach(function(btn){
    btn.addEventListener("click", function(){
        if(turn_O){
            btn.innerText = "O";
            turn_O = false;
        }
        else{
            btn.innerText = "X";
            turn_O = true;
        }
        btn.disabled = true;
        checkWinner();
    })
})

function showWinner(winner){
    Swal.fire({
        title: `The winner is ${winner}`,
        text: "Congratulations!",
        icon: "success"
      });
      disableBtn();
}

var checkWinner = ()=>{
    for(var pattern of winPatterns){
         var pos1Val = btns[pattern[0]].innerText;
         var pos2Val = btns[pattern[1]].innerText;
         var pos3Val = btns[pattern[2]].innerText;

         if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
         }
        
    }
}

resetBtn.addEventListener("click", resetGame);