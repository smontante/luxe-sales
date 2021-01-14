import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunnelDataService {

  public sales_team_reponse:string = `
    Thank's for calling back... We've spoken in the past in regards to fix and flip financing. Just following up, and seeing how the investing is going for you?
  `;
  
  public marketing_efforts:any = [
    { 
      channel:'facebook', 
      name:'FB', 
      campaign: `
        Campaign: Rental Loans, Rates Starting at: 4.99%, Up to 85% LTV 
      `,
      sales_response: `
        Thanks for contacting us back! You may have spoke to Alex our
        social media manager... Just following up to see how the investing is going for you?
      `
      },
    { 
      channel: 'rvm', 
      name:'RVM', 
      campaign: `
        Campaign: Hey, it's Shaun from LuxeBanc, just calling to see if you had any fix and flip or 
        rental scenarios we can help with. We just lowered our rates and increased leverage. 
        Call me back at (310) 730-1914 , thanks!
      `,
      sales_response: `
        Thank's for calling back! We've spoken in the past in regards to fix and flip financing. 
        Just following up to see how the investing is going for you?
      `
    },
    { 
      channel: 'sms',
      name:'SMS', 
      campaign: `
        Campaign: Hey, it's Shaun from LuxeBanc, just texting to see if you had any fix and flip or 
        rental scenarios we can help with. We just lowered our rates and increased leverage. 
        Call me back at (310) 730-1914 , thanks!
      `,
      sales_response: `
        Thank's for reaching back out! We've spoken in the past in regards to fix and flip financing. 
        Just following up to see how the investing is going for you?
      `
    }
  ];

  public products:any = [
    {
      name: 'Fix and Flip',
      ltv: 'Up to 85% LTV', 
      rates: 'Rates as low as 7.99%', 
      rehab: '100% of rehab costs', 
      amounts: 'Up to 2.5m',
      ppp: 'No prepayment penalties'
    },
    {
      name: 'Rentals',
      ltv: 'Up to 80% of LTV (75% cash out)', 
      rates: 'Rates as low as 4.99%', 
      types: 'Fixed Rate or Interest Only Options', 
      benefits: 'No Income | No W2 | No Tax Returns'
    }
  ]

  public funnel:any = [
    {
      id: 1,
      name: 'Not Interested',
      response: 'Youre not interested at all.. or.. just not right now'
    },
    {
      id: 2,
      name: 'Not Interested At All',
      response: 'Okay, no problem. Lets stay in touch in case anything changes. Whens a better time for us to connect?'
    },
    {
      id: 3,
      name: 'Not Interested Now',
      response: 'I understand, well the markets looking great! Are you looking to started anytime soon  ?'
    },
    {
      id: 4,
      name: 'Not Investing',
      response: 'No worries. We do have some of the lowest rates for investors. When are you looking to start?'
    }
  ]

  constructor() { }

  showMktDiv = {
    facebook : false,
    rvm : false,
    sms : false
  }

  showProductDiv = {
    bridge : false,
    rental : false
  }

}
