import './App.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import MyCard from './componentes/MyCard'
import tags from './componentes/Tags/tags'


function App() {
  return (
    <>
      <Header />

      <div className='My-Card'>
      <MyCard 
       img="https://assets-global.website-files.com/64663adf80cae0f23099bf1f/65075a2869a042513517710a_IMG_8977%20copy-p-2000.jpg"
       nombre="Van Disel "
       descripcion="Tengo 4 años de edad me gusta correr y Jugarlkndewlkhfnlwehfolkhfowelihflkwe"
       boton= "Te espero"
      />
      <MyCard 
       img="https://assets-global.website-files.com/64663adf80cae0f23099bf1f/65075a0e0ddd68ad65529633_IMG_9206%20copy-p-2000.jpg"
       nombre="Patito"
       descripcion="Ayudame a tener un hogar para mis ultimos dias, soy muy carinoso y educadofdbsakjbdfksajfdkjas."
       boton = "Eligeme"
      />
       <tags />
      <MyCard 
       img="https://assets-global.website-files.com/64663adf80cae0f23099bf1f/650759dc0ddd68ad655269ee_IMG_7306%20copy-p-2000.jpg"
       nombre="Rommy"
       descripcion=" Hola soy Rommy pero tu me puedes cambiar el nombre bdnsakjdhgaskjgfiksdghfidsughfsdkjfgsd"
       boton= "Quiereme"
      />
      <MyCard 
       img="https://assets-global.website-files.com/64663adf80cae0f23099bf1f/6507590b0e467150165a8ad2_IMG_9204%20copy-p-2000.jpg"
       nombre=" Mami Luz"
       descripcion="Dejame alumbar tu casa soy muy carinosa y me gustaria estar a tu lado mis ultimos dias"
       boton= "Abrazame"
      />
    </div>

      <Footer />


    </>
  )
}
export default App
