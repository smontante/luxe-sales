import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrowerDataService {

  public totalInvestmentProps:String;
  public ownPersonalResidence:Boolean;
  public taxableIncome:String;
  public selfEmployed:Boolean;
  public typeOfBusiness:String;
  public avgMonthlyDeps:String;
  public purchaseOrRefi:String;
  public targetDate:String;
  public purchasePrice:String;
  public leaseInfo:String;
  public annualLeaseAmt:String;
  public expectedMonthlyRent:String;
  public subjectPropertyStreet:String;
  public subjectPropertyCity:String;
  public subjectPropertyState:String;
  public subjectPropertyZip:String;
  public subjectPropertyAddress:String;
  public subjectPropertyType:String;
  public numOfUnits:String;
  public requestedLoanToValue:String;
  public requestedLoanAmt:String;
  public annualRealEstateTaxes:String;
  public annualHoaFees:String;
  public propertyInsuranceCosts:String;
  public usCitizenCheck:Boolean;
  public estimatedFicoScore:String;
  public majorCreditHit:String;
  public mortgageLates:Boolean;
  public refiPropertyValue:String;
  public rehabCosts:String;
  public existingLienAmount:String;
  public spanOfRent:String;
  public monthlyLeaseAmt:String;
  public currentMarketRents:String;

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
    },
    { 
      id: 3, name: 'show-taxable-income', 
      link: 'show-taxable-income', 
      header: '',
      question: 'Are you able to show enough taxable income?'
    },
    { 
      id: 4, name: 'self-employed', 
      link: 'self-employed', 
      header: '',
      question: 'Are you self employed and own your own business?'
    },
    { 
      id: 5, name: 'type-of-business', 
      link: 'type-of-business', 
      header: '',
      question: 'What type of business do you ?'
    },
    { 
      id: 6, name: 'avg-monthly-deposits', 
      link: 'avg-monthly-deposits', 
      header: '',
      question: 'What are your average monthly deposits?'
    },
    { 
      id: 7, name: 'purchase-or-refinance', 
      link: 'purchase-or-refinance', 
      header: '',
      question: 'Is there a particular property you are looking to purchase or refinance?'
    },
    { 
      id: 8, name: 'target-date', 
      link: 'target-date', 
      header: '',
      question: 'When are you looking to close?'
    },
    { 
      id: 9, name: 'purchase-price', 
      link: 'purchase-price', 
      header: '',
      question: 'What is the purchase price?'
    },
    { 
      id: 10, name: 'lease-info', 
      link: 'lease-info', 
      header: '',
      question: 'Is the property currently being leased?'
    },
    { 
      id: 11, name: 'annual-lease-amt', 
      link: 'annual-lease-amt', 
      header: '',
      question: 'What is the annual lease amount?'
    },
    { 
      id: 12, name: 'expected-monthly-rent', 
      link: 'expected-monthly-rent', 
      header: '',
      question: 'What is the expected monthly rent?'
    },
    { 
      id: 13, name: 'subject-property-address', 
      link: 'subject-property-address', 
      header: '',
      question: 'What is the subject property address?'
    },
    { 
      id: 14, name: 'subject-property-type', 
      link: 'subject-property-type', 
      header: '',
      question: 'What is the subject property type?'
    },
    { 
      id: 15, name: 'number-of-units', 
      link: 'number-of-units', 
      header: '',
      question: 'How many units are in your property?'
    },
    { 
      id: 16, name: 'requested-loan-to-value', 
      link: 'requested-loan-to-value', 
      header: '',
      question: 'What is the requested loan to value?'
    },
    { 
      id: 17, name: 'requested-loan-amount', 
      link: 'requested-loan-amount', 
      header: '',
      question: 'What is the requested loan amount?'
    },
    { 
      id: 18, name: 'annual-re-taxes', 
      link: 'annual-re-taxes', 
      header: '',
      question: 'What are your annual real estate taxes?'
    },
    { 
      id: 19, name: 'annual-hoa-fees', 
      link: 'annual-hoa-fees', 
      header: '',
      question: 'What are your annual HOA fees?'
    },
    { 
      id: 20, name: 'citizen-check', 
      link: 'citizen-check', 
      header: '',
      question: 'Are you a US citizen? (permanent/non-permanent resident ok)'
    },
    { 
      id: 21, name: 'estimated-fico-score', 
      link: 'estimated-fico-score', 
      header: '',
      question: 'What is your estimated FICO?'
    },
    { 
      id: 22, name: 'major-credit-hits', 
      link: 'major-credit-hits', 
      header: '',
      question: 'Anything major that affected your credit within 48 months?'
    },
    { 
      id: 23, name: 'major-mortgage-lates', 
      link: 'major-mortgage-lates', 
      header: '',
      question: 'Any 30 day mortgage lates this year?'
    },
    { 
      id: 24, name: 'refi-property-value', 
      link: 'refi-property-value', 
      header: '',
      question: 'What is the estimated property value?'
    },
    { 
      id: 25, name: 'rehab-costs', 
      link: 'rehab-costs', 
      header: '',
      question: 'What is the verifable rehab costs?'
    },
    { 
      id: 26, name: 'existing-lien-amount', 
      link: 'existing-lien-amount', 
      header: '',
      question: 'What is the existing lien amount?'
    },
    { 
      id: 27, name: 'span-of-rent', 
      link: 'span-of-rent', 
      header: '',
      question: 'How long has the property been rented for?'
    },
    { 
      id: 28, name: 'monthly-lease-amount', 
      link: 'monthly-lease-amount', 
      header: '',
      question: 'What is the monthly lease amount?'
    },
    { 
      id: 29, name: 'current-market-rent', 
      link: 'current-market-rent', 
      header: '',
      question: 'What is the current market rents for the property?'
    },
    {
      id: 30, name: 'requested-loan-amount', 
      link: 'requested-loan-amount', 
      header: '',
      question: 'What is the requested loan amount?'
    },
    {
      id: 31, name: 'property-insurance-costs', 
      link: 'property-insurance-costs', 
      header: '',
      question: 'What is the property insurance costs?'
    },
    {
      id: 32, name: 'confirm-borrower-summary', 
      link: 'confirm-borrower-summary', 
      header: '',
      question: 'Let me confirm the information I have is correct. Can I answer answer questions beforehand?'
    }
  ]

  constructor() { 
 
  }

  getValue() {
    let answers:any = {
      totalInvestmentProps: this.totalInvestmentProps,
      ownPersonalResidence: this.ownPersonalResidence,
      taxableIncome: this.taxableIncome,
      selftEmployed: this.selfEmployed,
      typeOfBusiness: this.typeOfBusiness,
      avgMonthlyDeps: this.avgMonthlyDeps,
      purchaseOrRefi: this.purchaseOrRefi,
      targetDate: this.targetDate,
      purchasePrice: this.purchasePrice,
      leaseInfo: this.leaseInfo,
      annualLeaseAmt: this.annualLeaseAmt,
      expectedMonthlyRent: this.expectedMonthlyRent,
      subjectPropertyAddress: this.subjectPropertyAddress,
      subjectPropertyType: this.subjectPropertyType,
      numOfUnits: this.numOfUnits,
      requestedLoanToValue: this.requestedLoanToValue,
      requestedLoanAmt: this.requestedLoanAmt,
      annualRealEstateTaxes: this.annualRealEstateTaxes,
      annualHoaFees: this.annualHoaFees,
      usCitizenCheck: this.usCitizenCheck,
      estimatedFicoScore: this.estimatedFicoScore,
      majorCreditHit: this.majorCreditHit,
      mortgageLates: this.mortgageLates,
      refiPropertyValue: this.refiPropertyValue,
      rehabCosts: this.rehabCosts,
      existingLienAmount: this.existingLienAmount,
      spanOfRent: this.spanOfRent,
      monthlyLeaseAmt: this.monthlyLeaseAmt,
      currentMarketRents: this.currentMarketRents,
      propertyInsuranceCosts: this.propertyInsuranceCosts
    }
    console.log('Borrower Details: ', answers);
  }

}
