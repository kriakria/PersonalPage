import type { NextPage } from 'next'
import styles from '../src/styles/About.module.css'
import AboutPicture from '../src/components/AboutPicture'
import { HeaderTags } from '../src/components/HeaderTags'

const About: NextPage = () => {
  return (
    <div>
      <HeaderTags />
      <div className={styles.mainTitle}>Hi, I am Jorge 👋</div>
      <AboutPicture />
      <h2>Software Engineering</h2>
      <p>I love building things.</p>
      <p>
        Currently most of the things I am working on are built on a JavaScript
        based stack. That was what got me in the job market and where my main
        skills are at the moment.
      </p>
      <p>
        At work I am a mobile engineer working on an app for both iOS and
        Android that is used for dozens of thousands of users in different
        countries. The app is built using React-Native and fully written in
        TypeScript.
      </p>
      <h2>Coffee</h2>
      <p>Coffee absolutely fascinates me! ☕️</p>
      <p>
        Being Brazilian I grow up learning to have my cup of coffee multiple
        times a day, but it was only when I dove into the world of espresso and
        speciality coffees that I really started to appreciate the drink on
        another level.
      </p>
      <p>
        Nowadays I roast my own beans (some of the time at least), I nerd out
        about the methods of preparation and spend a good time researching how
        to get it even better.
      </p>
      <h2>Music</h2>
      <p>
        Music is and has always been my go-to hobby, my place to go where things
        are rough and my constant companion.
      </p>
      <p>
        I have been playing the guitar since I was 13 years old and, even though
        I have not turned into the rockstar I once dreamt of being, I still try
        to play for a few minutes almost every day.
      </p>
      <p>
        Another part that fascinates me is the technology and the gear behind
        music and guitar playing. Being an engineer (Electrical Engineer by
        trade) this is an endless source of fascination which at some point led
        me to start my own pedal company. Django Pedais.
      </p>
      <p>The company is now closed but the passion and fascination remains.</p>
      <h2>This blog</h2>
      <p>
        I have built this blog to give me an outlet to share what I learned
        about the topics I nerd about. And also to give me an excuse to build
        something :D.
      </p>
    </div>
  )
}

export default About
