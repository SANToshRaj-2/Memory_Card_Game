
const cardClick = document.querySelectorAll('.card');

let clickCounter = true;
let lockbord = false;
let FIRSTCLICK, SECONDCLICK;


function flipCard() {   

    if (lockbord){return;}

    this.classList.add('FLIP');

    if (clickCounter) {
    
            clickCounter =false;
            FIRSTCLICK =  this;
            
            //FIRSTCLICK.removeEventListener('click',flipCard);
    } else { 
            if(this === FIRSTCLICK) {return;}
            lockbord = true;
            clickCounter =true;
            SECONDCLICK = this;
          //  FIRSTCLICK.addEventListener('click',flipCard);

        FIRSTCLICK.dataset.id === SECONDCLICK.dataset.id ? flip() : unFlip();
        
    }


    function flip () {
        FIRSTCLICK.removeEventListener('click',flipCard);
        SECONDCLICK.removeEventListener('click',flipCard);
        lockbord = false;
       
    };

    function unFlip () {
        setTimeout(()=>{
            FIRSTCLICK.classList.remove('FLIP');
            SECONDCLICK.classList.remove('FLIP');
           lockbord = false;
        },1500)
       
    }; 


 }


cardClick.forEach((cards) => cards.addEventListener('click',flipCard));




cardClick.forEach( (shuffle) => {
    shuffle.style.order= Math.floor(Math.random()*14);
})
