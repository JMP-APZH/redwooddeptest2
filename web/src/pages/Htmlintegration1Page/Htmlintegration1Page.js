import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
//import { Parser } from 


/*const rawHTML = `
`;*/

const Htmlintegration1Page = () => {
  return (
    <>
      <MetaTags title="Htmlintegration1" description="Htmlintegration1 page" />

      <div className='pb-8'>
      <h1>Htmlintegration1Page</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/Htmlintegration1Page/Htmlintegration1Page.js
        </code>
      </p>
      <p>
        My default route is named <code>htmlintegration1</code>, link to me with
        `<Link to={routes.htmlintegration1()}>Htmlintegration1</Link>`
      </p>
      </div>
    </>
  )
}

export default Htmlintegration1Page
