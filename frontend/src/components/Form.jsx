import { useState } from "react"



export default function Form(){
    const  [inputText, setInputText]= useState("")
    const [tone,setTone] = useState("")
    const [outputText,setOutputText] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/generate`,{
            method:'POST',
            headers: {
                "Content-Type":"application/json",
               
            },
            body:JSON.stringify({prompt:tone,text:inputText})
        })

        const data = await response.json()
        setOutputText(data.result)
        console.log(data)
    }

    return(
 <>    
 <div className="w-full max-w-2xl mx-auto rounded-lg shadow border border-white/10 bg-white/5 backdrop-blur-md">
  <textarea
    className="p-4 w-full text-white bg-transparent rounded-lg resize-none outline-none placeholder-gray-300 transition-all duration-300"
    placeholder="Paste or write your message here..."
    rows={6}
    onChange={(e)=>setInputText(e.target.value)}
  ></textarea>
</div>


  <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
  {["Sarcastic", "Formal", "Friendly", "Casual", "Confident"].map((item) => (
    <button
      key={item}
      onClick={()=>setTone(item)}
     className={`px-6 py-2 rounded-full shadow transition 
        ${tone === item
          ? "bg-purple-600 border-2 border-purple-300 text-white"
          : "bg-gray-700 text-white hover:bg-gray-600 hover:ring-2 hover:ring-purple-400"
        }`}
      
    >
      {item}
    </button>
  ))}
</div>

<div className="w-full flex justify-center">
  <button className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-800 transition flex items-center gap-2 w-fit"
    onClick={(e)=>handleSubmit(e)}>
    <span>Transform</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </button>
</div>


  <div className="w-full max-w-2xl mx-auto bg-gray-900 rounded-lg shadow p-4">
  <label className="text-sm text-gray-400 mb-2 block">Transformed Output</label>
  <div className="whitespace-pre-wrap text-white min-h-[150px] p-4 mt-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-inner">
  {outputText}
</div>

</div>
</>   
    )
}