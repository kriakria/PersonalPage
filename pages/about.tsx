import type { NextPage } from 'next'
import Head from 'next/head'
import AboutPicture from '../src/components/AboutPicture'
import { HeaderTags } from '../src/components/HeaderTags'

const About: NextPage = () => {
  return (
    <div>
      <HeaderTags />
      <h1>About Jorge</h1>
      <AboutPicture />
      <h2>This is the subtitle</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum id velit eget lobortis. Pellentesque ex urna, cursus eu mi
        ut, pulvinar mollis ante. Integer commodo eget libero non condimentum.
      </p>
      <p>
        Mauris efficitur ipsum sem, quis laoreet orci convallis at. Nullam
        tincidunt, ex a commodo tristique, libero diam accumsan libero, ut
        maximus mauris magna ac orci. Aliquam non elementum neque, id viverra
        justo. Donec mauris velit, sagittis nec fermentum laoreet, tempus et
        nisi...{' '}
      </p>
    </div>
  )
}

export default About
