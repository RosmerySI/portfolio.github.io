import { FooterComponent } from "./components/Molecules/FooterComponent/FooterComponent"
import { HeaderComponent } from "./components/Molecules/HeaderComponent/HeaderComponent"
import { MyRoutes } from "./router/MyRoutes"

function Portfolio() {
  return (
    <>
      <HeaderComponent/>
      <MyRoutes />    
      <FooterComponent/>
    </>
  )
}
export default Portfolio
