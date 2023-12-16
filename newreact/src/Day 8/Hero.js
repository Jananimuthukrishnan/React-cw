import React from 'react'

export default function Hero({Heroname}) {
    if(Heroname === 'Joker'){
        throw new Error('Not a hero');
    }
  return (
    <div>
      {Heroname}
    </div>
  )
}