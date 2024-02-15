import { FirstChildProps } from '../../interfaces'

export const useFirstChild = (props: FirstChildProps) => {
    const { description, onClick, title, image, counter } = props

    return {
        description,
        onClick,
        title,
        image,
        counter,
    }
}
