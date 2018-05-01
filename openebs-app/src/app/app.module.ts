import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule , Routes } from '@angular/router';
import { HangoutService }  from './hangout.service';
import { OnlyRegisteredUserGuard } from './only-registered-user.guard';
import { RouterLinkActive } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HangoutComponent } from './components/hangout/hangout.component';
import { Hangout1Component } from './components/hangout/hangout1/hangout1.component';
import { Hangout2Component } from './components/hangout/hangout2/hangout2.component';
import { Hangout3Component } from './components/hangout/hangout3/hangout3.component';
import { Hangout4Component } from './components/hangout/hangout4/hangout4.component';
import { ThankyouComponent } from './components/hangout/thankyou/thankyou.component';
import { ContributorsComponent } from './components/contributors/contributors.component';
import { MongodbComponent } from './components/workloads/mongodb/mongodb.component';
import { WorkloadsComponent } from './components/workloads/workloads.component';
import { PerconaComponent } from './components/workloads/percona/percona.component';
import { RabbitmqComponent } from './components/workloads/rabbitmq/rabbitmq.component';
import { KafkaComponent } from './components/workloads/kafka/kafka.component';
import { GaleraComponent } from './components/workloads/galera/galera.component';
import { JenkinsComponent } from './components/workloads/jenkins/jenkins.component';
import { JupyterComponent } from './components/workloads/jupyter/jupyter.component';
import { CouchbaseComponent } from './components/workloads/couchbase/couchbase.component';
import { CockroachdbComponent } from './components/workloads/cockroachdb/cockroachdb.component';
import { RedisComponent } from './components/workloads/redis/redis.component';
import { CassandraComponent } from './components/workloads/cassandra/cassandra.component';
import { PostgrsqlComponent } from './components/workloads/postgrsql/postgrsql.component';




import { HackfestComponent } from './components/hackthon/hackfest/hackfest.component';
import { CafeComponent } from './components/cafe/cafe.component';
import { CareersComponent } from './components/careers/careers.component';



import { HacktoberfestComponent } from './components/hackthon/hacktoberfest/hacktoberfest.component';

import { EventsComponent } from './components/events/events.component';
import { Eventjanuary2018Component } from './components/events/eventjanuary2018/eventjanuary2018.component';
import { Eventfebruary2018Component } from './components/events/eventfebruary2018/eventfebruary2018.component';
import { Eventapril2018Component } from './components/events/eventapril2018/eventapril2018.component';
import { Eventjune2018Component } from './components/events/eventjune2018/eventjune2018.component';
import { Eventjuly2018Component } from './components/events/eventjuly2018/eventjuly2018.component';
import { Eventoctober2018Component } from './components/events/eventoctober2018/eventoctober2018.component';
import { Eventdecember2018Component } from './components/events/eventdecember2018/eventdecember2018.component';
import { Job1Component } from './components/careers/job1/job1.component';
import { Job2Component } from './components/careers/job2/job2.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { April2017Component } from './components/newsletter/april2017/april2017.component';
import { June2017Component } from './components/newsletter/june2017/june2017.component';
import { July2017Component } from './components/newsletter/july2017/july2017.component';
import { August2017Component } from './components/newsletter/august2017/august2017.component';
import { September2017Component } from './components/newsletter/september2017/september2017.component';
import { October2017Component } from './components/newsletter/october2017/october2017.component';
import { November2017Component } from './components/newsletter/november2017/november2017.component';
import { December2017Component } from './components/newsletter/december2017/december2017.component';



