const fs = require("fs");
const engclass = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const EMP = require("./lib/employee");
//const cheerio = require('cheerio');
const inquirer = require("inquirer");









  function dip_manager(name,id,email,number)
  {

   var mngr_html='<div class ="row"><div class="col-sm-6 col-md-4" style="float: none;margin: 0 auto;"> <div class="thumbnail"> <div class="col-lg-12 manager"> <h3 style="text-align:center;height:50px;color:white;">Manager</h3> </div> <div class="caption"> <h3 style="text-align:center;">'+name+'</h3> <ul  class="list-group"> <li class="list-group-item"><b>ID: </b>'+id+'</li> <li class="list-group-item"><b>Email: </b>'+email+'</li> <li class="list-group-item"><b>Number: </b>'+number+'</li> </ul> </div> </div> </div></div>';
   fs.writeFile('Templates/Manager.html', mngr_html, 'utf8', function (err) {
    if (err) return console.log(err);
  });
   return mngr_html;
  }

  function disp_intern(name,id,email,school)
  {

   var intern_html ='<div class="col-sm-6 col-md-4"> <div class="thumbnail"> <div class="col-lg-12 intern"> <h3 style="text-align:center;height:50px;color:white;">Intern</h3> </div> <div class="caption"> <h3 style="text-align:center;">'+name+'</h3> <ul  class="list-group"> <li class="list-group-item"><b>ID: </b>'+id+'</li> <li class="list-group-item"><b>Email: </b>'+email+'</li> <li class="list-group-item"><b>School: </b>'+school+'</li> </ul> </div> </div> </div>'
   fs.writeFile('Templates/Intern.html', intern_html, 'utf8', function (err) {
    if (err) return console.log(err);
  });
   return intern_html;
  }

  function disp_eng(name,id,email,git)
  {

   var eng_html ='<div class="col-sm-6 col-md-4"> <div class="thumbnail"> <div class="col-lg-12 engineer"> <h3 style="text-align:center;height:50px;color:white;">Engineer</h3> </div> <div class="caption"> <h3 style="text-align:center;">'+name+'</h3> <ul  class="list-group"> <li class="list-group-item"><b>ID: </b>'+id+'</li> <li class="list-group-item"><b>Email: </b>'+email+'</li> <li class="list-group-item"><b>Git: </b>'+git+'</li> </ul> </div> </div> </div>'
   fs.writeFile('Templates/Engineer.html', eng_html, 'utf8', function (err) {
    if (err) return console.log(err);
  });
   return eng_html;
   
  }
  inquirer
      .prompt([{
         
        message: 'Enter details',
        name: 'details'
          
      },
      {
        name: 'mngr_Name',  
        message: 'Enter manager name',
        default: 'irtaza'
          
      },
      {
         name: 'mngr_id', 
         message: 'Enter manager id',
         default: '1'
          
      },
      {
        
        name: "mngr_Email", 
        message: 'Enter manager email',
        default: 'irtaza@fakeemail.com'
          
      },
      {
         name: 'mngr_Office_Number', 
         message: 'Enter manager office number',
         default: '123456'
      },

      ]).then(answers => {

          var mng_details = new Manager(answers.mngr_Name, answers.mngr_id, answers.mngr_Email, answers.mngr_Office_Number);
      
           choose();
          fs.readFile('Output/Team.html',
          // callback function that is called when reading file is done
          function(err, data) { 
              if (err) throw err;
            // var OldHTML= data.toString();
            // console.log(OldHTML);
            
            
              
      
           

            //  function show_employees()
            //  {

            //     var list='<div class="row" >';
            //     list+=disp_intern();
            //     list+=disp_eng();
            //     list+=disp_eng();
            //     list+=disp_intern();
            //     list+='</div>';
            //     return list;

            //  }
           
            
            
             var starthtml='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <title>Team</title> <style> .manager{ padding-top:10px; background-color:#00d5ff; } .intern{ padding-top:10px; background-color:#00ffa7; } .engineer{ padding-top:10px; background-color:#ff004c; } </style> </head> <body>'
            var endhtml='</body></html>';
             // //Store  html in result  variable
             var result = starthtml+dip_manager(answers.mngr_Name, answers.mngr_id, answers.mngr_Email, answers.mngr_Office_Number)+endhtml;
      
            // //write new html to file
             fs.writeFile('Output/Team.html', result, 'utf8', function (err) {
                if (err) return console.log(err);
              });

      
          }
        )

      });
//}
function choose() {// choose team members
  inquirer
      .prompt([{
          type: 'list',
          name: 'team_member_choice',
          message: 'Choose Team members',
          choices: ['Engineer', 'Intern', 'Get Results'],
      }
      ]).then(answers => {
          if (answers.team_member_choice == 'Engineer') {
              eng_input();
          }
          else if (answers.team_member_choice == 'Intern') {
              int_input();
          }
          else {
              
          }
      });
}
function eng_input() { //engineer input
  inquirer
      .prompt([

          {
             name: 'Details',
             message: 'Enter Engineer details',
              

          },

          {
             name: 'eng_Name', 
             message: 'Enter Engineer name',
             default: 'Irtaza',  
          },
          {
             name: 'eng_id', 
             message: 'Enter Engineer id',
             default: '2',
          },
          {
             name: 'eng_email', 
             message: 'Enter Engineer email',
             default: 'irtaza_eng@fakeemail.com', 
          },
          {
             name: 'eng_Git', 
             message: 'Enter Engineer github id',
             default: 'irtzmalik' ,
          },
      ]).then(answers => {
          
          var eng_details = new engclass(answers.eng_Name, answers.eng_id, answers.eng_email, answers.eng_Git);
          
          var rslt= disp_eng(answers.eng_Name, answers.eng_id, answers.eng_email, answers.eng_Git);
        
          fs.appendFile('Output/Team.html', rslt, function (err) {
            if (err) throw err;
            
        });
        choose();

      });

}

function int_input() {// intern input
  inquirer
      .prompt([
          {
              message: 'Enter intern details',
              name: 'Intern',
              

          },
          {
             name: 'int_Name', 
             message: 'Enter Intern name',
             default: 'Irtaza',
              
          },
          {
            name: 'int_id',
            message: 'Enter Intern id',
            default : '3',  
          },
          {
             name: 'int_email',  
             message: 'Enter Intern email',
             default: 'irtaza@fakeemail.com',
          },
          {
             name: 'int_school', 
             message: 'Enter Intern school',
             default: 'fakeschool', 
          },
      ]).then(answers => {
        
          var int_det = new Intern(answers.int_Name, answers.int_id, answers.int_email, answers.int_school);
          var rslt1= disp_intern(answers.int_Name, answers.int_id, answers.int_email, answers.int_school);
          fs.appendFile('Output/Team.html', rslt1, function (err) {
            if (err) throw err;
           
        });
        choose();
        

      });

}
