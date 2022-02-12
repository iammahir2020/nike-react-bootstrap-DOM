const allBtn = document.getElementsByClassName('btn');
    for(const btn of allBtn){
        btn.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }