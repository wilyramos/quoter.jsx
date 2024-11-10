import { useState , useEffect} from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import { formatMoney, totalPayment } from "./helpers"

function App() {
  const [amount, setAmount] = useState(1000)
  const [term, setTerm] = useState(6)
  const [total, setTotal] = useState(0)
  const [pay, setPay] = useState(0)

  useEffect(() => {
    const resultadoTotal = totalPayment(amount, term)
    setTotal(resultadoTotal);

  },[amount, term])

  useEffect(() => {
    setPay(total / term)
  }, [total]);

  const min = 0
  const max = 10000
  const step = 100

  const handleChange = (e) => {
    console.log(e.target.value)
    setAmount(e.target.value)
  }

  const handleClickDecrement = () => {
    setAmount(amount - step)
    if (amount <= 0) {
      setAmount(0)
    }
  }

  const handleClickIncrement = () => {
    setAmount(amount + step)
    if (amount >= max) {
      setAmount(max)
    }
  }

  return (
    <>
      <div className="my-60 max-w-xl mx-auto bg-white shadow-lg p-10 rounded-lg	">

        <Header />

        <div className="flex justify-between my-4">
          <Button 
            operation="-"
            fn={handleClickDecrement}
          />
          <Button 
            operation="+"
            fn={handleClickIncrement}
          />
        </div>

        <input type='range' min={min} max={max} step={step} value={amount}
          className="w-full h-6 bg-gray-300 accent-indigo-500 hover:accent-indigo-500"
          onChange={handleChange}
        />
        <h1 className="text-4xl font-bold text-center ">You need: <span className="text-indigo-800">{formatMoney(amount)}</span></h1>

        <h2 className="text-2xl font-extrabold text-gray-500 text-center">Choose a <span className="text-indigo-700">term</span></h2>

        <select className="mt-5 w-full p-2 bg-white border border-gray-400 rounded-xl text-center text-xl font-bold text-gray-600"
          value={term}
          onChange={e => setTerm(+e.target.value)}
        >
          <option value="6">6 months</option>
          <option value="12">12 months</option>
          <option value="18">18 months</option>
          <option value="24">24 months</option>
        </select>

        <div className="my-5 space-y-4 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-center">Payment Summary</h3>
          <p className="text-lg font-bold text-center text-gray-600">Amount: <span className="text-indigo-700">{formatMoney(amount)}</span></p>
          <p className="text-lg font-bold text-center text-gray-600">Term: <span className="text-indigo-700">{term} months</span></p>
          <p className="text-lg font-bold text-center text-gray-600">Total to pay: <span className="text-indigo-700">{formatMoney(total)}</span></p>
          <p className="text-lg font-bold text-center text-gray-600">Payment monthly: <span className="text-indigo-700">{formatMoney(pay)}</span></p>
          
        </div>
    

      </div>
    </>
  )
}

export default App
