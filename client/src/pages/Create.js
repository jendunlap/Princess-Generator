import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/Taco.js'
import skins from '../images/skins.js'
import eyes from '../images/eyes.js'
import eyeColors from '../images/eyeColors.js'
import lips from '../images/lips.js'
import lipColors from '../images/lipColors.js'
import hairs from '../images/hairs.js'
import hairColors from '../images/hairColors.js'
import dresses from '../images/dresses.js'
import dressColors from '../images/dressColors'
import earrings from '../images/earrings.js'
import necklaces from '../images/necklaces.js'
import backgrounds from '../images/backgrounds.js'
import SkinSelector from '../components/SkinSelector'
import EyeSelector from '../components/EyeSelector'
import LipSelector from '../components/LipSelector'
import HairSelector from '../components/HairSelector'
import DressSelector from '../components/DressSelector'
import EarringSelector from '../components/EarringSelector'
import NecklaceSelector from '../components/NecklaceSelector'
import BackgroundSelector from '../components/BackgroundSelector'

const Create = ({ user }) => {
  console.log('User in Create component:', user)
  let navigate = useNavigate()

  const initialState = {
    name: '',
    skin: 'https://i.imgur.com/tbzSNHR.png',
    eyes: 'https://i.imgur.com/K2tCb5r.png',
    hair: 'https://i.imgur.com/N8PK8ld.png',
    mouth: 'https://i.imgur.com/iGjv8dL.png',
    dress: 'https://i.imgur.com/WrKxSY9.png',
    necklace: '',
    earring: '',
    background: 'https://i.imgur.com/QhMZ4FM.png',
    base: false
  }

  const [formState, setFormState] = useState(initialState)

  const signIn = () => {
    navigate('/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await Client.post('/myprincesses', formState)
    navigate('/gallery')
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <div>
      {!user ? (
        <div className="createPage">
          <h1 className="createHeader">CREATE your PRINCESS!</h1>
          <div className="formContainer">
            <form className="createForm" onSubmit={handleSubmit}>
              <label className="skinDiv formLabel" htmlFor="selectSkin">
                SELECT MELANIN
              </label>
              <SkinSelector
                skins={skins}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="eyeColorDiv formLabel" htmlFor="selectEyeColor">
                EYE COLOR & SHAPE
              </label>
              <EyeSelector
                eyes={eyes}
                eyeColors={eyeColors}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="lipsDiv formLabel" htmlFor="selectLips">
                LIP COLOR & SHAPE
              </label>
              <LipSelector
                lips={lips}
                lipColors={lipColors}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="hairDiv formLabel" htmlFor="selectHairs">
                HAIR COLOR & STYLE
              </label>
              <HairSelector
                hairs={hairs}
                hairColors={hairColors}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="dressDiv formLabel" htmlFor="selectDress">
                DRESS COLOR & STYLE
              </label>
              <DressSelector
                dresses={dresses}
                dressColors={dressColors}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="earringDiv formLabel" htmlFor="selectEarrings">
                EARRINGS
              </label>
              <EarringSelector
                earrings={earrings}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="necklaceDiv formLabel" htmlFor="selectEarrings">
                NECKLACES
              </label>
              <NecklaceSelector
                necklaces={necklaces}
                formState={formState}
                setFormState={setFormState}
              />
              <label
                className="backgroundDiv formLabel"
                htmlFor="selectBackground"
              >
                BACKGROUND
              </label>
              <BackgroundSelector
                backgrounds={backgrounds}
                formState={formState}
                setFormState={setFormState}
              />
              <div className="nameDiv">
                <label htmlFor="name" className="createPrincessName formLabel">
                  NAME YOUR PRINCESS!
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  value={formState.name}
                ></input>
              </div>
              <div>
                <button className="addToGallery" onClick={signIn}>
                  Login to Add to Gallery!
                </button>
              </div>
            </form>
            <div className="princessCreation">
              <img
                className="princessCreationComponent"
                src={formState.background}
              />
              <img className="princessCreationComponent" src={formState.skin} />
              <img className="princessCreationComponent" src={formState.eyes} />
              <img
                className="princessCreationComponent"
                src={formState.mouth}
              />
              <img className="princessCreationComponent" src={formState.hair} />
              <img
                className="princessCreationComponent"
                src={formState.dress}
              />
              <img
                className="princessCreationComponent"
                src={formState.earring}
              />
              <img
                className="princessCreationComponent"
                src={formState.necklace}
              />
              <img
                className="princessCreationFrame"
                src="https://i.imgur.com/BIo6ToN.png"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="createPage">
          <h1 className="createHeader">CREATE your PRINCESS!</h1>
          <div className="formContainer">
            <form className="createForm" onSubmit={handleSubmit}>
              <label className="skinDiv formLabel" htmlFor="selectSkin">
                SELECT MELANIN
              </label>
              <SkinSelector
                skins={skins}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="eyeColorDiv formLabel" htmlFor="selectEyeColor">
                EYE COLOR & SHAPE
              </label>
              <EyeSelector
                eyes={eyes}
                eyeColors={eyeColors}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="lipsDiv formLabel" htmlFor="selectLips">
                LIP COLOR & SHAPE
              </label>
              <LipSelector
                lips={lips}
                lipColors={lipColors}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="hairDiv formLabel" htmlFor="selectHairs">
                HAIR COLOR & STYLE
              </label>
              <HairSelector
                hairs={hairs}
                hairColors={hairColors}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="dressDiv formLabel" htmlFor="selectDress">
                DRESS COLOR & STYLE
              </label>
              <DressSelector
                dresses={dresses}
                dressColors={dressColors}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="earringDiv formLabel" htmlFor="selectEarrings">
                EARRINGS
              </label>
              <EarringSelector
                earrings={earrings}
                formState={formState}
                setFormState={setFormState}
              />
              <label className="necklaceDiv formLabel" htmlFor="selectEarrings">
                NECKLACES
              </label>
              <NecklaceSelector
                necklaces={necklaces}
                formState={formState}
                setFormState={setFormState}
              />
              <label
                className="backgroundDiv formLabel"
                htmlFor="selectBackground"
              >
                BACKGROUND
              </label>
              <BackgroundSelector
                backgrounds={backgrounds}
                formState={formState}
                setFormState={setFormState}
              />
              <div className="nameDiv">
                <label htmlFor="name" className="createPrincessName formLabel">
                  NAME YOUR PRINCESS!
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  value={formState.name}
                ></input>
              </div>
              <div>
                <button className="addToGallery" type="submit">
                  Add to Gallery!
                </button>
              </div>
            </form>
            <div className="princessCreation">
              <img
                className="princessCreationComponent"
                src={formState.background}
              />
              <img className="princessCreationComponent" src={formState.skin} />
              <img className="princessCreationComponent" src={formState.eyes} />
              <img
                className="princessCreationComponent"
                src={formState.mouth}
              />
              <img className="princessCreationComponent" src={formState.hair} />
              <img
                className="princessCreationComponent"
                src={formState.dress}
              />
              <img
                className="princessCreationComponent"
                src={formState.earring}
              />
              <img
                className="princessCreationComponent"
                src={formState.necklace}
              />
              <img
                className="princessCreationFrame"
                src="https://i.imgur.com/BIo6ToN.png"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Create
