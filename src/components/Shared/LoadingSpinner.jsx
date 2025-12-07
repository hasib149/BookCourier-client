import { ScaleLoader } from 'react-spinners'

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      text-blue-600
      justify-center 
      items-center `}
    >
      <ScaleLoader size={100} color='lime' />
    </div>
  )
}

export default LoadingSpinner
