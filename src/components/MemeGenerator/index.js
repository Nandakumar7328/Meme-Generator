import {Component} from 'react'
import {
  MainContainer,
  FormContainer,
  FormList,
  LabelUrl,
  InputUrl,
  SelectSize,
  ButtonElement,
  ImageContainer,
  TopHeading,
  MainHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList.optionId,
    memeUrl: '',
    memeTopText: '',
    memeBottomText: '',
    memeFontSize: '',
  }

  onChangeUrlText = event => {
    this.setState({url: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {url, topText, bottomText, fontSize} = this.state
    this.setState({
      memeUrl: url,
      memeTopText: topText,
      memeBottomText: bottomText,
      memeFontSize: fontSize,
    })
  }

  render() {
    const {
      url,
      topText,
      bottomText,
      fontSize,
      memeUrl,
      memeTopText,
      memeBottomText,
      memeFontSize,
    } = this.state
    console.log(fontSize)
    return (
      <MainContainer>
        <FormContainer>
          <MainHeading>Meme Generator</MainHeading>
          <FormList as="form" onSubmit={this.onSubmitForm}>
            <LabelUrl htmlFor="imageUel">Image URL</LabelUrl>
            <InputUrl
              type="text"
              id="imageUel"
              placeholder="Enter the Image URL"
              value={url}
              onChange={this.onChangeUrlText}
            />
            <LabelUrl htmlFor="topText"> Top Text</LabelUrl>
            <InputUrl
              type="text"
              id="topText"
              placeholder="Enter the Top Text"
              value={topText}
              onChange={this.onChangeTopText}
            />
            <LabelUrl htmlFor="bottomText"> Bottom Text</LabelUrl>
            <InputUrl
              type="text"
              id="bottomText"
              placeholder="Enter the Bottom Text"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
            <LabelUrl htmlFor="fontSize"> Font Size</LabelUrl>
            <SelectSize
              id="fontSize"
              value={fontSize}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachItem => (
                <option value={eachItem.optionId} key={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </SelectSize>
            <ButtonElement type="submit">Generate</ButtonElement>
          </FormList>
        </FormContainer>
        <ImageContainer data-testid="meme" bgImage={memeUrl}>
          <TopHeading textSize={memeFontSize}> {memeTopText}</TopHeading>
          <TopHeading textSize={memeFontSize}> {memeBottomText}</TopHeading>
        </ImageContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
