import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import skins from '../images/skins.js'
import eyes from '../images/eyes.js'
import eyeColors from '../images/eyeColors.js'
import lips from '../images/lips.js'
import hairs from '../images/hairs.js'
import dresses from '../images/dresses.js'
import Client from '../services/api.js'

const Modify = () => {
  let { princessId } = useParams()
  let navigate = useNavigate()

  const initialState = {
    name: '',
    skin: '',
    eyes: '',
    hair: '',
    mouth: '',
    dress: '',
    base: false
  }

  const [formState, setFormState] = useState(initialState)

  const [selectingSkin, setSelectingSkin] = useState(false)
  const [selectedEyeColor, setSelectedEyeColor] = useState(false)
  const [selectingEyes, setSelectingEyes] = useState(false)
  const [selectedEyes, setSelectedEyes] = useState(false)
  const [selectingLips, setSelectingLips] = useState(false)
  const [selectedLips, setSelectedLips] = useState(false)
  const [selectingHairs, setSelectingHairs] = useState(false)
  const [selectedHairs, setSelectedHairs] = useState(false)
  const [selectingDress, setSelectingDress] = useState(false)
  const [selectedDress, setSelectedDress] = useState(false)
  console.log(formState)

  const selectSkin = (skins) => {
    let tempState = { ...formState, skin: skins.url }
    setFormState(tempState)
    setSelectingSkin(false)
  }
  const selectEyeColor = (eyeColors) => {
    setSelectedEyeColor(eyeColors.url)
  }
  const selectEyes = (eyes) => {
    let tempState = { ...formState, eyes: eyes.url }
    setSelectedEyes(eyes.url)
    setFormState(tempState)
    setSelectingEyes(false)
  }
  const selectLips = (lips) => {
    let tempState = { ...formState, mouth: lips.url }
    setSelectedLips(lips.url)
    setFormState(tempState)
    setSelectingLips(false)
  }
  const selectHairs = (hairs) => {
    let tempState = { ...formState, hair: hairs.url }
    setSelectedHairs(hairs.url)
    setFormState(tempState)
    setSelectingHairs(false)
  }
  const selectDress = (dresses) => {
    let tempState = { ...formState, dress: dresses.url }
    setSelectedDress(dresses.url)
    setFormState(tempState)
    setSelectingDress(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/myprincesses/${princessId}`, formState)
    navigate('/gallery')
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  useEffect(() => {
    const getPrincessInfo = async () => {
      const response = await Client.get(`/myprincesses/${princessId}`)
      setFormState(response.data.princess)
    }
    getPrincessInfo()
  }, [])

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
        {/* COLOR */}
        <label className="eyeColorDiv formLabel" htmlFor="selectEyeColor">
          Eye Color
        </label>
        <div className="eyeColorMap">
          {eyeColors.map((color, index) => (
            <img
              className="mappedEyes"
              key={index}
              src={color.url}
              alt={color.name}
              onClick={() => selectEyeColor(color)}
            />
          ))}
        </div>
        {/* SHAPE */}
        <label className="eyesDiv formLabel" htmlFor="selectEyes">
          Eye Shape
        </label>
        {(() => {
          switch (selectedEyeColor) {
            case 'https://i.imgur.com/dRvr5fJ.jpg':
              return (
                <div>
                  {selectingEyes ? (
                    <div className="eyeMap">
                      {eyes
                        .filter((eye) => eye.color === 'blue')
                        .map((eye, index) => (
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
                      {eyes
                        .filter((eye) => eye.color === 'blue')
                        .map((eye, index) => (
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
                </div>
              )
              break
            case 'https://i.imgur.com/A85yIBk.jpg':
              return (
                <div>
                  {selectingEyes ? (
                    <div className="eyeMap">
                      {eyes
                        .filter((eye) => eye.color === 'brown')
                        .map((eye, index) => (
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
                      {eyes
                        .filter((eye) => eye.color === 'brown')
                        .map((eye, index) => (
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
                </div>
              )
              break
            case 'https://i.imgur.com/VBxd5ET.jpg':
              return (
                <div>
                  {selectingEyes ? (
                    <div className="eyeMap">
                      {eyes
                        .filter((eye) => eye.color === 'gold')
                        .map((eye, index) => (
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
                      {eyes
                        .filter((eye) => eye.color === 'gold')
                        .map((eye, index) => (
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
                </div>
              )
              break
            default:
              break
          }
        })()}
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
        {/* DRESS SELECTION */}
        <label className="dressDiv formLabel" htmlFor="selectDress">
          Dress Style
        </label>
        {selectingDress ? (
          <div className="dressMap">
            {dresses.map((dress, index) => (
              <img
                className="mappedDresses"
                key={index}
                src={dress.shape}
                alt={dress.name}
                onClick={() => selectDress(dress)}
              />
            ))}
          </div>
        ) : (
          <div
            className="selectDressButton"
            onClick={() => setSelectingDress(true)}
          >
            {dresses.map((dress, index) => (
              <img
                className="mappedDresses"
                key={index}
                src={dress.shape}
                alt={dress.name}
                onClick={() => selectDress(dress)}
              />
            ))}
          </div>
        )}
        <div>
          <label htmlFor="name" className="createPrincessName">
            Name your Princess!
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="name"
            value={formState.name}
          ></input>
        </div>
        <div>
          <button className="addToGallery" type="submit" onClick={handleSubmit}>
            Update Princess!
          </button>
        </div>
      </form>
      <div className="princessCreation">
        <img className="princessCreationComponent" src={formState.skin} />

        <img className="princessCreationComponent" src={formState.eyes} />

        <img className="princessCreationComponent" src={formState.mouth} />

        <img className="princessCreationComponent" src={formState.hair} />

        <img className="princessCreationComponent" src={formState.dress} />
      </div>
    </div>
  )
}

export default Modify