const appRoutes : Routes  = [
  // {
  //   path: '', component:HomeComponent
  // },
  {
    path: 'hangout' , component:HangoutComponent
  },
  {
    path: 'hangout/1' , component:Hangout1Component
  },
  {
    path: 'hangout/2' , component:Hangout2Component
  },
  {
    path: 'hangout/3' , component:Hangout3Component
  },
  {
    path: 'hangout/4' , component:Hangout4Component
  },
  {
    path:'careers' , component:CareersComponent
  },
  {
    path:'careers/1' , component:Job1Component
  },
  {
    path:'careers/2' , component:Job2Component
  },
  {
     path: 'cafe' , component:CafeComponent
  },
  
  {
    path: 'events' , component:EventsComponent,
  },
  {
      path:'events/december', component: Eventdecember2018Component
  },
    {
      path:'events/october',component: Eventoctober2018Component
    },
    {
      path:'events/july',component: Eventjuly2018Component
    },
    {
      path:'events/june',component:  Eventjune2018Component
    },
    {
      path:'events/april',component: Eventapril2018Component
    },
    {
      path:'events/february',component: Eventfebruary2018Component
    },
    {
      path:'events/january',component: Eventjanuary2018Component
    },
  
  {
    path: 'hangout/thankyou' , component:ThankyouComponent
    
  },
  {
    path:'hackthon/hacktoberfest' , component:HacktoberfestComponent
  },
  {
    path:'hackthon/hackfest' , component:HackfestComponent
  },
  {
    path:'newsletter' , component:NewsletterComponent,
    children: [
      {
        path: '' , component:December2017Component
      },
      {
        path: 'april2017' , component:April2017Component
      },
      {
        path: 'june2017' , component:June2017Component
      },
      {
        path: 'july2017' , component:July2017Component
      },
      {
        path: 'august2017' , component:August2017Component
      },
      {
        path: 'september2017' , component:September2017Component
      },
      {
        path: 'october2017' , component:October2017Component
      },
      {
        path: 'november2017' , component:November2017Component
      },
      {
        path: 'december2017' , component:December2017Component
      }
      
    ]

  },

  {
    path:'' , component:HomeComponent,
    children: [
      { 
        path:'' , component:JenkinsComponent,
      },

      {
        path:'mongodb',
        component:MongodbComponent,
              
      },
      {
        path:'percona',
        component:PerconaComponent,
       
      },
      {
        path:'rabbitmq',
        component:RabbitmqComponent,
       
      },
      {
        path:'kafka',
        component:KafkaComponent
      },
      {
        path:'galera',
        component:GaleraComponent
      },
      {
        path:'jenkins',
        component:JenkinsComponent
      },
      {
        path:'jupyter',
        component:JupyterComponent
      },
      {
        path:'couchbase',
        component:CouchbaseComponent
      },
      {
        path:'redis',
        component:RedisComponent
      },
      {
        path:'cassandra',
        component:CassandraComponent
      },
      {
        path:'postgresql',
        component:PostgrsqlComponent
      },
      {
        path:'cockroachdb',
        component:CockroachdbComponent
      }
    ]
  }
  ,
  {
    path: '**' , redirectTo:''
  }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    HangoutComponent,
    Hangout4Component,
    ThankyouComponent,
    ContributorsComponent,
    MongodbComponent,
    WorkloadsComponent,
    PerconaComponent,
    RabbitmqComponent,
    KafkaComponent,
    GaleraComponent,
    JenkinsComponent,
    JupyterComponent,
    CouchbaseComponent,
    CockroachdbComponent,
    RedisComponent,
    CassandraComponent,
    PostgrsqlComponent,
    Hangout1Component,
    Hangout2Component,
    Hangout3Component,
    HackfestComponent,
    CafeComponent,
    CareersComponent,
    EventsComponent,   
    HacktoberfestComponent,
    Eventjanuary2018Component,
    Eventfebruary2018Component,
    Eventapril2018Component,
    Eventjune2018Component,
    Eventjuly2018Component,
    Eventoctober2018Component,
    Eventdecember2018Component,
    Job1Component,
    Job2Component,
    NewsletterComponent,
    April2017Component,
    June2017Component,
    July2017Component,
    August2017Component,
    September2017Component,
    October2017Component,
    November2017Component,
    December2017Component,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers: [HangoutService , OnlyRegisteredUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
