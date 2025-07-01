import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form'

function App() {
 
  return (
 <section className="bg-gray-800 min-h-screen text-white flex flex-col gap-6 p-6 space-y-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
  <Header/>
 <Form/>
 <Footer/>
  </section>
  )
}

export default App
