import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BorrowerSummaryComponent } from './components/borrower-summary/borrower-summary.component';
import { InvestmentPropertiesComponent } from './pages/questions/investment-properties/investment-properties.component';
import { PersonalResidenceComponent } from './pages/questions/personal-residence/personal-residence.component';
import { TaxableIncomeComponent } from './pages/questions/taxable-income/taxable-income.component';
import { SelfEmployedComponent } from './pages/questions/self-employed/self-employed.component';
import { TypeOfBusinessComponent } from './pages/questions/type-of-business/type-of-business.component';
import { AvgMonthlyDepComponent } from './pages/questions/avg-monthly-dep/avg-monthly-dep.component';
import { PurchaseOrRefinanceComponent } from './pages/questions/purchase-or-refinance/purchase-or-refinance.component';
import { PurchasePriceComponent } from './pages/questions/purchase-price/purchase-price.component';
import { PropertyLeaseComponent } from './pages/questions/property-lease/property-lease.component';
import { AnnualLeaseAmtComponent } from './pages/questions/annual-lease-amt/annual-lease-amt.component';
import { MonthlyMarketRentComponent } from './pages/questions/monthly-market-rent/monthly-market-rent.component';
import { SubjPropertyComponent } from './pages/questions/subj-property/subj-property.component';
import { PropertyTypeComponent } from './pages/questions/property-type/property-type.component';
import { NumOfUnitsComponent } from './pages/questions/num-of-units/num-of-units.component';
import { RequestedLoanToValueComponent } from './pages/questions/requested-loan-to-value/requested-loan-to-value.component';
import { AnnualTaxesComponent } from './pages/questions/annual-taxes/annual-taxes.component';
import { AnnualPropertyInsuranceComponent } from './pages/questions/annual-property-insurance/annual-property-insurance.component';
import { AnnualHoaFeesComponent } from './pages/questions/annual-hoa-fees/annual-hoa-fees.component';
import { UsCitizenComponent } from './pages/questions/us-citizen/us-citizen.component';
import { EstimatedFicoComponent } from './pages/questions/estimated-fico/estimated-fico.component';
import { PriorCreditDingsComponent } from './pages/questions/prior-credit-dings/prior-credit-dings.component';
import { MortgageLatesComponent } from './pages/questions/mortgage-lates/mortgage-lates.component';
import { EstimatedPropValueComponent } from './pages/questions/estimated-prop-value/estimated-prop-value.component';
import { RehabCostsComponent } from './pages/questions/rehab-costs/rehab-costs.component';
import { ExistingLienAmtComponent } from './pages/questions/existing-lien-amt/existing-lien-amt.component';
import { LengthOfRentalComponent } from './pages/questions/length-of-rental/length-of-rental.component';
import { MonthlyLeaseAmtComponent } from './pages/questions/monthly-lease-amt/monthly-lease-amt.component';
import { CurrentMarketRentsComponent } from './pages/questions/current-market-rents/current-market-rents.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TargetDateComponent } from './pages/questions/target-date/target-date.component';
import { RequestedLoanAmountComponent } from './pages/questions/requested-loan-amount/requested-loan-amount.component';
import { PropertyInsuranceCostComponent } from './pages/questions/property-insurance-cost/property-insurance-cost.component';
import { ConfirmBorrowerSummaryComponent } from './pages/funnel/confirm-borrower-summary/confirm-borrower-summary.component';
import { SubmittedComponent } from './pages/funnel/submitted/submitted.component';
import { MarketingChannelComponent } from './pages/funnel/marketing-channel/marketing-channel.component';
import { InterestedComponent } from './pages/funnel/interested/interested.component';
import { NotInterestedComponent } from './pages/funnel/not-interested/not-interested.component';
import { NotInvestingComponent } from './pages/funnel/not-investing/not-investing.component';
import { ProductsComponent } from './pages/funnel/products/products.component';
import { BorrowerSummaryRefiComponent } from './components/borrower-summary-refi/borrower-summary-refi.component';
import { BorrowerSummaryFlipComponent } from './components/borrower-summary-flip/borrower-summary-flip.component';
import { SubjectPropertyStreetComponent } from './pages/questions/subject-property-street/subject-property-street.component';
import { SubjectPropertyCityComponent } from './pages/questions/subject-property-city/subject-property-city.component';
import { SubjectPropertyStateComponent } from './pages/questions/subject-property-state/subject-property-state.component';
import { SubjectPropertyZipComponent } from './pages/questions/subject-property-zip/subject-property-zip.component';
import { BorrowersEntityComponent } from './pages/questions/borrowers-entity/borrowers-entity.component';
import { BorrowerEntityFlipComponent } from './pages/flip-questions/borrower-entity-flip/borrower-entity-flip.component';
import { EstimatedFicoFlipComponent } from './pages/flip-questions/estimated-fico-flip/estimated-fico-flip.component';
import { ExperienceFlipComponent } from './pages/flip-questions/experience-flip/experience-flip.component';
import { RentalExperienceFlipComponent } from './pages/flip-questions/rental-experience-flip/rental-experience-flip.component';
import { SubjectPropertyStreetFlipComponent } from './pages/flip-questions/subject-property-street-flip/subject-property-street-flip.component';
import { SubjectPropertyCityFlipComponent } from './pages/flip-questions/subject-property-city-flip/subject-property-city-flip.component';
import { SubjectPropertyStateFlipComponent } from './pages/flip-questions/subject-property-state-flip/subject-property-state-flip.component';
import { SubjectPropertyZipFlipComponent } from './pages/flip-questions/subject-property-zip-flip/subject-property-zip-flip.component';
import { MortgageBrokerCheckComponent } from './pages/flip-questions/mortgage-broker-check/mortgage-broker-check.component';
import { UnderContractFlipComponent } from './pages/flip-questions/under-contract-flip/under-contract-flip.component';
import { PurchasePriceFlipComponent } from './pages/flip-questions/purchase-price-flip/purchase-price-flip.component';
import { EstimatedValueFlipComponent } from './pages/flip-questions/estimated-value-flip/estimated-value-flip.component';
import { RehabCostsFlipComponent } from './pages/flip-questions/rehab-costs-flip/rehab-costs-flip.component';
import { ActiveLeaseFlipComponent } from './pages/flip-questions/active-lease-flip/active-lease-flip.component';
import { AnnualInsuraceFlipComponent } from './pages/flip-questions/annual-insurace-flip/annual-insurace-flip.component';
import { AnnualPropertyTaxesFlipComponent } from './pages/flip-questions/annual-property-taxes-flip/annual-property-taxes-flip.component';
import { AnnualHoaFeesFlipComponent } from './pages/flip-questions/annual-hoa-fees-flip/annual-hoa-fees-flip.component';
import { InvestmentPropertyFlipsComponent } from './pages/flip-questions/investment-property-flips/investment-property-flips.component';
import { ConfirmBorrowerSummaryFlipComponent } from './pages/funnel/confirm-borrower-summary-flip/confirm-borrower-summary-flip.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BorrowerSummaryComponent,
    InvestmentPropertiesComponent,
    PersonalResidenceComponent,
    TaxableIncomeComponent,
    SelfEmployedComponent,
    TypeOfBusinessComponent,
    AvgMonthlyDepComponent,
    PurchaseOrRefinanceComponent,
    PurchasePriceComponent,
    PropertyLeaseComponent,
    AnnualLeaseAmtComponent,
    MonthlyMarketRentComponent,
    SubjPropertyComponent,
    PropertyTypeComponent,
    NumOfUnitsComponent,
    RequestedLoanToValueComponent,
    AnnualTaxesComponent,
    AnnualPropertyInsuranceComponent,
    AnnualHoaFeesComponent,
    UsCitizenComponent,
    EstimatedFicoComponent,
    PriorCreditDingsComponent,
    MortgageLatesComponent,
    EstimatedPropValueComponent,
    RehabCostsComponent,
    ExistingLienAmtComponent,
    LengthOfRentalComponent,
    MonthlyLeaseAmtComponent,
    CurrentMarketRentsComponent,
    LandingComponent,
    TargetDateComponent,
    RequestedLoanAmountComponent,
    PropertyInsuranceCostComponent,
    ConfirmBorrowerSummaryComponent,
    SubmittedComponent,
    MarketingChannelComponent,
    InterestedComponent,
    NotInterestedComponent,
    NotInvestingComponent,
    ProductsComponent,
    BorrowersEntityComponent,
    BorrowerSummaryRefiComponent,
    BorrowerSummaryFlipComponent,
    SubjectPropertyStreetComponent,
    SubjectPropertyCityComponent,
    SubjectPropertyStateComponent,
    SubjectPropertyZipComponent,
 
    BorrowerEntityFlipComponent,
    EstimatedFicoFlipComponent,
    ExperienceFlipComponent,
    RentalExperienceFlipComponent,
    SubjectPropertyStreetFlipComponent,
    SubjectPropertyCityFlipComponent,
    SubjectPropertyStateFlipComponent,
    SubjectPropertyZipFlipComponent,
    MortgageBrokerCheckComponent,
    UnderContractFlipComponent,
    PurchasePriceFlipComponent,
    EstimatedValueFlipComponent,
    RehabCostsFlipComponent,
    ActiveLeaseFlipComponent,
    AnnualInsuraceFlipComponent,
    AnnualPropertyTaxesFlipComponent,
    AnnualHoaFeesFlipComponent,
    InvestmentPropertyFlipsComponent,
    ConfirmBorrowerSummaryFlipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
