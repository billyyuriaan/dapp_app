import { Navbarsx, Content } from '../components'
import { Typewriter } from 'react-simple-typewriter'

const About = () => {
  
  return (
    <>
      <Navbarsx />
      <Content className="mt-3 mb-3">
        <h1 className='text-center'>
        <Typewriter
            words={['This Is A About Page', 'Where You Will Know What Purpose this website has']}
            loop={1}
            cursor
            typeSpeed={90}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </h1>
        <br />
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id itaque, molestiae nemo dolor fugit ipsa iure nisi excepturi pariatur ad officia praesentium eaque maiores quia commodi facere porro cumque quas!</p>
      </Content>
    </>
  )
}

export default About