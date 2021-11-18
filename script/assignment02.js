
const outp1 = document.getElementById('outp1');
const outp2 = document.getElementById('outp2');


const arrayOfNumbers = [4, 0, -4, 13, -2];
const students       = ["June", "Joe", "Jack", "Jill", "Jerome"];
const targetName     = "Natsu";

let isfound = false;
//add students
students.push("Jess", "Natsu", "Julie");

let html = "";
//target name display
html += '<h3 class="intro">The Target Name:</h3>';
html += `<p><strong>${targetName}</strong></P>`;

html += '<h3 class="intro">List of Students:</h3>';

html += `The total number of students in the array: ${students.length} students`;


html += `<ul>`;

students.forEach(function(student){
    
    // outp1.innerHTML += `<li>${student}</li>`;

    // if(stu.includes(tar)){
    //     outp2.innerHTML = `<p><strong class="important"> YES!! ${targetName} is found in this student list!!</strong></p>`;
    // }

    if(targetName.toLowerCase() === student.toLowerCase()){
        isfound = true;

        html += `<li class="important">${student} <---- target name is found</li>`
    }else{
        html += `<li>${student}</li>`
    }

});

html += `</ul>`;
//summary of searching array: 
    html += '<h3 class="intro">The summary of searching the array:</h3>';

    if(isfound){
        html += ` The target name "${targetName}" was found in the array.`;
    }else{
        html += `The target name "${targetName}" was <Strong class="important2">NOT</strong> found in the array.`;
    } 
outp1.innerHTML += html;




/*-------------------------
    part 2 
---------------------------*/
html = "";


for(let i = 0, size = arrayOfNumbers.length; i < size; i++){
    html += `<h3 class="intro">The Number: ${arrayOfNumbers[i]}</h3>`;

    if(arrayOfNumbers[i] == arrayOfNumbers[0]){
            html += "Count down:"
       for(let x = arrayOfNumbers[0]; x >= 0; x-- ){
            html += `<li>${x}</li>`;
       }
    }else if(arrayOfNumbers[i] == arrayOfNumbers[1]){
        html += `There is no counting to be done for ${arrayOfNumbers[1]}.`; 

    }else if(arrayOfNumbers[i] == arrayOfNumbers[2]){
        html += "Count up:"
        for(let x = arrayOfNumbers[2]; x < 0; x++){
           html += `<li>${x}</li> `;
       }
    }else if(arrayOfNumbers[i] == arrayOfNumbers[3]){
        html += "Count down:"
        for(let x = arrayOfNumbers[3]; x >= 0; x-- ){
            html += `<li>${x}</li> `;
       }
    }else{
       html += "Count up:"
        for(let x = arrayOfNumbers[4]; x < 0; x++ ){
            html += `<li>${x}</li> `;
       }
    }

}

outp2.innerHTML += html;