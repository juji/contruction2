import './style.css'
import Ball from './ball'
import MouseEvents from './mouse-events'

const canvas = document.querySelector('canvas')
const body = document.querySelector('body')

if(canvas && body) {

  let ball = new Ball(canvas,{
    width: window.innerWidth,
    height: window.innerHeight
  })

  new MouseEvents(body, {
    onMouseDown: (e:MouseEvent) => {
      ball.slingShotInit(
        e.pageX,
        e.pageY
      )
    },
    onMouseMove: (e:MouseEvent) => {
      ball.slingShotPull(
        e.pageX,
        e.pageY
      )
    },
    onMouseUp: (e:MouseEvent) => {
      ball.slingShotRelease(
        e.pageX,
        e.pageY
      )
    },
  })

  window.addEventListener('resize', () => {
    ball.changeBoundingBox({
      width: window.innerWidth,
      height: window.innerHeight
    })
  })

}