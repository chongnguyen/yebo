window.addEventListener('DOMContentLoaded', () => {
    let tweet = document.getElementById('tweet__content');
    let tweetItem = document.getElementsByClassName('tweet__item');
    let btns = document.getElementsByClassName('btn-slide');

    tweet.style.width = tweetItem.length * 100 + '%';

    for(let i = 0, len = btns.length; i < len; i++){
        createEventBtn(btns[i], i);
    }

    function createEventBtn(elemt, pos){
        elemt.addEventListener('click', function(event){
            let curren = document.getElementsByClassName('active');
            curren[0].className = curren[0].className.replace(' active', '');
            tweet.style.marginLeft = -100 * pos + '%';
            this.className += ' active';
        });
    }
    let count = 0;
    let idI = setInterval(function(){
        if(count < btns.length - 1){
            let curren = document.getElementsByClassName('active');
            curren[0].className = curren[0].className.replace(' active', '');
            tweet.style.marginLeft = -100 * ++count + '%';
            btns[count].className += ' active';
        } else {
            clearInterval(idI);
        }
        
    }, 3000);

});