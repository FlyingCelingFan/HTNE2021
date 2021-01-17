//declares location of the website to go to
var page = "text";

//This function directs the user to their desired resource website
 function nextPage() {
    //  grabs values from index6
    // sub = subject
    //level = grade level
    var grade = document.getElementById("level").value;
    var subject = document.getElementById("sub").value;

    // document.getElementById("begin").onclick = function() {
    //     location.href="index6.html";
    // }

    if (grade == "Grade 9" || subject == "Math") {
        if (subject == "Math") {
            page="index2.html#math"
        }
        if (subject == "Science") {
            
        }
        if (subject == "English") {
            
        }
        if (subject == "Social Studies") {
            
        }
        location = "index2.html";
        return;
    }

}


/*  psudocode:
nextPage onclick {
    run function nextPage()
    redirect user here 
}

*/

// document.getElementById("begin").onclick = function() {
//     location.href=page;
// }
// if (grade == "Grade 9" || subject == "Math") {
//     location = "index2.html";
//     return;
// }