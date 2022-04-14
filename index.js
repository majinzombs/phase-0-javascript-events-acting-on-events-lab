// Your code here
// Style
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';
dodger.style.bottom = '0px';

// Move Functions Left
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace('px','');
    const left = parseInt(leftNumbers, 10);

    if(left > 0) {
        dodger.style.left = `${left-1}px`;
    }
}

// Move Function Right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px','');
    const left = parseInt(leftNumbers, 10);

    if(left < 360) {
        dodger.style.left = `${left+1}px`;
    }
}


// Event Listener

document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    }else{
        event.key === 'ArrowRight'
        moveDodgerRight();
    }
});