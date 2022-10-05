import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import  App  from '../../AppNovel.js'

const NovelPage = () => {
  return (
    <>
      <MetaTags title="Novel" description="Novel page" />
         <App />
    </>
  )
}

export default NovelPage
