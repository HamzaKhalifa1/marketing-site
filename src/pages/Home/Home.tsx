import './App.css'
import CategoriesSection from "../../components/Home/CategoriesSection/CategoriesSection"
import SpecialCategory from '../../components/Home/CategoriesSection/SpecialCategory'
import MonthProducts from '../../components/Home/MonthProducts/MonthProducts'
import TodayProducts from '../../components/Home/TodayProducts/TodayProducts'
import { ScrollProvider } from '../../context/ScrollContext'

function Home() {

  return (
    <ScrollProvider>
      <TodayProducts />
      <hr className='lineThrough'/>
      <CategoriesSection />
      <hr className='lineThrough'/>
      <MonthProducts />
      <SpecialCategory />
    </ScrollProvider>
  )
}

export default Home
