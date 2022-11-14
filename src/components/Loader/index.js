import React from 'react'
import { CircularProgress } from '@material-ui/core'
import './style.scss'

const PageLoader = ({ isLoading }) => {
  return isLoading ? (
    <div className="loader-wrapper">
      <CircularProgress size={60} />
    </div>
  ) : null
}

export default PageLoader
