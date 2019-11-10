import { withThemeCreator } from '@material-ui/styles';

var axios = require('axios')

function getRemainingRequirements()
{
  //TODO: Make this do useful work.
  return [1,2,3,4,5];
}

function getNameOfRequirement(requirement_id)
{
  //TODO: Return the name of the requirement.
  return "Bruh Studies";
}

function getClasses(requirement_id)
{
  //TODO: Return an array of class ids that satisfy the requirements.
  return ["448", "682"]
}

function getNameOfClass(class_id)
{
  //TODO: Return the name of the class
  let x = axios.post("http://35.224.245.97", {"action" : "getprograms"})
    .then(res => {
      return res.data[class_id].course_name;
  })
  console.log(x);
  return x;
}

function getRemainingDepartments()
{
  //TODO: Return list of departments.
  return [1,2,3,4,5,6,7,8];
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

export {getRemainingRequirements};
export {getNameOfRequirement};
export {getClasses};
export {getNameOfClass};
export {getRemainingDepartments};
export {getCoursesInSemester};
export {getSemesterSeason};
export {getSemesterYear};
export {getNameOfDepartment};
export {getClassDescription};
export {removeClass};
export {getCoursesGivenDepartment};
export {addClass};