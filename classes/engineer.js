const Employee = require("./employee");


class Engineer extends Employee{
  
    constructor(name, id, email,github)
    
    {

        super(name,id, email); // calling varibles of employee class

        this.name = name;

        this.id=id;
        this.email=email;
        this.github = github;
        
    }
    getName()
    
    {
        return this.name;
    }
    getId()
    {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getGit_Id()
    {
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
    }

    module.exports = Engineer;