export class Job {
  jobTitleText: string
  companyName: string
  companyLogoUrl: string
  locationName: string
  annualWage: number
  rating: number
  payPeriod: string
  payCurrency: string

  constructor(
    jobTitleText: string,
    companyName: string,
    companyLogoUrl: string,
    locationName: string,
    annualWage: number,
    rating: number,
    payPeriod: string,
    payCurrency: string,
  ) {
    this.jobTitleText = jobTitleText
    this.companyName = companyName
    this.companyLogoUrl = companyLogoUrl
    this.locationName = locationName
    this.annualWage = annualWage
    this.rating = rating
    this.payPeriod = payPeriod
    this.payCurrency = payCurrency
  }
}
