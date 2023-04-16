import './app.css'
import Reviews from './Reviews';

function App() {
   
   return(
      <div className='main'>
         <section className='container'>
            <div className='title'>
               <h2>Our Reviews</h2>
               <div className='underline'></div>
            </div>
            <Reviews />
         </section>
      </div>
   )
}
export default App;