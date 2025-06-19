

function App() {
 
  return (
 <section className="bg-gray-800 min-h-screen text-white flex flex-col gap-6 p-6 space-y-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
  <div  className="text-center space-y-4 mb-8">
  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">Tono</h1>
 <p className="text-gray-400  text-base sm:text-lg md:text-xl max-w-xl text-center mx-auto leading-loose">
  Change the tone, not the message. Rephrase anything — politely, casually, or sarcastically.
</p>


</div>

 <div className="w-full max-w-2xl mx-auto rounded-lg shadow border border-white/10 bg-white/5 backdrop-blur-md">
  <textarea
    className="p-4 w-full text-white bg-transparent rounded-lg resize-none outline-none placeholder-gray-300 transition-all duration-300"
    placeholder="Paste or write your message here..."
    rows={6}
  ></textarea>
</div>


  <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
  {["Sarcastic", "Formal", "Friendly", "Casual", "Confident"].map((tone) => (
    <button
      key={tone}
      className="bg-gray-700 text-white px-6 py-2 rounded-full shadow hover:bg-gray-600 transition hover:ring-2 hover:ring-purple-400"
    >
      {tone}
    </button>
  ))}
</div>

<div className="w-full flex justify-center">
  <button className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-800 transition flex items-center gap-2 w-fit">
    <span>Transform</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </button>
</div>


  <div className="w-full max-w-2xl mx-auto bg-gray-900 rounded-lg shadow p-4">
  <label className="text-sm text-gray-400 mb-2 block">Transformed Output</label>
  <div className="whitespace-pre-wrap text-white min-h-[150px] p-4 mt-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-inner">
  Output text goes here
</div>

</div>




 <footer className="text-center text-gray-500 mt-10 space-y-2 text-sm">
  <p>Created by XYZ</p>
  <p>Powered by OpenAI</p>
  <div className="flex justify-center gap-4">
    <a href="#" className="hover:underline">GitHub</a>
    <a href="#" className="hover:underline">LinkedIn</a>
  </div>
</footer>

  </section>
  

  
  )
}

export default App
