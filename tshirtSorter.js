// T-Shirt Sorter

// Difficulty
// Medium
// Concepts
// Loops, Conditionals

// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// // ssmmll


// Write your solution below:


// function to only take s, m,l
// end result should be sorted sml  !slm

const tshirtSorter = (x) => {
    let small = ""
    let medium = ""
    let large = ""

    for(val of x.toLowerCase()){
        if(val != "s" && val != "m" && val != "l"){
            return "Your string should only contain letters s - m - l"
        }
        else if(val === "s"){
            small = small + val
        }
        else if(val === "m"){
            medium = medium + val
        }
        else if(val === "l"){
            large = large + val
        }
    }
    return (small + medium + large)
}

//test case 1
console.log(tshirtSorter('lms'))  // => sml

//test case 2
console.log(tshirtSorter('smllms')) // => ssmmll



// secondary answer

function tshirtSorterTwo(x){
    let small = ""
    let medium = ""
    let large = ""
    let check = x.toLowerCase().replace(/[^sml]/g, "")
    if( check.length === x.length){
        for(val of check){
        if(val === "s"){
            small = small + val
        }
        else if(val === "m"){
            medium = medium + val
        }
        else if(val === "l"){
            large = large + val
        }
    }
    }else {
        return "Your string should only contain letters s - m - l"}
   
    return (small + medium + large)
}

//test case 1
console.log(tshirtSorterTwo('lms'))  // => sml

//test case 2
console.log(tshirtSorterTwo('smllms')) // => ssmmll

