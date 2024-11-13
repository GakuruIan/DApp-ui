
const Wrapper = ({children}) => {
  return (
    <div  className='w-full md:w-96 lg:w-2/3 max-w-6xl md:bg-dark-50 p-8 rounded-md md:shadow-md md:shadow-inherit'>
        {children}
    </div>
  )
}

export default Wrapper