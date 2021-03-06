import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketingChannelComponent } from '../app/pages/funnel/marketing-channel/marketing-channel.component';
import { InvestmentPropertiesComponent } from '../app/pages/questions/investment-properties/investment-properties.component';
import { AvgMonthlyDepComponent } from './pages/questions/avg-monthly-dep/avg-monthly-dep.component';
import { MonthlyLeaseAmtComponent } from './pages/questions/monthly-lease-amt/monthly-lease-amt.component';
import { MonthlyMarketRentComponent } from './pages/questions/monthly-market-rent/monthly-market-rent.component';
import { NumOfUnitsComponent } from './pages/questions/num-of-units/num-of-units.component';
import { PersonalResidenceComponent } from './pages/questions/personal-residence/personal-residence.component';
import { PropertyLeaseComponent } from './pages/questions/property-lease/property-lease.component';
import { PropertyTypeComponent } from './pages/questions/property-type/property-type.component';
import { PurchaseOrRefinanceComponent } from './pages/questions/purchase-or-refinance/purchase-or-refinance.component';
import { PurchasePriceComponent } from './pages/questions/purchase-price/purchase-price.component';
import { RequestedLoanAmountComponent } from './pages/questions/requested-loan-amount/requested-loan-amount.component';
import { RequestedLoanToValueComponent } from './pages/questions/requested-loan-to-value/requested-loan-to-value.component';
import { SelfEmployedComponent } from './pages/questions/self-employed/self-employed.component';
import { SubjPropertyComponent } from './pages/questions/subj-property/subj-property.component';
import { SubjectPropertyStreetComponent } from './pages/questions/subject-property-street/subject-property-street.component';
import { TargetDateComponent } from './pages/questions/target-date/target-date.component';
import { TaxableIncomeComponent } from './pages/questions/taxable-income/taxable-income.component';
import { TypeOfBusinessComponent } from './pages/questions/type-of-business/type-of-business.component';
import { AnnualTaxesComponent } from './pages/questions/annual-taxes/annual-taxes.component';
import { PropertyInsuranceCostComponent } from './pages/questions/property-insurance-cost/property-insurance-cost.component';
import { AnnualHoaFeesComponent } from './pages/questions/annual-hoa-fees/annual-hoa-fees.component';
import { UsCitizenComponent } from './pages/questions/us-citizen/us-citizen.component';
import { EstimatedFicoComponent } from './pages/questions/estimated-fico/estimated-fico.component';
import { PriorCreditDingsComponent } from './pages/questions/prior-credit-dings/prior-credit-dings.component';
import { MortgageLatesComponent } from './pages/questions/mortgage-lates/mortgage-lates.component';
import { EstimatedPropValueComponent } from './pages/questions/estimated-prop-value/estimated-prop-value.component';
import { ConfirmBorrowerSummaryComponent } from './pages/funnel/confirm-borrower-summary/confirm-borrower-summary.component';
import { SubmittedComponent } from './pages/funnel/submitted/submitted.component';
import { ExistingLienAmtComponent } from './pages/questions/existing-lien-amt/existing-lien-amt.component';
import { InterestedComponent } from './pages/funnel/interested/interested.component';
import { ProductsComponent } from './pages/funnel/products/products.component';
import { RehabCostsComponent } from './pages/questions/rehab-costs/rehab-costs.component';
import { LengthOfRentalComponent } from './pages/questions/length-of-rental/length-of-rental.component';
import { SubjectPropertyCityComponent } from './pages/questions/subject-property-city/subject-property-city.component';
import { SubjectPropertyStateComponent } from './pages/questions/subject-property-state/subject-property-state.component';
import { SubjectPropertyZipComponent } from './pages/questions/subject-property-zip/subject-property-zip.component'; 
import { BorrowerEntityFlipComponent } from './pages/flip-questions/borrower-entity-flip/borrower-entity-flip.component';
import { EstimatedFicoFlipComponent } from './pages/flip-questions/estimated-fico-flip/estimated-fico-flip.component';
import { InvestmentPropertyFlipsComponent } from './pages/flip-questions/investment-property-flips/investment-property-flips.component';
import { MortgageBrokerCheckComponent } from './pages/flip-questions/mortgage-broker-check/mortgage-broker-check.component';
import { UnderContractFlipComponent } from './pages/flip-questions/under-contract-flip/under-contract-flip.component';
import { ExperienceFlipComponent } from './pages/flip-questions/experience-flip/experience-flip.component';
import { SubjectPropertyStreetFlipComponent } from './pages/flip-questions/subject-property-street-flip/subject-property-street-flip.component';
import { SubjectPropertyCityFlipComponent } from './pages/flip-questions/subject-property-city-flip/subject-property-city-flip.component';
import { SubjectPropertyStateFlipComponent } from './pages/flip-questions/subject-property-state-flip/subject-property-state-flip.component';
import { SubjectPropertyZipFlipComponent } from './pages/flip-questions/subject-property-zip-flip/subject-property-zip-flip.component'; 
import { ConfirmBorrowerSummaryFlipComponent } from './pages/funnel/confirm-borrower-summary-flip/confirm-borrower-summary-flip.component';
import { NotInterestedComponent } from './pages/funnel/not-interested/not-interested.component';
import { NotInvestingComponent } from './pages/funnel/not-investing/not-investing.component';
import { NotInterestedNowComponent } from './pages/funnel/not-interested-now/not-interested-now.component';
import { NotInterestedAtAllComponent } from './pages/funnel/not-interested-at-all/not-interested-at-all.component';
import { TeamComponent } from './pages/sidebar/team/team.component';
import { ContactFormComponent } from './pages/funnel/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', component: MarketingChannelComponent },
  { path: 'marketing-funnel', component: MarketingChannelComponent },
  { path: 'interested', component: InterestedComponent },
  { path: 'not-interested', component: NotInterestedComponent },
  { path: 'not-investing', component: NotInvestingComponent },
  { path: 'not-investing-now', component: NotInterestedNowComponent },
  { path: 'not-interested-at-all', component: NotInterestedAtAllComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'owned-investment-properties', component: InvestmentPropertiesComponent },
  { path: 'own-personal-residence', component: PersonalResidenceComponent },
  { path: 'purchase-or-refinance', component: PurchaseOrRefinanceComponent },
  { path: 'show-taxable-income', component: TaxableIncomeComponent },
  { path: 'self-employed', component: SelfEmployedComponent },
  { path: 'type-of-business', component: TypeOfBusinessComponent },
  { path: 'avg-monthly-deposits', component: AvgMonthlyDepComponent },
  { path: 'target-date', component: TargetDateComponent },
  { path: 'purchase-price', component: PurchasePriceComponent },
  { path: 'lease-info', component: PropertyLeaseComponent },
  { path: 'monthly-lease-amount', component: MonthlyLeaseAmtComponent },
  { path: 'expected-monthly-rent', component: MonthlyMarketRentComponent },
  { path: 'subject-property-address', component: SubjPropertyComponent },
  { path: 'subject-property-street', component: SubjectPropertyStreetComponent },
  { path: 'subject-property-city', component: SubjectPropertyCityComponent },
  { path: 'subject-property-state', component: SubjectPropertyStateComponent },
  { path: 'subject-property-zip', component: SubjectPropertyZipComponent },
  { path: 'property-type', component: PropertyTypeComponent },
  { path: 'number-of-units', component: NumOfUnitsComponent },
  { path: 'requested-loan-to-value', component: RequestedLoanToValueComponent },
  { path: 'requested-loan-amount', component: RequestedLoanAmountComponent },
  { path: 'annual-re-taxes', component: AnnualTaxesComponent },
  { path: 'property-insurance-costs', component: PropertyInsuranceCostComponent },
  { path: 'annual-hoa-fees', component: AnnualHoaFeesComponent },
  { path: 'citizen-check', component: UsCitizenComponent },
  { path: 'estimated-fico-score', component: EstimatedFicoComponent },
  { path: 'prior-credit-dings', component: PriorCreditDingsComponent },
  { path: 'major-mortgage-lates', component: MortgageLatesComponent },
  { path: 'refi-property-value', component: EstimatedPropValueComponent },
  { path: 'rehab-costs', component: RehabCostsComponent },
  { path: 'existing-lien-amount', component: ExistingLienAmtComponent },
  { path: 'span-of-rent', component: LengthOfRentalComponent },
  { path: 'confirm-borrower-summary', component: ConfirmBorrowerSummaryComponent },
  { path: 'submitted', component: SubmittedComponent },
  { path: 'borrower-entity-flip', component: BorrowerEntityFlipComponent },
  { path: 'estimated-fico-flip', component: EstimatedFicoFlipComponent },
  { path: 'investment-property-flips', component: InvestmentPropertyFlipsComponent },
  { path: 'mortgage-broker-check-flip', component: MortgageBrokerCheckComponent },
  { path: 'under-contract-flip', component: UnderContractFlipComponent },
  { path: 'experience-flip', component: ExperienceFlipComponent },
  { path: 'subject-property-street-flip', component: SubjectPropertyStreetFlipComponent },
  { path: 'subject-property-city-flip', component: SubjectPropertyCityFlipComponent },
  { path: 'subject-property-state-flip', component: SubjectPropertyStateFlipComponent },
  { path: 'subject-property-zip-flip', component: SubjectPropertyZipFlipComponent },
  { path: 'confirm-borrower-summary-flip', component: ConfirmBorrowerSummaryFlipComponent },
  { path: 'team', component: TeamComponent }
];

function getAddress() {
  this.subjectPropertyAddress = this.subjectPropertyStreet 
  + ' ,' + this.data.subjectPropertyCity 
  + ', ' + this.data.subjectPropertyState 
  + ', ' + this.data.subjectPropertyZip
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
