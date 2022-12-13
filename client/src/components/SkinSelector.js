import skins from '../images/skins'
import { useState } from 'react'

const SkinSelector = ({ skins, formState, setFormState }) => {
  const [selectingSkin, setSelectingSkin] = useState(false)

  const selectSkin = (skins) => {
    let tempState = { ...formState, skin: skins.url }
    setFormState(tempState)
    setSelectingSkin(false)
  }

  return (
    <div>
      {selectingSkin ? (
        <div className="skinMap">
          {skins.map((skin, index) => (
            <img
              className="mappedSkin"
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
              className="mappedSkin"
              key={index}
              src={skin.color}
              alt={skin.name}
              onClick={() => selectSkin(skin)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SkinSelector
