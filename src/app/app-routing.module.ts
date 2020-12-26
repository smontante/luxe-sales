import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../app/pages/landing/landing.component';
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
import { ConfirmBorrowerSummaryComponent } from './pages/funnel/confirm-borrower-summary/confirm-borrower-summary.component';
import { SubmittedComponent } from './pages/funnel/submitted/submitted.component';

const routes: Routes = [
  { path: '', component: InvestmentPropertiesComponent },
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
  { path: 'monthly-lease-amt', component: MonthlyLeaseAmtComponent },
  { path: 'expected-monthly-rent', component: MonthlyMarketRentComponent },
  { path: 'subject-property-address', component: SubjPropertyComponent },
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
  { path: 'confirm-borrower-summary', component: ConfirmBorrowerSummaryComponent },
  { path: 'submitted', component: SubmittedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
