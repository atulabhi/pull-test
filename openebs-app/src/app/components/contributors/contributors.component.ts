import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface userresponse{
  login:string;
  bio:string;
  company:string;
}
@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    this.http.get<userresponse>('https://api.github.com/repos/openebs/openebs/contributors?client_id=db5e3e3ede4e4174e0d6&client_secret=fdaad534cddc7373daf361a4d9d447ecdfb125ed').subscribe(data => {
      console.log(data);
      // console.log(data.bio);
      // console.log(data.company);
    });
  }

}
