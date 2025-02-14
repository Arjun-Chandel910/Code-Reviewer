import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({ code: "" });
  const [recieved, setRecieved] = useState("");

  let handleInput = (e) => {
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));
  };

  let handleForm = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:3000/ai/get-content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: data.code }),
    });
    let resdata = await res.json();
    console.log(resdata);
    setRecieved(resdata.data || "No response");
  };

  return (
    <div className="flex h-screen flex-col lg:flex-row bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="w-full lg:w-1/2 h-full p-8">
        <form
          className="h-full flex flex-col justify-center space-y-6"
          onSubmit={handleForm}
        >
          <textarea
            placeholder="Enter your code"
            className="bg-zinc-800 text-white w-full h-64 p-4 rounded-lg shadow-lg focus:ring-2 focus:ring-rose-500 transition-all"
            name="code"
            value={data.code}
            onChange={handleInput}
          />
          <button className="bg-rose-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-rose-500 hover:scale-105 transition-all">
            Submit
          </button>
        </form>
      </div>
      <div className="w-full lg:w-1/2 h-full p-8 flex items-center justify-center">
        <div className="bg-zinc-800 w-full h-64 p-6 rounded-lg shadow-lg text-white text-lg overflow-auto">
          {recieved}
        </div>
      </div>
    </div>
  );
}

export default App;
