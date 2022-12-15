import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/Taco.js'

const PrincessInfo = () => {
  let { princessId } = useParams()

  const [princessInfo, setPrincessInfo] = useState(null)

  const getPrincessInfo = async () => {
    try {
      const response = await Client.get(`/myprincesses/${princessId}`)
      setPrincessInfo(response.data.princess)
    } catch {
      const response = await axios.get(`/princesses/${princessId}`)
      setPrincessInfo(response.data.princess)
    }
  }

  let navigate = useNavigate()

  const deletePrincess = async () => {
    await Client.delete(`/myprincesses/${princessId}`)
    navigate(`/gallery`)
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
            <img
              className="princessInfoFrameComponent"
              src={princessInfo.frame}
            />
          </div>
          <div className="princessInfoText">
            <h1 className="princessInfoName">{princessInfo.name}</h1>
            <p className="princessInfoDescription">
              {princessInfo.description}
            </p>
            {princessInfo.base ? null : (
              <div>
                <section className="buttons">
                  <button
                    className="modificationButton"
                    onClick={deletePrincess}
                  >
                    delete
                  </button>
                  <button
                    className="modificationButton"
                    onClick={modifyPrincess}
                  >
                    modify
                  </button>
                </section>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default PrincessInfo
