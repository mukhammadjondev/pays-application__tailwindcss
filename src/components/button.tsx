import { FC } from "react"

interface Props {
  styles?: string;
}

const Button: FC<Props> = ({styles}): JSX.Element => {
  return (
    <button type='button' className={`py-3 px-6 font-montserrat font-medium text-[18px] rounded-[10px] outline-none bg-blue-gradient ${styles}`}>Boshlash</button>
  )
}

export default Button