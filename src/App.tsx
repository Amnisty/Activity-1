import clsx from 'clsx'
import { FirstChild, SecondChild } from './Components'
import { CardsData } from './Data'
import { useState } from 'react'
function App() {
    const [counter, setCounter] = useState(0)

    const IncrementCounter = (): void => {
        setCounter((state) => state + 1)
    }

    const decrementCounter = (): void => {
        setCounter((state) => state - 1)
    }
    const resetCounter = (): void => {
        setCounter(0)
    }

    return (
        <div className={'container my-8 place-self-center'}>
            <div className={clsx('w-full', 'flex', 'gap-2', 'flex-wrap')}>
                {CardsData.map((card) => (
                    <FirstChild counter={counter} {...card} />
                ))}
            </div>
            <div className='w-full flex items-center justify-center mt-4'>
                <SecondChild
                    value={counter}
                    handleAdd={IncrementCounter}
                    handleMinus={decrementCounter}
                    handleReset={resetCounter}
                />
            </div>
        </div>
    )
}

export default App
