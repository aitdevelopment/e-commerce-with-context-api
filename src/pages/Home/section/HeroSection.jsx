import React from 'react'

const HeroSection = ({action}) => {

    const {open, setOpen} = action

    const modalOpener=()=>{
        setOpen(true)
    }
  return (
    <div>
        <button onClick={modalOpener}>Open Hero</button>
    </div>
  )
}

export default HeroSection