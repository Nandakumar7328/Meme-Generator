import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
`
export const FormList = styled.form`
  display: flex;
  flex-direction: column;
`
export const LabelUrl = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
`
export const InputUrl = styled.input`
  width: 300px;
  height: 30px;
  border: solid 1px #d7dfe9;
  border-radius: 5px;
  outline: none;
  margin-bottom: 10px;
`
export const SelectSize = styled.select`
  background-color: transparent;
  width: 300px;
  height: 30px;
  border: solid 1px #d7dfe9;
  border-radius: 5px;
  outline: none;
  margin-bottom: 10px;
`
export const ButtonElement = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  outline: none;
  border-width: 0px;
  cursor: pointer;
  width: 150px;
  height: 30px;
  border-radius: 8px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 400px;
  min-height: 400px;
  background-size: cover;
  background-image: url(${props => props.bgImage});
`
export const TopHeading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: ${props => props.textSize}px;
`
export const MainHeading = styled.h1`
  font-size: 37px;
  font-weight: bold;
  color: #35469c;
`
