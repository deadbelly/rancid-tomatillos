import React from 'react'
import { usePromiseTracker } from "react-promise-tracker";
import './LoadingMessage.css'
import { useState } from "react";
// import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingMessage = () => {

  return (
    <div>
      <ClipLoader loading={usePromiseTracker().promiseInProgress} color={'#BFDF8E'} size={'40vh'} />
    </div>
  )
}

export default LoadingMessage
