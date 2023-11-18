import './style.css'
import Ball from './ball'
import { registerEvents } from './events'

const canvas = document.querySelector('canvas')
const main = document.querySelector('main')

if(canvas && main) {

  let ball = new Ball(canvas,{
    width: window.innerWidth,
    height: window.innerHeight
  })

  registerEvents(
    ball,
    main
  )

  window.addEventListener('resize', () => {
    ball.changeBoundingBox({
      width: window.innerWidth,
      height: window.innerHeight
    })
  })

}