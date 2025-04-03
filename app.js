const element = document.querySelector(".Select-tip");
    var tip_value = 0;
    var amount = 0;
    var tip_per_person = 0;
    var amount_per_person = 0;

    if (element) {
        element.addEventListener("click", function(e) {
            amount = parseFloat(document.querySelector(".value1").value) || 0; // Get the latest input value
           

            
            if(e.target.tagName=='BUTTON')
            {
                 
            document.querySelectorAll(".top-div button").forEach(function(e){
                e.style.background=`linear-gradient(45deg, #28a745, #218838)`
            })

                   
            document.querySelectorAll(".bottom-div button").forEach(function(e){
                e.style.background=`linear-gradient(45deg, #28a745, #218838)`
            })

            e.target.style.background="red"

            }
                
                
            
            
            
            if (e.target.id === '5%') {
                tip_value = 5 / 100 * amount;
            } else if (e.target.id === '10%') {
                tip_value = 10 / 100 * amount;
            } else if (e.target.id === '15%') {
                tip_value = 15 / 100 * amount;
            } else if (e.target.id === '20%') {
                tip_value = 20 / 100 * amount;
            } else if (e.target.id === '25%') {
                tip_value = 25 / 100 * amount;
            } else if (e.target.id === '30%') {
                tip_value = 30 / 100 * amount;w
            } else{
                tip_value = tip_value
            }

            // console.log("Tip Amount:", tip_value); // Now tip_value will be correctly calculated
        });
    } 



    const generate = document.querySelector(".Generate");
    generate.addEventListener("click",function(){

        const people = document.querySelector(".value2");
        // console.log(people.value);
        // console.log(tip_value);
        // console.log(amount);

        tip_per_person = parseFloat((tip_value / people.value).toFixed(2));
        amount_per_person = parseFloat(((amount + tip_value) / people.value).toFixed(2));
        
        document.querySelector(".tip-per-person p").innerHTML = tip_per_person;
        document.querySelector(".amount-per-person p").innerHTML = amount_per_person;

        const reset = document.querySelector(".Reset");
        reset.addEventListener("click",()=>{

            document.querySelectorAll(".top-div button").forEach(function(e){
                e.style.background=`linear-gradient(45deg, #28a745, #218838)`
            })

                   
            document.querySelectorAll(".bottom-div button").forEach(function(e){
                e.style.background=`linear-gradient(45deg, #28a745, #218838)`
            })
            document.querySelector(".tip-per-person p").innerHTML = "";
            document.querySelector(".amount-per-person p").innerHTML = "";
            tip_value = 0;
            amount = 0;
            tip_per_person = 0;
            amount_per_person = 0;
            document.querySelector(".value1").value = "";
            document.querySelector(".value2").value = "";

        })
    });
