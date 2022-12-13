import eyes from '../images/eyes'
import eyeColors from '../images/eyeColors'
import { useState } from 'react'

const EyeSelector = ({ eyes, eyeColors, formState, setFormState }) => {
  const [selectedEyeColor, setSelectedEyeColor] = useState(false)
  const [selectingEyes, setSelectingEyes] = useState(false)
  const [selectedEyes, setSelectedEyes] = useState(false)

  const selectEyeColor = (eyeColors, eyes) => {
    setSelectedEyeColor(eyeColors.url)
    setSelectedEyes()
  }
  const selectEyes = (eyes) => {
    let tempState = { ...formState, eyes: eyes.url }
    setSelectedEyes(eyes.url)
    setFormState(tempState)
    setSelectingEyes(false)
  }

  return (
    <div>
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
        }
      })()}
    </div>
  )
}

export default EyeSelector
