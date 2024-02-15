import { SecondChildProps } from '../../interfaces'

export const useSecondChild = (props: SecondChildProps) => {
    const { handleAdd, handleMinus, handleReset, value = 0 } = props

    return {
        handleAdd,
        handleMinus,
        handleReset,
        value,
    }
}
