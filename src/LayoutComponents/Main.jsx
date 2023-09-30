import React from 'react'
import Hero from './Hero'
import ListSection from '../Pages/ListSection'
import { requestPoints } from '../Requests'

const Main = () => {


  return (
    <div>
      <Hero />
      {/* Pass the props id(to distinguish between sections,title of the row and the url for fetching) */}
      <ListSection id={1} title={"Popular on ChillFlix"} url={requestPoints.requestPopular} />
      <ListSection id={2} title={"Trending Now"} url={requestPoints.requestTrending} />
      <ListSection id={3} title={"Upcoming Bangers"} url={requestPoints.requestUpcoming} />
      <ListSection id={4} title={"Top Rated Movies"} url={requestPoints.requestTopRated}/>
    </div>
  )
}

export default Main
