import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { Repos } from './repos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userName:string="cloudsony999";
  repos!:Repos[];
  loading:boolean=false;
  errorMessage!:string
  
  constructor(private gs:GithubService){

  }

  public getRepos()
  {
    this.loading=true;
    this.errorMessage="";
    this.gs.getRepos(this.userName).subscribe(
      (response)=>{this.repos=response;
      },(error)=>{
      this.errorMessage=error;
      this.loading=false;
    },
    ()=>{
      this.loading=false;
    })
  }
  ngOnInit(){
    
  }
  }
