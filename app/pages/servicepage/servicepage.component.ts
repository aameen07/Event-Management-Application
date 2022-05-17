import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/book/order-details.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.component.html',
  styleUrls: ['./servicepage.component.css']
})
export class ServicepageComponent implements OnInit {

  public bookevent !: FormGroup

  constructor( private param:ActivatedRoute,private service:OrderDetailsService, private formBuilder:FormBuilder, private http : HttpClient, private router:Router) { }
  
  getServiceId:any;
  serviceData:any;

  ngOnInit(): void {

    this.getServiceId = this.param.snapshot.paramMap.get('id');
    console.log(this.getServiceId,'getservice')
    if(this.getServiceId)
    {
      this.serviceData =this.service.eventDetails.filter((value)=>{
        
        return value.id == this.getServiceId;

      });
      console.log(this.serviceData)
    }

    this.bookevent = this.formBuilder.group({
      fullname:['', Validators.required],
      mobile:['', Validators.required],
      peopleattending:['', Validators.required],
      specialmessage:['', Validators.required],
      address:['', Validators.required]
      })

  }
  

  Booking(){
    this.http.post<any>("http://localhost:3000/BookEvent",this.bookevent.value)
    .subscribe(res=>{
      alert("Booking successful")
      this.bookevent.reset();
      this.router.navigate(['services']);
    },err=>{
      alert("Something went wrong")
    })
  }

}



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { OrderDetailsService } from 'src/app/book/order-details.service';

// @Component({
//   selector: 'app-servicepage',
//   templateUrl: './servicepage.component.html',
//   styleUrls: ['./servicepage.component.css']
// })
// export class ServicepageComponent implements OnInit {

//   constructor( private param:ActivatedRoute,private service:OrderDetailsService) { }
//   getServiceId:any;
//   serviceData:any;
//   ngOnInit(): void {
//     this.getServiceId = this.param.snapshot.paramMap.get('id');
//     console.log(this.getServiceId,'getservice')
//     if(this.getServiceId)
//     {
//       this.serviceData =this.service.eventDetails.filter((value)=>{
        
//         return value.id == this.getServiceId;

//       });
//       console.log(this.serviceData)
//     }
//   }
  
//   booking(){
//     alert("Booking Successful!!!")
//   }

// }


