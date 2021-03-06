import iastate_catalog from '../catalogs/iastate_catalog';
import kstate_catalog from '../catalogs/kstate_catalog';
import current_catalog from '../catalogs/current_catalog';
//import fs from 'fs';

var courses = [[],[],[],[],[],[],[],[]];
let first_year = 2015;


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
  if (current_catalog.current_catalog === "iastate_catalog"){
    return iastate_catalog;
  }else{
    return kstate_catalog;
  }
}

function setCatalog(catalog){
  current_catalog.current_catalog = catalog;
}

function getCatColor(check_catalog){
  if(current_catalog.current_catalog === check_catalog){
    return "primary";
  }else{
    return "secondary";
  }
}

function getNameOfClass(class_id){
  //let rawdata = fs.readFileSync('iastate_catalog.json');
  //let data = JSON.parse(rawdata);
  //console.log(student);
  //let name = data[class_id].course_name;
  let name = catalog().data[class_id].course_name;
  //console.log(name);
  return name;
}

function getShortNameOfClass(class_id){
  let name = catalog().data[class_id].dept + " " + catalog().data[class_id].num;
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
  console.log(courses[semester_id]);
  return courses[semester_id];
}

function getSemesterSeason(semester_id)
{
  //TODO
  if (semester_id%2 == 0)
  {
    return "Fall";
  }
  else
  {
    return "Spring";
  }
  
}

function getSemesterYear(semester_id)
{
  //TODO
  return first_year+Math.floor(((semester_id)/2));
}

function getNameOfDepartment(department_id)
{
  //TODO
  return department_id;
}

function getClassDescription(class_id)
{
  let desc = catalog().data[class_id].desc;
  return desc;
  //return "'Well, Seymore, I made it, despite your directions.' 'Ah, superintendent Chalmers! I hope you're prepared for an unforgettable luncheon!'"
}

function removeClass(semester_id, class_id)
{
  //TODO
  let new_class_list = [];
  for (let i = 0; i < courses.length; i++)
  {
    if (courses[i] != class_id)
    {
      new_class_list.push(courses[i]);
    }
  }
  courses[semester_id] = new_class_list;
}

function addClass(semester_id, class_id)
{
  //TODO
  
  courses[semester_id].push(class_id);
  console.log("HEY");
  console.log(class_id);
}



function getCoursesGivenDepartment(department_id)
{
  // Course name = Dept + num
  // NEVERMIND RETURN COURSE ID's (indices)
  //let coursenames = [];
  let course_ids = [];

  for(let i = 0; i < catalog().data.length; i++){
    let course = catalog().data[i]
    if(department_id == course.dept){
      //coursenames.push(course.dept + " " + course.num);
      course_ids.push(i);
    }
  }

  //console.log(coursenames);
  return course_ids;
  //return coursenames;
  //return [1,2,3,4,5,6,7,8,9];
}

export {getNameOfClass};//
export {getShortNameOfClass};//
export {getRemainingDepartments};//
export {getCoursesInSemester};//
export {getSemesterSeason};//
export {getSemesterYear};//
export {getNameOfDepartment};//
export {getClassDescription};//
export {removeClass};//
export {getCoursesGivenDepartment};//
export {addClass}; //
export {setCatalog};//
export {getCatColor};//
