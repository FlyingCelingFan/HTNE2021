//declares location of the website to go to
var page = "text";

//This function directs the user to their desired resource website
 function nextPage() {
    //  grabs values from index6
    // sub = subject
    //level = grade level
    var grade = document.getElementById("level").value;
    var subject = document.getElementById("sub").value;

    if (grade == "Grade 9") {
        if (grade == "Grade 9" && subject == "Math") {
                window.location.pathname='C:/Users/Delta/Documents/code/GitHub/HTNE2021/index2.html';
            return;
        }
        else if (grade == "Grade 9" && subject == "Science") {
                window.location.pathname='C:/Users/Delta/Documents/code/GitHub/HTNE2021/index2.html';
            return;
        }
        else if (grade == "Grade 9" && subject == "English") {
               window.location.pathname='C:/Users/Delta/Documents/code/GitHub/HTNE2021/index2.html';
            return;
        }
        else if (grade == "Grade 9" && subject == "Social Studies") {
                window.location.pathname='C:/Users/Delta/Documents/code/GitHub/HTNE2021/index2.html';
            return;
        }
        location = "index2.html";
        return;
    }

    if (grade == "Grade 10") {
        if (grade == "Grade 10" && subject == "Math") {
            page="index3.html#math"
            return
        }
        if (grade == "Grade 10" && subject == "Science") {
            page="index3.html#Science"
            return
        }
        if (grade == "Grade 10" && subject == "English") {
            page="index3.html#English"
            return
        }
        if (grade == "Grade 10" && subject == "Social Studies") {
            page="index3.html#Social_Studies"
            return
        }
        location = "index3.html";
        return;
    }

    if (grade == "Grade 11") {
        if (grade == "Grade 11" && subject == "Math") {
            page="index2.html#math"
        }
        if (grade == "Grade 11" && subject == "Science") {
            
        }
        if (grade == "Grade 11" && subject == "English") {
            
        }
        if (grade == "Grade 11" && subject == "Social Studies") {
            
        }
        location = "index4.html";
        return;
    }

    if (grade == "Grade 12") {
        if (grade == "Grade 12" && subject == "Math") {
            page="index2.html#math"
        }
        if (grade == "Grade 12" && subject == "Science") {
            
        }
        if (grade == "Grade 12" && subject == "English") {
            
        }
        if (grade == "Grade 12" && subject == "Social Studies") {
            
        }
        location = "index5.html";
        return;
    }

}


document.getElementById("begin").onclick = function() {
    nextPage();
}

/*nextPage onclick {
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