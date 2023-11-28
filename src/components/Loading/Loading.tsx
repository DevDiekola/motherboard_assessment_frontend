import { RingLoader } from 'react-spinners'

const Loading = () => {

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <RingLoader color="#EB5017" size={100} />
    </div>
  )
}

export default Loading