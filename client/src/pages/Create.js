import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import skins from '../images/skins.js'
import eyes from '../images/eyes.js'
import eyeColors from '../images/eyeColors.js'
import lips from '../images/lips.js'
import hairs from '../images/hairs.js'
import dresses from '../images/dresses.js'
import Client from '../services/api.js'
import SkinSelector from '../components/SkinSelector'
import EyeSelector from '../components/EyeSelector'
import LipSelector from '../components/LipSelector'
import HairSelector from '../components/HairSelector'
import DressSelector from '../components/DressSelector'

const Create = () => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    skin: 'https://i.imgur.com/qQ0v2g0.png',
    eyes: 'https://i.imgur.com/KQ6ib8I.png',
    hair: 'https://i.imgur.com/569FUZO.png',
    mouth: 'https://i.imgur.com/AHezimP.png',
    dress: 'https://i.imgur.com/krS5MAK.png',
    base: false
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post('http://localhost:3001/myprincesses', formState)
    navigate('/gallery')
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <div className="createPage">
      <h1 className="createHeader">CREATE your PRINCESS!</h1>
      <div className="formContainer">
        <form className="createForm">
          <label className="skinDiv formLabel" htmlFor="selectSkin">
            Skin Tone
          </label>
          <SkinSelector
            skins={skins}
            formState={formState}
            setFormState={setFormState}
          />
          <label className="eyeColorDiv formLabel" htmlFor="selectEyeColor">
            Eye Color
          </label>
          <EyeSelector
            eyes={eyes}
            eyeColors={eyeColors}
            formState={formState}
            setFormState={setFormState}
          />
          <label className="lipsDiv formLabel" htmlFor="selectLips">
            Lip Shape
          </label>
          <LipSelector
            lips={lips}
            formState={formState}
            setFormState={setFormState}
          />
          {/* HAIR SELECTION */}
          <label className="hairDiv formLabel" htmlFor="selectHairs">
            Hair Style
          </label>
          <HairSelector
            hairs={hairs}
            formState={formState}
            setFormState={setFormState}
          />
          {/* DRESS SELECTION */}
          <label className="dressDiv formLabel" htmlFor="selectDress">
            Dress Style
          </label>
          <DressSelector
            dresses={dresses}
            formState={formState}
            setFormState={setFormState}
          />
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
            <button
              className="addToGallery"
              type="submit"
              onClick={handleSubmit}
            >
              Add to Gallery!
            </button>
          </div>
        </form>
        <div className="princessCreation">
          <img className="princessCreationComponent" src={formState.skin} />
          <img className="princessCreationComponent" src={formState.eyes} />
          <img className="princessCreationComponent" src={formState.mouth} />
          <img className="princessCreationComponent" src={formState.hair} />
          <img className="princessCreationComponent" src={formState.dress} />
          <img
            className="princessCreationFrame"
            src="https://i.imgur.com/BIo6ToN.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Create
