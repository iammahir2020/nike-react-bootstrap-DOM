const buyLaterBtn = document.getElementById('buy-later-button').addEventListener('click', function(){
    // console.log('asd')
    // this.style.backgroundColor = 'red';
    const heroTitleText = document.getElementById('hero-title-text');
    // console.log(heroTitleText.innerText);
    heroTitleText.innerText = 'HAHA';
    // console.log(heroTitleText.innerText);
    const allBtn = document.getElementsByClassName('btn');
    for(const btn of allBtn){
        btn.style.backgroundColor = 'red';
    }

})