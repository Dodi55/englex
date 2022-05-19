    
    let prev = document.querySelector('.choose_slaider_navig_prev');
    let next = document.querySelector('.choose_slaider_navig_next');

    let slaid1 = document.querySelector('.choose_slaider_1');
    let slaid2 = document.querySelector('.choose_slaider_2');

    let dot1 = document.querySelector('.dot1');
    let dot2 = document.querySelector('.dot2');

    next.addEventListener('click',slaiderNext);
    prev.addEventListener('click',slaiderPrev);
    dot2.addEventListener('click',slaiderNext);
    dot1.addEventListener('click',slaiderPrev);

    function slaiderNext(){
        slaid1.style.transform = 'translateX(-100%)';
        slaid2.style.transform = 'translateX(-100%)';
        dot2.style.backgroundColor = '#ce4a37';
        dot1.style.backgroundColor = '#e5e5e5';
        next.style.opacity = '0.5';
        prev.style.opacity = '1';

    }

    function slaiderPrev(){
        slaid1.style.transform = 'translateX(0%)';
        slaid2.style.transform = 'translateX(0%)';
        dot2.style.backgroundColor = '#e5e5e5';
        dot1.style.backgroundColor = '#ce4a37';
        prev.style.opacity = '0.5';
        next.style.opacity = '1';
    }


/////////////////////////////////////////////

    
    document.addEventListener('scroll',scrollHeader);
    let scrollheader = document.querySelector('.scroll_header');

    function scrollHeader(){
        let scroll = document.documentElement.scrollTop;
        if (scroll >= 200) {
            scrollheader.style.display = 'block';
        }
        else{
            scrollheader.style.display = 'none';
        }
    }




/////////////////////////////////////////////

    let your_goal_iko = document.querySelector('.your_goal_slaider_flex_top_iko');
    let your_goal_price = document.querySelector('.your_goal_slaider_flex_top_p_end_price');
    let your_goal_h1 = document.querySelector('.your_goal_slaider_flex_top_h1');

    function your_goalFunc(iko,price,name){
        your_goal_iko.setAttribute('src',iko);
        your_goal_h1.innerHTML = name
        your_goal_price.innerHTML = price
    }

/////////////////////////////////////////////
    let price_slaider_btn1 = document.querySelector('.price_slaider1_elem_btn1');
    let price_slaider_btn2 = document.querySelector('.price_slaider1_elem_btn2');
    let price_slaider_elem1_focus = document.querySelector('.price_slaider1_elem1_focus');
    let price_slaider_elem2_focus = document.querySelector('.price_slaider1_elem2_focus');

    price_slaider_btn1.onfocus = function(){
        price_slaider_elem1_focus.style.display = 'block';
        price_slaider_btn1.style.borderBottomLeftRadius = '0px'
        price_slaider_btn1.style.borderBottomRightRadius = '0px'
        price_slaider_btn1.style.borderTopLeftRadius = '22px'
        price_slaider_btn1.style.borderTopRightRadius = '22px'
    }
    price_slaider_btn1.onblur = function(){
        price_slaider_elem1_focus.style.display = 'none';
        price_slaider_btn1.style.borderBottomLeftRadius = '100px'
        price_slaider_btn1.style.borderBottomRightRadius = '100px'
        price_slaider_btn1.style.borderTopLeftRadius = '100px'
        price_slaider_btn1.style.borderTopRightRadius = '100px'
    }

    price_slaider_btn2.onfocus = function(){
        price_slaider_elem2_focus.style.display = 'block';
        price_slaider_btn2.style.borderBottomLeftRadius = '0px'
        price_slaider_btn2.style.borderBottomRightRadius = '0px'
        price_slaider_btn2.style.borderTopLeftRadius = '22px'
        price_slaider_btn2.style.borderTopRightRadius = '22px'
    }
    price_slaider_btn2.onblur = function(){
        price_slaider_elem2_focus.style.display = 'none';
        price_slaider_btn2.style.borderBottomLeftRadius = '100px'
        price_slaider_btn2.style.borderBottomRightRadius = '100px'
        price_slaider_btn2.style.borderTopLeftRadius = '100px'
        price_slaider_btn2.style.borderTopRightRadius = '100px'
    }