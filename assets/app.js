var courses=[];
var course1=prompt("course1: ");
courses.push(course1);
var course2=prompt("course2: ");
courses.push(course2);
var course3=prompt("course3: ");
courses.push(course3);
var course4=prompt("course4: ");
courses.push(course4);
var course5=prompt("course5: ");
courses.push(course5);
alert(courses);


//splice me problem arahi 
//values remove horhi on every step
newcourse1=prompt(course1);
courses.splice(0,1,newcourse1);  
newcourse2=prompt(course2);
courses.splice(1,1,newcourse2);  
newcourse3=prompt(course3);
courses.splice(2,1,newcourse3);  
newcourse4=prompt(course4);
courses.splice(3,1,newcourse4);  
newcourse5=prompt(course5);
courses.splice(4,1,newcourse5);  
alert(courses);



