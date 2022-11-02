import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'employees management';
  employees=[
    {"name":"chema","position":"manager","email":"cham@gmail"},
    {"name":"javier","position":"designer","email":"jav@gmail"},
    {"name":"federico","position":"programmer","email":"fede@gmail"}

  ];

  model:any={};
  model2:any={};
  myValue:number=0;
  msg:string="";
  hideUpdate:boolean=true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg="campo agregado";//pongo mensaje en la alerta
  }


  editEmployee(i:number):void{
    this.hideUpdate=false;//muestro esa parte y la pongo datos
    this.model2.name=this.employees[i].name;
    this.model2.position=this.employees[i].position;
    this.model2.email=this.employees[i].email;
    this.myValue=i;
    
    
  }

  deleteEmployee(i:number):void{
    let employee=this.employees[i];
    var answer=confirm("estas seguro de que quieres eliminar a "+employee.name+"?");//confirmacion
    if(answer){
      this.employees.splice(i,1);
    }
    this.msg="campo borrado";
  }

  updateEmployee():void{
    let i=this.myValue;
    this.employees[i]=this.model2;
    this.model2={};

    
    this.msg="campo actualizado";
    this.hideUpdate=true;

  }


  closeAlert():void{
    this.msg="";
  }

}
