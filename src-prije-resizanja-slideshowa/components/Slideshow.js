import React, { Component } from 'react'
import styled from 'styled-components'

class Slideshow extends Component {
  state = {
    images: getImages(),
    activeId: 0,
    timerId: ''
  }
  render () {
    return (
      <>
        <SArrowLeft onClick={e => this.previousImage()}/>
        {this.renderSlideshow(this.state)}
        <SArrowRight onClick={e => this.nextImage()}/>
      </>
    )
  }

  componentDidMount () {
    const timerId = setInterval(this.nextImage, 5000)
    this.setState({
      timerId: timerId
    })
  }

  renderSlideshow = ({ images, activeId }) =>
    images.map((img, index) => <SImg img={img} activeId={activeId} key={index}/>)

  nextImage = () => {
    const limit = 6
    let activeId = this.state.activeId
    if (activeId === limit) {
      activeId = 0
    } else {
      activeId += 1
    }
    clearInterval(this.state.timerId)
    const timerId = setInterval(this.nextImage, 5000)
    this.setState({
      activeId: activeId,
      timerId: timerId
    })
  }

  previousImage = e => {
    const limit = 0
    let activeId = this.state.activeId
    if (activeId === limit) {
      activeId = 6
    } else {
      activeId -= 1
    }
    clearInterval(this.state.timerId)
    const timerId = setInterval(this.nextImage, 5000)
    this.setState({
      activeId: activeId,
      timerId: timerId
    })
  }
}

const SImg = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  grid-column: start / end;
  grid-row: 1 / 2;
  background-size: cover;
  background-position: center;
  width: 100%;
  transition: all 1.5s ease-in;
  opacity: ${props => props.activeId === props.img.id ? 1 : 0};
`

const SArrowRight = styled.div`
  grid-column: next-start / next-end;
  grid-row: 1 / 2;
  z-index: 1;
  &:hover {
    background-image: linear-gradient(to left, #00000064, #00000050);
  }
`

const SArrowLeft = styled.div`
  grid-column: previous-start / previous-end;
  grid-row: 1 / 2;
  z-index: 1;
  &:hover {
    background-image: linear-gradient(to right, #00000064, #00000050);
  }
`

  // background-image: linear-gradient(to bottom, #00000032, #00000019), url(http://localhost:4000/image/1.jpg);

const getImages = () => [...Array(7)].map((img, index) => {return { id: index, src: `${process.env.REACT_APP_SERVER}/images/slideshow/${index + 1}.jpg` }})

export default Slideshow
