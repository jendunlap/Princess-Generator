import { useState } from 'react'

const EyeSelector = ({ eyes, eyeColors, formState, setFormState }) => {
  const [selectingEyes, setSelectingEyes] = useState(false)
  const [selectedEye, setSelectedEye] = useState({
    color: 'blue',
    colorUrl: 'https://i.imgur.com/dRvr5fJ.jpg',
    shape: 'Cinderella',
    shapeUrl: 'https://i.imgur.com/KQ6ib8I.png'
  })

  const selectEyeColor = (eyeColor) => {
    let tempEye = { ...selectedEye }
    let tempState = { ...formState }
    tempEye.color = eyeColor.name
    tempEye.colorUrl = eyeColor.url
    eyes.forEach((eye) => {
      if (tempEye.color === eye.color && tempEye.shape === eye.name) {
        tempEye.shapeUrl = eye.url
        tempState.eyes = eye.url
      }
    })
    setSelectedEye(tempEye)
    setFormState(tempState)
  }
  const selectEyes = (eye) => {
    let tempState = { ...formState, eyes: eye.url }
    let tempEye = { ...selectedEye }
    tempEye.shapeUrl = eye.url
    tempEye.shape = eye.name
    setSelectedEye(tempEye)
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
            name={color.name}
            alt={color.name}
            onClick={() => selectEyeColor(color)}
          />
        ))}
      </div>
      {/* SHAPE */}
      {/* <label className="eyesDiv formLabel" htmlFor="selectEyes">
        Eye Shape
      </label> */}
      {(() => {
        switch (selectedEye.colorUrl) {
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
                          name={eye.name}
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
                          name={eye.name}
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
                          name={eye.name}
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
                          name={eye.name}
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
                      .filter((eye) => eye.color === 'honey')
                      .map((eye, index) => (
                        <img
                          className="mappedEyes"
                          key={index}
                          src={eye.shape}
                          name={eye.name}
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
                      .filter((eye) => eye.color === 'honey')
                      .map((eye, index) => (
                        <img
                          className="mappedEyes"
                          key={index}
                          src={eye.shape}
                          name={eye.name}
                          alt={eye.name}
                          onClick={() => selectEyes(eye)}
                        />
                      ))}
                  </div>
                )}
              </div>
            )
            break
          case 'https://i.imgur.com/vbu1ZmV.jpg':
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
                          name={eye.name}
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
                          name={eye.name}
                          alt={eye.name}
                          onClick={() => selectEyes(eye)}
                        />
                      ))}
                  </div>
                )}
              </div>
            )
            break
          case 'https://i.imgur.com/rqe5HV7.jpg':
            return (
              <div>
                {selectingEyes ? (
                  <div className="eyeMap">
                    {eyes
                      .filter((eye) => eye.color === 'green')
                      .map((eye, index) => (
                        <img
                          className="mappedEyes"
                          key={index}
                          src={eye.shape}
                          name={eye.name}
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
                      .filter((eye) => eye.color === 'green')
                      .map((eye, index) => (
                        <img
                          className="mappedEyes"
                          key={index}
                          src={eye.shape}
                          name={eye.name}
                          alt={eye.name}
                          onClick={() => selectEyes(eye)}
                        />
                      ))}
                  </div>
                )}
              </div>
            )
            break
          case 'https://i.imgur.com/m9hYkyS.jpg':
            return (
              <div>
                {selectingEyes ? (
                  <div className="eyeMap">
                    {eyes
                      .filter((eye) => eye.color === 'violet')
                      .map((eye, index) => (
                        <img
                          className="mappedEyes"
                          key={index}
                          src={eye.shape}
                          name={eye.name}
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
                      .filter((eye) => eye.color === 'violet')
                      .map((eye, index) => (
                        <img
                          className="mappedEyes"
                          key={index}
                          src={eye.shape}
                          name={eye.name}
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
                          name={eye.name}
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
                          name={eye.name}
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
