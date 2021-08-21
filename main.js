var student_name_array=[];

function submit(){

    var name_one = document.getElementById("First_name").value;
    var name_two = document.getElementById("Second_name").value;
    var name_three = document.getElementById("Third_name").value;
    var name_four = document.getElementById("Fourth_name").value;

    student_name_array.push(name_one);
    student_name_array.push(name_two);
    student_name_array.push(name_three);
    student_name_array.push(name_four);

    console.log(student_name_array);
    
    document.getElementById("display_names").innerHTML=student_name_array;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    student_name_array.sort();
    console.log(student_name_array);
    document.getElementById("display_names").innerHTML=student_name_array;
}