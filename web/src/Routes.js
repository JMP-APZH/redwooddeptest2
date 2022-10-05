// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import HeaderfooterLayout from './layouts/HeaderfooterLayout/HeaderfooterLayout'


const Routes = () => {
  return (
    <Router>
      <Route path="/noveln" page={NovelnPage} name="noveln" />
      {/* <Route path="/htmlintegration1" page={Htmlintegration1Page} name="htmlintegration1" /> */}
      <Set wrap={HeaderfooterLayout}>
        <Route path="/novel" page={NovelPage} name="novel" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
