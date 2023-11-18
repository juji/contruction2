import './style.css'
import Ball from './ball'
import { registerEvents } from './events'

const canvas = document.querySelector('canvas')
const body = document.querySelector('body')

if(canvas && body) {

  let ball = new Ball(canvas,{
    width: window.innerWidth,
    height: window.innerHeight
  })

  registerEvents(
    ball,
    body
  )

  window.addEventListener('resize', () => {
    ball.changeBoundingBox({
      width: window.innerWidth,
      height: window.innerHeight
    })
  })

}