import React from 'react'
import { usePromiseTracker } from "react-promise-tracker";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {

  return (
    <div>
      <ClipLoader loading={usePromiseTracker().promiseInProgress} color={'#BFDF8E'} size={'40vh'} />
    </div>
  )
}

export default Loader
