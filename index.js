const form = document.querySelector('form');
    const grade = document.getElementById('grade');
    form.addEventListener('submit', (e)=>{
    e.preventDefault();
    assignGrade(e.target.avg.value);
    form.reset();
    })

function assignGrade(marks){
    let assignedGrade;
    if (marks > 0 && marks<40){
        assignedGrade = 'Your grade is E.';
    }else if (marks > 40 && marks <= 49){
        assignedGrade = 'Your grade is D.';
    }else if (marks > 49 && marks <= 59){
       assignedGrade = 'Your grade is C.'; 
    }else if (marks > 59 && marks <= 69){
        assignedGrade = 'Your grade is B.';
    }else if (marks> 69 && marks <=100){
        assignedGrade = 'Congratulations!! Your grade is A.'; 
    }else{
        assignedGrade = 'Please enter valid marks between 0 and 100.';
    }
    grade.innerHTML = assignedGrade;
}