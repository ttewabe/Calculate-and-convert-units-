//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(h, w){
    return h*w;
    
}
console.log("A Rectangle Area is:")
console.log(areaOfRectangle(2,3))


//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeter(h, w){
    return 2*(h+w);
    
}
console.log("A Rectangle perimeter is:")
console.log(perimeter(2,3))

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(oC){
    return 32 + (oC * 9/5);
    
}
console.log("Celsius To Fahrenheit is:")
console.log(convertCelsiusToFahrenheit(0))


//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// how to calculate BMI


let height = 1.79832;
    let weight = 70;

function BMI(height, weight){
    
    let bmi = weight/Math.pow(height, 2);
        console.log("The BMI is " + bmi + " so ");
    
     if (bmi < 18.5)
        console.log("underweight");
 
    else if (bmi >= 18.5 && bmi < 24.9)
        console.log("Healthy");
 
    else if (bmi >= 24.9 && bmi < 30)
        console.log("overweight");
 
    else if (bmi >= 30)
        console.log("Suffering from Obesity");
    }
    
        // Function call
         BMI(height, weight);

         
        // Conditions to find out BMI category
       