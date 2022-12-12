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
    console.log(princessInfo)

    setPrincessInfo(response.data.princess)
  }

  let navigate = useNavigate()

  const deletePrincess = async () => {
    await axios.delete(`http://localhost:3001/princesses/${princessId}`)
    navigate(`/myprincesses`)
  }

  const modifyPrincess = async () => {
    navigate(`/modify/${princessId}`)
  }

  useEffect(() => {
    getPrincessInfo()
  }, [princessId])

  return (
    <div className="princessInfo">
      {princessInfo ? (
        <div className="viewInfo">
          <div className="princessInfoPortrait">
            <img
              className="princessInfoPortraitComponent"
              src={princessInfo.skin}
            />

            <img
              className="princessInfoPortraitComponent"
              src={princessInfo.eyes}
            />

            <img
              className="princessInfoPortraitComponent"
              src={princessInfo.mouth}
            />

            <img
              className="princessInfoPortraitComponent"
              src={princessInfo.hair}
            />

            <img
              className="princessInfoPortraitComponent"
              src={princessInfo.dress}
            />
            <img
              className="princessInfoPortraitComponent"
              src={princessInfo.accessories[0]}
            />
            <img
              className="princessInfoPortraitComponent"
              src={princessInfo.accessories[1]}
            />
            <img
              className="princessInfoPortraitComponent"
              src={princessInfo.accessories[2]}
            />
          </div>
          <div className="princessInfoText">
            <h1>{princessInfo.name}</h1>
            <p>{princessInfo.description}</p>
          </div>
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
      ) : null}
    </div>
  )
}

export default PrincessInfo
