import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/inputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  return (
    <div className='w-fulll h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(https://media.istockphoto.com/id/1414200026/photo/stack-of-money-coin-and-laptop-computer-with-trading-graph-financial-investment-concept-with.jpg?s=612x612&w=0&k=20&c=tqQqK6p3QoOiO7M3RAO5p98ajHlFnnQnw0Ru2lPz6eA=)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <InputBox
            label='from'
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
