const body = document.body
const ball = document.querySelector('.ball')
const field= document.querySelector('.field')
const goal_areas = document.querySelectorAll('.goal-area')

const count_left = document.querySelector('.counter .left')
const count_right = document.querySelector('.counter .right')

const audio = document.querySelector('audio')


let leftScore = 0;
let rightScore = 0;

body.ondragover = (e) => {
    e.preventDefault();
}
function Goal(event) {
  
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    audio.play()
    setTimeout(() => {
        audio.pause();      
        audio.currentTime = 0; 
    }, 5000); 

    // alert('goal')

    ball.style.top = '50%'
    ball.style.left = '50%'

    if (event.target === goal_areas[0]) {
        rightScore++; 

        count_right.innerHTML = rightScore; 

    } else if (event.target === goal_areas[1]) {
        leftScore++; 

        count_left.innerHTML = leftScore;
    }
    

}
goal_areas[0].ondrop = Goal
goal_areas[1].ondrop = Goal


field.ondrop = (event) => {

    const { x, y, target } = event
    if(target !== field) return 
    console.log(target === field);

    ball.style.top = y + 'px'
    ball.style.left = x + 'px'


}

ball.ondragstart = (e) => {
    console.log('started');
}

