import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PrincessInfo = () => {
  let { princessId } = useParams()

  const [princessInfo, setPrincessInfo] = userState(null)
}

export default PrincessInfo
