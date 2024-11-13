
const Button = ({text,style}) => {
  return (
    <button className={`px-4 py-2.5 bg-indigo-600  hover:bg-indigo-700 transition-colors duration-75 ${style}`}>{text}</button>
  )
}

export default Button