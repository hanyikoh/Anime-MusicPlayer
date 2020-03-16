window.addEventListener('load',() =>{
    const pads = document.querySelectorAll('.pads div');
    const sounds = document.querySelectorAll('.sounds')
    const visual = document.querySelector('.visual')
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
      ];    

    pads.forEach((pad, index) => {
        pad.addEventListener('click',function(){
            sounds[index].currentTime = 0;
            sounds.forEach(function(sound) {
                sound.pause();
            })
            sounds[index].play();
            createBubble(index);
        })

    })

const createBubble = index => {
    
    //Create bubbles
        
    const bubble = document.createElement("div");
        
    visual.appendChild(bubble);
        
    bubble.style.backgroundColor = colors[index];
        
    bubble.style.animation = `jump 1s ease`;
       
     bubble.addEventListener("animationend", function() {
          
    visual.removeChild(this);
        });
      
        };
    
});
    