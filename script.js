var first_content = document.getElementById('first_content'),
    
    second_content = document.getElementById('second_content'),
    
    third_content = document.getElementById('third_content'),
    
    fourth_content = document.getElementById('fourth_content'),
    
    fifth_content = document.getElementById('fifth_content');
    


function scroller1() {
    
    "use strict";
    
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        
        second_content.style.display = 'block';
    }
    
    if (document.body.scrollTop > 575 || document.documentElement.scrollTop > 575) {
        
        third_content.style.display = 'block';
    }

    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        
        fourth_content.style.display = 'block';
    }
    
    if (document.body.scrollTop > 1125 || document.documentElement.scrollTop > 1125) {
        
        fifth_content.style.display = 'block';
    }
};



window.onscroll = scroller1;