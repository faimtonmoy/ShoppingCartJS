function updateCaseAndPhone(product, isIncreasing)
{
    const input= document.getElementById(product+'-number');
    let number=0;
    if(isIncreasing)
    {
         number= parseInt(input.value)+1;
    }
    else if(input.value>0)
    {
         number= parseInt(input.value)-1;
    }

    input.value= number;

    const price=document.getElementById(product+'-price');
    if(product== 'phone')
    {
        price.innerText= number * 1219;
    }
    else
    {
        price.innerText= number * 59;
    }
   

}
//Phone increase and decrease
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseAndPhone('phone',true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseAndPhone('phone',false);
})




//Case increase and decrease
document.getElementById('case-plus').addEventListener('click', function(){
   updateCaseAndPhone('case',true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    // const caseInput= document.getElementById('case-number');
    // const caseNumber= parseInt(caseInput.value)-1;
    // caseInput.value= caseNumber;
    updateCaseAndPhone('case',false);
})