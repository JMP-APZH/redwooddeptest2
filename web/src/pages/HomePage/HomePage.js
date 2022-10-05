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
      <div className='flex flex-col justify-start h-screen items-center'>
      {/* <iframe width="100%" length="100%" src="http://localhost:8910/noveln">
      </iframe> */}
      <div
        // className='bg-red-300 h-screen'
        className='relative w-full h-full'
      >
        <img
          src={climatechangebackgrounder}
          alt='homepage-bg'
          className='w-full h-full object-cover'
        />
        </div>

        <div className=' absolute flex flex-col justify-center items-center pb-80 right-0 bottom-0 left-0 bg-blackOverlay'>
      {/* <h1 className='text-green-500 text-3xl bg-gray-300'>HomePage</h1> */}

       <div className='p-4 border border-solid bg-gray-300'>

        <form
          className='flex flex-col'
          onSubmit={(e) => submitYear(e)}
          >

          <label className='text-center'>
            <p>User Year of Birth*</p>
            <input
              type="year"
              value={userby}
              name="Byear"
              placeholder='Year of Birth'
              className='text-center'
              onChange={(e) => setUserby(e.target.value)}
              // onSubmit={(e) => submitYear(e)}
              // onSubmit = {(e) => submitYear(e)}

            />
          </label>


          <button
            // type="submit"
            // value="submit"
            // onChange={(e) => setUserBy(e.target.value)}
            onClick={(e) => submitYear(e)}
            // onClick={(e) => setUserby(e.target.value)}ä
            // onClick={() => {<Redirect to="/novel" />}}
          >
            Submit
          </button>

        </form>

      </div>
      {/* </div> */}

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

{/* <div className='p-4 border border-solid bg-gray-300'>

        <form
          className='flex flex-col'
          onSubmit={(e) => submitYear(e)}
          >

          <label className='text-center'>
            <p>User Year of Birth*</p>
            <input
              type="year"
              value={userby}
              name="Byear"
              placeholder='Year of Birth'
              className='text-center'
              onChange={(e) => setUserby(e.target.value)}
              // onSubmit={(e) => submitYear(e)}
              // onSubmit = {(e) => submitYear(e)}

            />
          </label>


          <button
            // type="submit"
            // value="submit"
            // onChange={(e) => setUserBy(e.target.value)}
            onClick={(e) => submitYear(e)}
            // onClick={(e) => setUserby(e.target.value)}ä
            // onClick={() => {<Redirect to="/novel" />}}
          >
            Submit
          </button>

        </form>


      </div> */}

        {/* </div> */}

        {/* <div className=' absolute flex flex-col justify-center items-center pb-80 right-0 bottom-0 left-0 bg-blackOverlay'> */}
      {/* <h1 className='text-green-500 text-3xl bg-gray-300'>HomePage</h1> */}

      {/* <div className='p-4 border border-solid bg-gray-300'> */}

        {/* <form
          className='flex flex-col'
          onSubmit={(e) => submitYear(e)}
          >

          <label className='text-center'>
            <p>User Year of Birth*</p>
            <input
              type="year"
              value={userby}
              name="Byear"
              placeholder='Year of Birth'
              className='text-center'
              onChange={(e) => setUserby(e.target.value)}
              // onSubmit={(e) => submitYear(e)}
              // onSubmit = {(e) => submitYear(e)}

            />
          </label>


          <button
            // type="submit"
            // value="submit"
            // onChange={(e) => setUserBy(e.target.value)}
            onClick={(e) => submitYear(e)}
            // onClick={(e) => setUserby(e.target.value)}ä
            // onClick={() => {<Redirect to="/novel" />}}
          >
            Submit
          </button>

        </form>


      </div> */}


{userby.length === 4 && <Redirect to="/novel" />}
{userby.length === 4 && localStorage.setItem('userYear', JSON.stringify(userby))}


      {/* <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p> */}
      {/* <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p> */}
      </div>
      </div>
    </>
  )
}

export default HomePage
