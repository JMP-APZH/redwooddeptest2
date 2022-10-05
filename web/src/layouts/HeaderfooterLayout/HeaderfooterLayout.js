import { Link, routes } from '@redwoodjs/router'


const HeaderfooterLayout = ({ children }) => {
  return (
  <>
  <div className="h-full bg-red-100">
      <header className="flex flex-col items-center">
      <div className="">
        <h1 className="text-4xl font-bold p-4 underline">
        <Link to={routes.home()}>Challenge#18</Link>
        </h1>
      </div>
      <div className="p-4">
        <nav className="">
          <ul className="flex flex-row space-x-4">
            <li className="text-center w-36 rounded-md font-bold bg-sky-500 hover:bg-sky-300">
              <Link
                className=""
                to={routes.home()}>Home</Link>
            </li>

            {/* <li className="text-center w-36 rounded-md font-bold bg-sky-500 hover:bg-sky-300">

              <Link
              className=""
              to={routes.htmlintegration1()}>HTML Integration</Link>
            </li> */}

            {/* <li className="text-center w-36 rounded-md font-bold bg-sky-500 hover:bg-sky-300">
              <Link to={routes.newUser()}>New User</Link>
            </li>
            <li className="text-center w-36 rounded-md font-bold bg-sky-500 hover:bg-sky-300">
              <Link to={routes.newUserProfile()}>New User Profiles</Link>
            </li> */}
          </ul>
        </nav>
        </div>
      </header>
      <main className='bg-yellow-100'>{children}</main>

    <footer className="relative bg-black pt-8 pb-6 text-white">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
            Follow us on
            </h4>
            <div className="mt-2">
              <button
                className="text-green-300 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
              <button
                className="text-green-300 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              <button
                className="text-green-300 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-dribbble"></i>
              </button>
              <button
                className="text-green-300 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 pt-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-green-400 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation">About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-green-400 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com">Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-green-400 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial">Github
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-green-400 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free">Free Products
                    </a>
                  </li>

                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-green-400 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">MIT License
                  </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-green-400 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms">Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-green-400 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy">Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-green-400 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us">Contact Us
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              © {new Date().getFullYear()}{" "}HackZurich - Challenge#18{" "}
              <br />
              <a
                href=""
                className="text-xs text-gray-600 hover:text-green-400"
              >
                By nameOfTeam
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>


      </div>
  </>
  )
}

export default HeaderfooterLayout
