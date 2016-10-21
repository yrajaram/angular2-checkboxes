import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  private title = '2-way binding!';
  private logStr="";
  private mapStr = "";

  private map: Map<string, HTMLInputElement> = new Map<string, HTMLInputElement>();

  public headings = [
  {description:'One'},
  {description:'Two'},
  {description: 'Three'}
  ];

  public values = [
  {name: 'aa'},
  {name: 'bb'},
  {name: 'cc'}
  ];

  checkedMatrix(i,j,checked) {
    if (checked) {
      this.map.set(""+i+j, (<HTMLInputElement>document.getElementById(""+i+""+j)));
    } else {
      this.map.delete(""+i+j);
    }
    this.logStr+=i+","+j+" is "+ (checked?"checked":"unchecked")+'\n';
    this.logMap();
  }

  ok() {
    // Do some actual work here
  	this.logStr+='Ok pressed\n';
  }

  cancel() {
  	this.logStr+='Cancel pressed\n';
    this.map.forEach((value, key) => value.checked=false);
    this.map.clear();
    this.mapStr = "";
  }

  logMap() {
    this.mapStr = "";
    this.map.forEach((value, key) => this.mapStr += "Value at key "+key+" is "+value.checked+"\n");
  }
}
