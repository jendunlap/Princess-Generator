import hairColors from '../images/hairColors.js'
import { useState } from 'react'

export const HairSelector = ({
  hairs,
  hairColors,
  formState,
  setFormState
}) => {
  const [selectedHairColor, setSelectedHairColor] = useState(false)
  const [selectingHairs, setSelectingHairs] = useState(false)
  const [selectedHairs, setSelectedHairs] = useState(false)

  const selectHairColor = (hairColors, hairs) => {
    setSelectedHairColor(hairColors.url)
  }

  const selectHairs = (hairs) => {
    let tempState = { ...formState, hair: hairs.url }
    setSelectedHairs(hairs.url)
    setFormState(tempState)
    setSelectingHairs(false)
  }

  return (
    <div>
      <div className="eyeColorMap">
        {hairColors.map((color, index) => (
          <img
            className="mappedEyes"
            key={index}
            src={color.url}
            name={color.name}
            alt={color.name}
            onClick={() => selectHairColor(color)}
          />
        ))}
      </div>
      {/* SHAPE */}
      <label className="hairDiv formLabel" htmlFor="selectHair">
        Hair Style
      </label>
      {(() => {
        switch (selectedHairColor) {
          case 'https://i.imgur.com/xbfkL0x.jpg':
            return (
              <div>
                {selectingHairs ? (
                  <div className="hairMap">
                    {hairs
                      .filter((hair) => hair.color === 'blonde')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
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
                    {hairs
                      .filter((hair) => hair.color === 'blonde')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
                          alt={hair.name}
                          onClick={() => selectHairs(hair)}
                        />
                      ))}
                  </div>
                )}
              </div>
            )
            break
          case 'https://i.imgur.com/pxDWrCv.jpg':
            return (
              <div>
                {selectingHairs ? (
                  <div className="hairMap">
                    {hairs
                      .filter((hair) => hair.color === 'gold')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
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
                    {hairs
                      .filter((hair) => hair.color === 'gold')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
                          alt={hair.name}
                          onClick={() => selectHairs(hair)}
                        />
                      ))}
                  </div>
                )}
              </div>
            )
            break
          case 'https://i.imgur.com/fFMj1qk.jpg':
            return (
              <div>
                {selectingHairs ? (
                  <div className="hairMap">
                    {hairs
                      .filter((hair) => hair.color === 'orange')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
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
                    {hairs
                      .filter((hair) => hair.color === 'orange')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
                          alt={hair.name}
                          onClick={() => selectHairs(hair)}
                        />
                      ))}
                  </div>
                )}
              </div>
            )
            break
          case 'https://i.imgur.com/sC9qJ8l.jpg':
            return (
              <div>
                {selectingHairs ? (
                  <div className="hairMap">
                    {hairs
                      .filter((hair) => hair.color === 'red')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
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
                    {hairs
                      .filter((hair) => hair.color === 'red')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
                          alt={hair.name}
                          onClick={() => selectHairs(hair)}
                        />
                      ))}
                  </div>
                )}
              </div>
            )
            break
          case 'https://i.imgur.com/TTJdV1x.jpg':
            return (
              <div>
                {selectingHairs ? (
                  <div className="hairMap">
                    {hairs
                      .filter((hair) => hair.color === 'lightbrown')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
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
                    {hairs
                      .filter((hair) => hair.color === 'lightbrown')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
                          alt={hair.name}
                          onClick={() => selectHairs(hair)}
                        />
                      ))}
                  </div>
                )}
              </div>
            )
            break
          case 'https://i.imgur.com/JDEEwJU.jpg':
            return (
              <div>
                {selectingHairs ? (
                  <div className="hairMap">
                    {hairs
                      .filter((hair) => hair.color === 'brown')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
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
                    {hairs
                      .filter((hair) => hair.color === 'brown')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
                          alt={hair.name}
                          onClick={() => selectHairs(hair)}
                        />
                      ))}
                  </div>
                )}
              </div>
            )
            break
          case 'https://i.imgur.com/sKxkwY4.jpg':
            return (
              <div>
                {selectingHairs ? (
                  <div className="hairMap">
                    {hairs
                      .filter((hair) => hair.color === 'black')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
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
                    {hairs
                      .filter((hair) => hair.color === 'black')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
                          alt={hair.name}
                          onClick={() => selectHairs(hair)}
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
                {selectingHairs ? (
                  <div className="hairMap">
                    {hairs
                      .filter((hair) => hair.color === 'blonde')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
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
                    {hairs
                      .filter((hair) => hair.color === 'blonde')
                      .map((hair, index) => (
                        <img
                          className="mappedHairs"
                          key={index}
                          src={hair.shape}
                          name={hair.name}
                          alt={hair.name}
                          onClick={() => selectHairs(hair)}
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

export default HairSelector
