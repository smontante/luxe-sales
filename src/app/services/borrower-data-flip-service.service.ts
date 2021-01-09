import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrowerDataFlipServiceService {

  public borrowerEntityFlip:String;
  public estimatedFicoFlip:String;
  public investmentPropertyFlip:String;
  public experienceFlip:String;
  public rentalExperienceFlip:String;
  public subjectPropertyStreetFlip:String;
  public subjectPropertyCityFlip:String;
  public subjectPropertyStateFlip:String;
  public subjectPropertyZipFlip:String;
  public subjectPropertyUnderContractFlip:Boolean;
  public subjectPropertyTypeFlip:String;
  public purchasePriceFlip:String;
  public estimatedPropertyValueFlip:String;
  public estimatedRehabCosts:String;
  public annualInsuranceCostFlip:String;
  public annualPropertyTaxesFlip:String;
  public annualHoaFeesFlip:String;
  public isPropertyLeasedFlip:Boolean;
  public currentMortgageBrokerFlip:Boolean;

  public questions:any =[
    { 
      id: 1, name: 'borrower-entity-flip', 
      link: 'borrower-entity-flip', 
      header: '',
      question: 'What is the name of your business (LLC or CORP)?'
    },
    { 
      id: 2, name: 'estimated-fico-flip', 
      link: 'estimated-fico-flip', 
      header: '',
      question: 'What is your estimated FICO?'
    },
    { 
      id: 3, name: 'investment-property-flip', 
      link: 'investment-property-flip', 
      header: '',
      question: 'How many rental properties do you own?'
    },
    { 
      id: 4, name: 'mortgage-broker-check-flip', 
      link: 'mortgage-broker-check-flip', 
      header: '',
      question: 'Are you a mortgage broker?'
    },
    { 
      id: 5, name: 'under-contract-flip', 
      link: 'under-contract-flip', 
      header: '',
      question: 'Is the property currently under contract?'
    },
    { 
      id: 6, name: 'experience-flip', 
      link: 'experience-flip', 
      header: '',
      question: 'How many flips have you completed in the last 36 months?'
    },
    { 
      id: 7, name: 'subject-property-street-flip', 
      link: 'subject-property-street-flip', 
      header: '',
      question: 'What street is the subject property on?'
    },
    { 
      id: 8, name: 'subject-property-city-flip', 
      link: 'subject-property-city-flip', 
      header: '',
      question: 'What city is the subject property in?'
    },
    { 
      id: 9, name: 'subject-property-state-flip', 
      link: 'subject-property-state-flip', 
      header: '',
      question: 'What state is the subject property in?'
    },
    { 
      id: 10, name: 'subject-property-zip-flip', 
      link: 'subject-property-zip-flip', 
      header: '',
      question: 'What zip code is the subject property in?'
    }
  ];

  constructor() { }
}
