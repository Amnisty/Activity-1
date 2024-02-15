import clsx from 'clsx'
import { useSecondChild } from '.'
import { SecondChildProps } from '../../interfaces'

export const SecondChild = (props: SecondChildProps): JSX.Element => {
    const { handleAdd, handleMinus, handleReset, value } = useSecondChild(props)
    return (
        <div
            className={clsx(
                'w-96',
                'flex',
                'flex-col',
                'items-center',
                'gap-y-2'
            )}
        >
            <span className='font-bold text-lg'>Contador: {value}</span>
            <div className="flex gap-3">
                <button
                    className={
                        'py-2 px-3 rounded-lg bg-orange-500 hover:bg-orange-700 font-bold'
                    }
                    onClick={handleAdd}
                    type="button"
                >
                    Incrementar
                </button>
                <button
                    className={
                        'py-2 px-3 rounded-lg bg-orange-500 hover:bg-orange-700 font-bold'
                    }
                    onClick={handleMinus}
                    type="button"
                >
                    Decrementar
                </button>
                <button
                    className={
                        'py-2 px-3 rounded-lg bg-orange-500 hover:bg-orange-700 font-bold'
                    }
                    onClick={handleReset}
                    type="button"
                >
                    Resetear
                </button>
            </div>
        </div>
    )
}
