const fs = require("fs");
const setHTML = require("./setHtml");
const engclass = require("./classes/engineer");
const Manager = require("./classes/manager");
const Intern = require("./classes/intern");
const Emp = require("./classes/employee");
const cheerio = require('cheerio');
const inquirer = require("inquirer");


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
        message: "Enter manager email",
        default: 'irtaza@fakeemail.com'
          
      },
      {
         name: "mngr_Office_Number", 
         message: "Enter manager office number",
         default: '123456'
      },

      ]).then(answers => {

          var mng_details = new Manager(answers.mngr_Name, answers.mngr_id, answers.mngr_Email, answers.mngr_Office_Number);
      
          fs.readFile('Manager.html',
         
          function(err, data) { 
              if (err) throw err;
      
           
             const $ = cheerio.load(data)
      
            
              
      
            // //setting properties
       
             $('#mang_ID').text(`${answers.mngr_id}`)
         
            
      
      
            // //Store raw html in result  variable
             var result = $.html()
      
            // //write new html to file
             fs.writeFile('Manager.html', result, 'utf8', function (err) {
                if (err) return console.log(err);
              });
      
          }
        )

      });





