import iastate_catalog from '../catalogs/iastate_catalog'
import kstate_catalog from '../catalogs/kstate_catalog'
import current_catalog from '../catalogs/current_catalog'
//import fs from 'fs';

var axios = require('axios')
//const fs = require('fs');

/*
function getNameOfClass(class_id)
{
  //TODO: Return the name of the class
  let x = axios.post("http://35.224.245.97", {"action" : "getprograms"})
    .then(res => {
      //return res.data[class_id].course_name;
      console.log(res.data[class_id].course_name);
      return(res.data[class_id].course_name);
  })
  //console.log(x);
  //return x;
}
*/
/*
async function getNameOfClass(class_id)
{
  //TODO: Return the name of the class
  await axios.post("http://35.224.245.97", {"action" : "getprograms"})
    .then(res => {
      //return res.data[class_id].course_name;
      console.log(res.data[class_id].course_name);
      return res.data[class_id].course_name;
  })
  //console.log(x);
  //return x;
}
*/
function catalog()
{
  if (current_catalog == "iastate_catalog"){
    return iastate_catalog;
  }else{
    return kstate_catalog;
  }
}

function getNameOfClass(class_id){
  //let rawdata = fs.readFileSync('iastate_catalog.json');
  //let data = JSON.parse(rawdata);
  //console.log(student);
  //let name = data[class_id].course_name;
  let name = catalog().data[class_id].course_name;
  console.log(name);
  return name;
}


function getRemainingDepartments()
{
  //TODO: Return list of departments.
  let depts = [];
  /*
  for each (let course in catalog().data){
    if(!depts.includes(course.dept)){
      depts.push(course.dept);
    }
  }
  */
  for(let i = 0; i < catalog().data.length; i++){
    let course = catalog().data[i]
    if(!depts.includes(course.dept)){
      depts.push(course.dept);
    }
  }

  //return [1,2,3,4,5,6,7,8];
  return depts;
}

function getCoursesInSemester(semester_id)
{
  //TODO given a "semester id" return a list of "course id"s
  return [1,2,3,4,5,6,7];
}

function getSemesterSeason(semester_id)
{
  //TODO
  return "Fall"
}

function getSemesterYear(semester_id)
{
  //TODO
  return 2019
}

function getNameOfDepartment(department_id)
{
  //TODO
  return "Office of Memes"
}

function getClassDescription(class_id)
{
  //TODO
  return "'Well, Seymore, I made it, despite your directions.' 'Ah, superintendent Chalmers! I hope you're prepared for an unforgettable luncheon!'"
}

function removeClass(class_id)
{
  //TODO
  console.log("LOL bye");
}

function addClass(class_id)
{
  //TODO
  console.log("HEY");
}

function getCoursesGivenDepartment(department_id)
{
  //TODO
  return [1,2,3,4,5,6,7,8,9];
}

export {getNameOfClass};//
export {getRemainingDepartments};//
export {getCoursesInSemester};//
export {getSemesterSeason};//
export {getSemesterYear};//
export {getNameOfDepartment};//
export {getClassDescription};//
export {removeClass};//
export {getCoursesGivenDepartment};//
export {addClass}; //
