import { Link, routes, Redirect } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import climatechangebackgrounder from 'web/src/assets/climate-change-backgrounder.jpg'
//import App from '../../AppNovel.js'

import { useState } from 'react'

// const [userBy, setUserBy] = useState(false);

// const submitYear = (e) => {
//   e.preventDefault();
//   setUserBy(e.target.value)
//   localStorage.setItem('userYear', JSON.stringify(userBy))
//   // setUserBy("");

//   console.log('userYear:', userBy)
// }

const HomePage = () => {

  const [userby, setUserby] = useState("");

  const submitYear = (e) => {
    e.preventDefault();
    // setUserby(e.target.value)
    // await setUserby(e.target.value);
    localStorage.setItem('userYear', JSON.stringify(userby))
    // setUserBy("");

    console.log('userYear:', userby)
  }



  return (
  <>
    <MetaTags title="Home" description="Home page" />
    <div className='flex justify-center h-screen w-screen'>
    <iframe
      width="100%"
      length="100%"
      src="http://localhost:8910/noveln"
    >
    </iframe>
    </div>

    <div className='-pb-96 bottom-0 grid -gap-20'>

    <div className='flex justify-center h-screen w-screen pl-96 pr-96 mb-0'>
    {/* <iframe width="950em" length="100em" src="http://localhost:8910/mean_temp_switzerland.html"> */}
    <iframe
      width="1500px"
      length="1500px"
      src="http://localhost:8910/mean_temp_switzerland.html"
      className='-pb-48 -pr-64 h-full w-full'>
    </iframe>
    </div>

    <div className='flex justify-center h-screen pl-48 -pt-96'>
    <iframe
      width="1500px"
      length="1500px"
      src="http://localhost:8910/1994bern.png"
      className='-pt-96 -pb-96 b'>
    </iframe>
    </div>

    </div>

    {/* <div className='flex justify-start items-center flex-col h-screen'>
      <div
        // className='bg-red-300 h-screen'
        className='relative w-full h-full'
      >
        <img
          src={climatechangebackgrounder}
          alt='homepage-bg'
          className='w-full h-full object-cover'
        />
      </div> */}

      {/* <div className=' flex flex-col justify-center items-center pb-80 right-0 bottom-0 left-0 bg-blackOverlay'>
        {/* <h1 className='text-green-500 text-3xl bg-gray-300'>HomePage</h1> */}

      {/* </div> */}

      {/* {userby.length === 4 && localStorage.setItem('userYear', JSON.stringify(userby))}
      {userby.length === 4 && <Redirect to="/novel" />} */}

      {/* {setTimeout(userBy && <Redirect to="/novel" />, 500)} */}


      {/* <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p> */}
      {/* <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p> */}
    {/* </div> */}
  </>
  )
}

export default HomePage
