const form=document.querySelector('form')
// if we take height value outside it take empty value . we want value at submission
// const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
    e.preventDefault() // donot let the data sent to server
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')


    if(height===''|| height<0 || isNaN(height)){
        results.innerHTML="Please give a valid height"
    }
    else if(weight===''|| weight<0 || isNaN(weight)){
        results.innerHTML="Please give a valid weight"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            results.innerHTML=`<span> Your BMI is ${bmi} & You are Under Weight</span>`
        }
        else if(18.6<=bmi && bmi<=24.9){
            results.innerHTML=`<span>Your BMI is ${bmi} & You are Healthy</span>`
        }
        else if (bmi>24.9){
            results.innerHTML=`<span>Your BMI is ${bmi} & You are Overweight</span>`
        }
    }
})