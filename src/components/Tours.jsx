import React from 'react'
import Title from './Title'

import Tour from './Tour'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      <Tour />
      {/* <div className="section-center featured-center">{pictureList}</div> */}
    </section>
  )
}

export default Tours
