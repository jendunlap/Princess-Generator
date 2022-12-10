import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import skins from '../images/skins.js'
import eyes from '../images/eyes.js'
import lips from '../images/lips.js'
import hairs from '../images/hairs.js'

const Create = () => {
  console.log(skins)
  // let navigate = useNavigate()

  const initialState = {
    skin: 'https://i.imgur.com/HFj9sAV.png',
    eyes: 'https://i.imgur.com/KQ6ib8I.png',
    hair: 'https://i.imgur.com/569FUZO.png'
  }

  const [formState, setFormState] = useState(initialState)

  const [selectingSkin, setSelectingSkin] = useState(false)
  const [selectingEyes, setSelectingEyes] = useState(false)
  const [selectedEyes, setSelectedEyes] = useState(false)
  const [selectingLips, setSelectingLips] = useState(false)
  const [selectedLips, setSelectedLips] = useState(false)
  const [selectingHairs, setSelectingHairs] = useState(false)
  const [selectedHairs, setSelectedHairs] = useState(false)

  const selectSkin = (skins) => {
    let tempState = { ...formState, skin: skins.url }
    setFormState(tempState)
    setSelectingSkin(false)
  }
  const selectEyes = (eyes) => {
    let tempState = { ...formState, eyes: eyes.url }
    setSelectedEyes(eyes.url)
    setFormState(tempState)
    setSelectingEyes(false)
  }
  const selectLips = (lips) => {
    let tempState = { ...formState, lips: lips.url }
    setSelectedLips(lips.url)
    setFormState(tempState)
    setSelectingEyes(false)
  }
  const selectHairs = (hairs) => {
    let tempState = { ...formState, hair: hairs.url }
    setSelectedHairs(hairs.url)
    setFormState(tempState)
    setSelectingEyes(false)
  }

  // const handleChange = (e) => {
  //   setFormState({ ...formState, [e.target.id]: e.target.value })
  // }

  return (
    <div className="createPage">
      <form className="createForm">
        {/* SKIN SELECTION */}

        <label className="skinDiv formLabel" htmlFor="selectSkin">
          Skin Tone
        </label>
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
        {/* EYE SELECTION */}

        <label className="eyesDiv formLabel" htmlFor="selectEyes">
          Eye Shape
        </label>
        {selectingEyes ? (
          <div className="eyeMap">
            {eyes.map((eye, index) => (
              <img
                className="mappedEyes"
                key={index}
                src={eye.shape}
                alt={eye.name}
                onClick={() => selectEyes(eye)}
              />
            ))}
          </div>
        ) : (
          <div
            className="selectEyesButton"
            onClick={() => setSelectingEyes(true)}
          >
            {eyes.map((eye, index) => (
              <img
                className="mappedEyes"
                key={index}
                src={eye.shape}
                alt={eye.name}
                onClick={() => selectEyes(eye)}
              />
            ))}
          </div>
        )}
        {/* LIP SELECTION */}

        <label className="lipsDiv formLabel" htmlFor="selectLips">
          Lip Shape
        </label>
        {selectingLips ? (
          <div className="lipMap">
            {lips.map((lip, index) => (
              <img
                className="mappedLips"
                key={index}
                src={lip.shape}
                alt={lip.name}
                onClick={() => selectLips(lip)}
              />
            ))}
          </div>
        ) : (
          <div
            className="selectLipsButton"
            onClick={() => setSelectingLips(true)}
          >
            {lips.map((lip, index) => (
              <img
                className="mappedLips"
                key={index}
                src={lip.shape}
                alt={lip.name}
                onClick={() => selectLips(lip)}
              />
            ))}
          </div>
        )}
        {/* HAIR SELECTION */}

        <label className="hairDiv formLabel" htmlFor="selectHairs">
          Hair Style
        </label>
        {selectingHairs ? (
          <div className="hairMap">
            {hairs.map((hair, index) => (
              <img
                className="mappedHairs"
                key={index}
                src={hair.shape}
                alt={hair.name}
                onClick={() => selectHairs(hair)}
              />
            ))}
          </div>
        ) : (
          <div
            className="selectHairsButton"
            onClick={() => setSelectingHairs(true)}
          >
            {hairs.map((hair, index) => (
              <img
                className="mappedHairs"
                key={index}
                src={hair.shape}
                alt={hair.name}
                onClick={() => selectHairs(hair)}
              />
            ))}
          </div>
        )}
      </form>
      <div className="princessCreation">
        <img className="princessCreationComponent" src={formState.skin} />
        {selectedEyes ? (
          <img className="princessCreationComponent" src={selectedEyes} />
        ) : (
          <img
            className="princessCreationComponent"
            src="https://i.imgur.com/KQ6ib8I.png"
          />
        )}
        {selectedLips ? (
          <img className="princessCreationComponent" src={selectedLips} />
        ) : (
          <img
            className="princessCreationComponent"
            src="https://i.imgur.com/AHezimP.png"
          />
        )}
        {selectedHairs ? (
          <img className="princessCreationComponent" src={selectedHairs} />
        ) : (
          <img
            className="princessCreationComponent"
            src="https://i.imgur.com/569FUZO.png"
          />
        )}
      </div>
    </div>
  )
}

export default Create
