import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PrincessInfo = () => {
  let { princessId } = useParams()

  const [princessInfo, setPrincessInfo] = useState(null)

  const getPrincessInfo = async () => {
    const response = await axios.get(
      `http://localhost:3001/princesses/${princessId}`
    )

    setPrincessInfo(response.data.princess)
  }

  let navigate = useNavigate()

  const deletePrincess = async () => {
    await axios.delete(`http://localhost:3001/princesses/${princessId}`)
    navigate(`/myprincesses`)
  }

  const modifyPrincess = async () => {
    navigate(`/modifyprincess${princessId}`)
  }

  useEffect(() => {
    getPrincessInfo()
  }, [princessId])

  return (
    <div className="princessInfo">
      {princessInfo ? (
        <div className="viewInfo">
          <h1>{princessInfo.name}</h1>
        </div>
      ) : null}
      {princessInfo.base ? null : (
        <div>
          <section className="buttons">
            <button className="modificationButton" onClick={deletePrincess}>
              delete
            </button>
            <button className="modificationButton" onClick={modifyPrincess}>
              modify
            </button>
          </section>
        </div>
      )}
    </div>
  )
}

export default PrincessInfo
