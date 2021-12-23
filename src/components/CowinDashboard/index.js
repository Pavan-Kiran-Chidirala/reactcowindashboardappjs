// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'

import VaccinationByGender from '../VaccinationByGender'

import VaccinationByAge from '../VaccinationByAge'

import {
  MainContainer,
  LoaderContainer,
  RowWrapper,
  WebsiteLogo,
  WebsiteName,
  MainHeading,
  SuccessContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
} from './styledComponents'

const appConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    appStatus: appConstants.initial,
    resultObject: {},
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok) {
      const data = await response.json()
      const newObject = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      const {last7DaysVaccination} = newObject
      const newLast7DaysVaccination = last7DaysVaccination.map(eachValue => ({
        vaccineDate: eachValue.vaccine_date,
        dose1: eachValue.dose_1,
        dose2: eachValue.dose_2,
      }))
      newObject.last7DaysVaccination = [...newLast7DaysVaccination]
      this.setState({appStatus: appConstants.success, resultObject: newObject})
    } else {
      this.setState({appStatus: appConstants.failure})
    }
  }

  successState = () => {
    const {resultObject} = this.state
    return (
      <>
        <VaccinationCoverage resultObject={resultObject} />
        <VaccinationByGender resultObject={resultObject} />
        <VaccinationByAge resultObject={resultObject} />
      </>
    )
  }

  failureState = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <FailureHeading>Something Went Wrong</FailureHeading>
    </FailureContainer>
  )

  appState = () => {
    const {appStatus} = this.state
    switch (appStatus) {
      case appConstants.success:
        return this.successState()
      case appConstants.failure:
        return this.failureState()
      case appConstants.initial:
        return (
          <LoaderContainer data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </LoaderContainer>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <MainContainer>
        <RowWrapper>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <WebsiteName>Co-WIN</WebsiteName>
        </RowWrapper>
        <MainHeading>CoWIN Vaccination in India</MainHeading>
        {this.appState()}
      </MainContainer>
    )
  }
}

export default CowinDashboard
