import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
function Loading({height=100,width=100}) {
    return (
        <Loader
        type="ThreeDots"
        color="blue"
        height={height}
        width={width}
        timeout={5000} //3 secs
      />
    )
}

export default Loading
