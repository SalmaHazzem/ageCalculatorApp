let day =document.querySelector('#day');
let month =document.querySelector('#month');
let year =document.querySelector('#year');
let newYear =document.querySelector('.newYear');
let newMonth =document.querySelector('.newMonth');
let newDay =document.querySelector('.newDay');
let btn =document.querySelector('.submit');

btn.addEventListener('click' ,function(){
    let y =new Date();
    function display(){
        newYear.innerHTML =  `<span>- -</span> years`;
        newMonth.innerHTML = `<span>- -</span> months`;
        newDay.innerHTML =  `<span>- -</span> days`;
    }
    //error states
    if(day.value.length==0 || month.value.length==0 ||year.value.length==0 ){
           display();
    }else if(month.value == 2 && day.value >29){
       display();
    }else if (day.value<1 || day.value >31 || month.value<1 || month.value>12){
        display();
    }else if(month.value %2 ==0 && day.value >30){
       display();
    }else if(year.value > y.getFullYear()){
        display();

    }else {
        //code if the date is right
        if(month.value>y.getMonth()){
        newYear.innerHTML = `${(y.getFullYear() - year.value)-1} years`;
        newMonth.innerHTML = `${12-(Math.abs((y.getMonth()+1) - month.value))} months`;
        newDay.innerHTML = `${Math.abs(y.getDate() - day.value)} days`;
        
        }else {
            newYear.innerHTML = `${(y.getFullYear() - year.value)} years`;
            newMonth.innerHTML = `${Math.abs((y.getMonth()+1) - month.value)} months`;
            newDay.innerHTML = `${Math.abs(y.getDate() - day.value)} days`;   
        }
    }
})
