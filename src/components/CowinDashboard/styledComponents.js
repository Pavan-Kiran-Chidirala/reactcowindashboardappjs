// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  min-height: 100vh;
  max-height: 100%;
  background-color: #161625;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`
export const WebsiteLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`

export const WebsiteName = styled.h1`
  color: #2cc6c6;
  font-size: 16px;
`

export const MainHeading = styled.h1`
  color: #cbd5e1;
  font-size: 20px;
`
export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 40%;
  height: 20%;
`

export const FailureHeading = styled.h1`
  color: #ffffff;
  font-size: 25px;
`
