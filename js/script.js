// Select the input box
// It will show the inputs and output 
const input = document.querySelector('input')
// Select all buttons
const elements = document.querySelectorAll('button')
// value will keep track of what is user typing
let value = ''

elements.forEach((item) => {

    // Add click Event Listener to all buttons
    item.addEventListener('click', () => {
        // Checks if the selected item is a number or not
        if(isNaN(item.innerHTML)) {
           if(item.innerHTML == '=') {
            // If user clicks equal 
            // Do the calculation 
            value = eval(value)
            // Update on the DOM
            input.value = value
           }
           else if(item.innerHTML == 'C') {
            // If user clicks Clear
            //  Clear the value
            value = ''
            // Update on the DOM
            input.value = value
           }
           else if(item.innerHTML == '«') {
            // If user clicks Back
            // Removes the last item of value 
            value = value.slice(0, value.length -1)
            input.value = value
           }
           else if(signCheck() == false) {
               if(value == '') {
                   // If there is nothing in the value 
                   // No need to add sign   
                } else {
                    // Add the clicked sign in value
                   add(item.innerHTML) 
               }
           } 
       } 
       else {
        //   Add clicked number in value
           add(item.innerHTML)
       }
    })
})

// This function takes a number or sign as argument  
// Adds input in value 
// Finally updates the dom

function add(str) {
    value += str
    input.value = value
}

// This function checks if there is any sign at the last of the value

function signCheck() {
    if(value[value.length -1] == '+' ||
    value[value.length -1] == '-' ||
    value[value.length -1] == '*' ||
    value[value.length -1] == '+') {
        return true
    }else {
        return false
    }
}