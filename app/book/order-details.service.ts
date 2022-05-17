import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  eventDetails = [
    {
      id:1,
      eventName:"Wedding",
      eventDetails:"food,programs,dancefloor",
      eventPrice:20000,
      eventImg:"https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },

    {
      id:2,
      eventName:"Birthday",
      eventDetails:"food,programs,dancefloor",
      eventPrice:25000,
      eventImg:"https://cdn.shopify.com/s/files/1/1060/3816/products/lucious-butter-scotch-cake_large.jpg?v=1643338807"
    },

    {
      id:3,
      eventName:"Boat parties",
      eventDetails:"food,programs,dancefloor",
      eventPrice:15000,
      eventImg:"https://images.unsplash.com/photo-1602867612779-3aaf54b425c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHklMjBib2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },

    {
      id:4,
      eventName:"DJ parties",
      eventDetails:"food,programs,dancefloor",
      eventPrice:30000,
      eventImg:"https://us.123rf.com/450wm/tsimkus/tsimkus1612/tsimkus161200028/66234717-crowd-concert-public-dancing.jpg?ver=6"
    },


    {
      id:5,
      eventName:"Fashion shows",
      eventDetails:"food,programs,dancefloor",
      eventPrice:45000,
      eventImg:"https://static.toiimg.com/photo/msid-86556990/86556990.jpg?130032"
    },

    {
      id:6,
      eventName:"Awards",
      eventDetails:"food,programs,dancefloor",
      eventPrice:25000,
      eventImg:"https://media.istockphoto.com/vectors/golden-sparkling-star-isolated-on-dark-luxury-horizontal-background-vector-id1178355686?k=20&m=1178355686&s=612x612&w=0&h=Qtv74bunoC46lAUjIDt4dqPS-zvrYGnZrKod-4D-7no="
    },

    {
      id:7,
      eventName:"Brand promotions",
      eventDetails:"food,programs,dancefloor",
      eventPrice:30000,
      eventImg:"https://5.imimg.com/data5/CV/LL/MY-42225133/brand-promotion-500x500.jpg"
    },
{
      id:8,
      eventName:"Anniversaries",
      eventDetails:"food,programs,dancefloor",
      eventPrice:25000,
      eventImg:"https://i1.fnp.com/assets/images/custom/quotes/anniversary-for-couple/anniversary-wishes-for-couple-1.jpg"
    },

    {
      id:9,
      eventName:"Product launch",
      eventDetails:"food,programs,dancefloor",
      eventPrice:20000,
      eventImg:"https://media.istockphoto.com/photos/product-launch-motivational-business-marketing-words-quotes-concept-picture-id1145940285?k=20&m=1145940285&s=612x612&w=0&h=EIkSQrL34zjWTHUtKC_ha4fTMnGGKMyOkPCpVT8fvbc="
    },

    {
      id:10,
      eventName:"Musical",
      eventDetails:"food,programs,dancefloor",
      eventPrice:25000,
      eventImg:"https://cdn1.vectorstock.com/i/1000x1000/97/75/musical-instruments-and-music-notes-in-background-vector-17039775.jpg"
    },


    {
      id:11,
      eventName:"Celebrity management",
      eventDetails:"food,programs,dancefloor",
      eventPrice:50000,
      eventImg:"https://5.imimg.com/data5/OH/HR/GLADMIN-65824530/celebrity-management-500x500.png"
    },
    {
      id:12,
      eventName:"Conference",
      eventDetails:"food,programs,dancefloor",
      eventPrice:20000,
      eventImg:"https://thumbs.dreamstime.com/b/speaker-business-conference-presentation-audience-hall-76183816.jpg"
    },
 
   

    
    
  ]
  
}
