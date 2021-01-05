import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrowerDataFlipServiceService {

  public borrowerEntityFlip:String;
  public estimatedFicoFlip:String;
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
      id: 1, name: 'owned-investment-properties', 
      link: 'owned-investment-properties', 
      header: '',
      question: 'How many investment properties do you currently own?'
    },
    { 
      id: 2, name: 'own-personal-residence', 
      link: 'own-personal-residence', 
      header: '',
      question: 'Do you own a personal residence?'
    }
  ];

  constructor() { }
}
