import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HangoutService } from '../../hangout.service';

@Component({
  selector: 'app-hangout',
  templateUrl: './hangout.component.html',
  styleUrls: ['./hangout.component.css']
})
export class HangoutComponent implements OnInit {
 
  constructor( private http: HttpClient , private hangoutService : HangoutService) { }

  ngOnInit() {
  
  }
   
  x = setInterval( function() {
    
        let nowTime = new Date().getTime();
        let thenTime = new Date('february 2, 2018 11:00:00').getTime();
        let remainingTime = Math.floor((thenTime - nowTime)/1000);
        
        let remainingDays = Math.floor(remainingTime / (24*60*60) );
      
        let remainingHours = Math.floor((remainingTime % (24*60*60))/(60*60)); 
      
        let remainingMinutes = Math.floor((((remainingTime % (24*60*60))%(60*60))/(60)));
      
        let remainingSeconds = Math.floor((((remainingTime % (24*60*60))%(60*60))%(60)));

        document.getElementById("demo").innerHTML = "<div style='width:100%'><div style='display:inline-block;width:33.33%'><div class='count-number' style='font-size:2rem; border-right:2px solid #ffffff; padding: 1% 0%;'>" + remainingDays + "</div><div class='count-text' style='font-size:1.15rem;'>Days</div></div><div style='display:inline-block;width:33.33%'><div class='count-number' style='font-size:2rem; border-right:2px solid #ffffff;padding: 1% 0%;'> " +
        remainingHours + "</div><div class='count-text' style='font-size:1.15rem;'>Hours</div></div><div style='display:inline-block; width:33.33%'><div class='count-number' style='font-size:2rem;padding: 1% 0%;'> " + remainingMinutes + "</div><div class='count-text' style='font-size:1.15rem;'>Minutes</div></div></div>";
            
      },1000);


    
   
 }

