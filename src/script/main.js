//create a single JavaScript function named addExcitement that will use console.log() 
//to print out a sentence to the browser console.

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

     // Concatenate the new word onto buildMeUp
     for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) { //condition for if it is divisible by 3
            buildMeUp = buildMeUp + theWordArray[i] + "! "; // Concatenate new word onto buildMeUp
            console.log(buildMeUp);
        } else buildMeUp = buildMeUp + theWordArray[i] + " "; // add space in else statement
            console.log(buildMeUp);
        }
        console.log(buildMeUp);
}

// Invoke the function and pass in the array
addExcitement(sentence)

//Some words are more exciting than others


//Function Arguments
//Add a new argument to the function so that a developer can specify which character 
//should be displayed instead of it always being an exclamation point.
