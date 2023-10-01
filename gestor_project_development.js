class Project {
    constructor(name,desc,status){
        let _name = name;
        let _desc = desc;
        let _status = status;
    
    this.getName = () => _name;
    this.setName = (newName) => _name = newName;
    // this.setName = function(newName){     
    //     _name=newName;
    // };
    this.getDesc = () => _desc;
    this.setDesc = (newDesc) => _desc=newDesc;
    // this.setDesc = function(newDesc){
    //     _desc=newDesc;
    // };
    this.getStatus = () => _status;
    this.setStatus = (newStatus) => _status= newStatus;
    // this.setStatus = function(newStatus){
    //     _status=newStatus;
    // };
    }
}

class Gestor{
    constructor(projects) {
        this.projects=projects;
    }

    inProgressProject() {                                                      
        console.log("These are all the project in development: ")
        for (const pro of projects) {
            if(pro.getStatus()==="in progress"){
                console.log(`Name: ${pro.getName()}\nDescription: ${pro.getDesc()}\nStatus: ${pro.getStatus()}\n`);
            }
        }
    }
    //I assume the name can't be repeated
    addProject (newName,newDesc,newStatus) {                                             
        if(!(projects.find(project=>project.getName() == newName))){    
            let newP = new Project(newName,newDesc,newStatus);
            projects.push(newP);
        }else{
            console.log(`This project already exists (${newName})`);
        }
    }
    setProject(name,newName,newDesc,newStatus){                         
        let stop = false;
        for(let i =0 ; i < projects.length && !stop ; i++){
            if(projects[i].getName() == name){
                projects[i].setName(newName);
                projects[i].setDesc(newDesc);
                projects[i].setStatus(newStatus);
                stop=true;
            }
        }
        if(!stop){
            console.log(`This project does not exist (${name})`);
        }
    }
    deleteProject(name){
        let index =projects.findIndex(pro=>pro.getName()==name);
        index != -1 ? projects.splice(index,1) : console.log(`This project does not exist (${name})`);;
    } 
    allProject(){
        for (const pro of projects) {
        
                console.log(`Name: ${pro.getName()}\nDescription: ${pro.getDesc()}\nStatus: ${pro.getStatus()}\n`);
        
        }
    }

}

const project1 = new Project("P1","hello P1","in progress");
const project2 = new Project("P2","hello P2","in progress");
const project3 = new Project("P3","hello P3","completed");
const project4 = new Project("P4","hello P4","completed");
const project5 = new Project("P5","hello P5","in progress");
const project6 = new Project("P6","hello P6","in progress");

const projects = [project1,project2,project3,project4,project5,project6];
const gestor = new Gestor(projects);
gestor.inProgressProject();
gestor.addProject("P1","hola P1","in progress");
gestor.setProject("P1","P11","hola P11","completed");
gestor.deleteProject("P55");
gestor.deleteProject("P22");
gestor.deleteProject("P2");
gestor.deleteProject("P1");

gestor.allProject();
