import { useFirstChild } from '.'
import { FirstChildProps } from '../../interfaces'

export const FirstChild = (props: FirstChildProps): JSX.Element => {
    const { description, image, onClick, title, counter } = useFirstChild(props)
    return (
        <div className="block w-[32.9%] min-w-[320px] justify-center rounded-lg shadow-lg bg-neutral-700">
            <img
                className="rounded-t-lg h-36 object-cover w-full"
                src={image}
                alt=""
            />
            <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {title}
                </h5>
                <span className='text-white'>{counter}</span>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {description}
                </p>
                <button
                    className={'py-2 px-3 rounded-lg bg-orange-500 hover:bg-orange-700 font-bold'}
                    onClick={onClick}
                    type="button"
                >
                    Details
                </button>
            </div>
        </div>
    )
}
