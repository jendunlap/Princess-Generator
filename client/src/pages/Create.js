import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import skins from '../images/skins.js'

const Create = () => {
  console.log(skins)
  let navigate = useNavigate()

  const initialState = {
    skin: 'https://i.imgur.com/HFj9sAV.png'
  }

  const [formState, setFormState] = useState(initialState)

  const [selectingSkin, setSelectingSkin] = useState(false)

  const selectSkin = (skins) => {
    let tempState = { ...formState, skin: skins.url }
    setFormState(tempState)
    setSelectingSkin(false)
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <div className="createPage">
      <form className="createForm">
        <label className="skinDiv formLabel" htmlFor="selectSkin">
          Skin Tone
        </label>
        {selectingSkin ? (
          <div className="skinMap">
            {skins.map((skin, index) => (
              <img
                className="mappedskin"
                key={index}
                src={skin.color}
                alt={skin.name}
                onClick={() => selectSkin(skin)}
              />
            ))}
          </div>
        ) : (
          <div
            className="selectSkinButton"
            onClick={() => setSelectingSkin(true)}
          >
            {skins.map((skin, index) => (
              <img
                className="mappedskin"
                key={index}
                src={skin.color}
                alt={skin.name}
                onClick={() => selectSkin(skin)}
              />
            ))}
          </div>
        )}
      </form>
      <div className="princessCreation">
        <img className="princessCreationComponent" src={formState.skin} />
        <img
          className="princessCreationComponent"
          src="https://i.imgur.com/KQ6ib8I.png"
        />
      </div>
    </div>
  )
}

export default Create
