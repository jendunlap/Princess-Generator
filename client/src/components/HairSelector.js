import hairColors from '../images/hairColors.js'
import { useState } from 'react'

export const HairSelector = ({
  hairs,
  hairColors,
  formState,
  setFormState
}) => {
  // const [selectedHairColor, setSelectedHairColor] = useState(false)
  const [selectingHairs, setSelectingHairs] = useState(false)
  const [selectedHair, setSelectedHair] = useState({
    color: 'blonde',
    colorUrl: 'https://i.imgur.com/xbfkL0x.jpg',
    shape: 'Rapunzel',
    shapeUrl: 'https://i.imgur.com/pPdKvqC.png'
  })

  const selectHairColor = (hairColor) => {
    let tempHair = { ...selectedHair }
    let tempState = { ...formState }
    tempHair.color = hairColor.name
    tempHair.colorUrl = hairColor.url
    hairs.forEach((hair) => {
      if (tempHair.color === hair.color && tempHair.shape === hair.name) {
        tempHair.shapeUrl = hair.url
        tempState.hair = hair.url
      }
    })
    setSelectedHair(tempHair)
    setFormState(tempState)
  }

  const selectHairs = (hair) => {
    let tempState = { ...formState, hair: hair.url }
    let tempHair = { ...selectedHair }
    tempHair.shapeUrl = hair.url
    tempHair.shape = hair.name
    setSelectedHair(tempHair)
    setFormState(tempState)
    setSelectingHairs(false)
  }

  return (
    <div>
      <div className="hairColorMap">
        {hairColors.map((color, index) => (
          <img
            className="mappedHair"
            key={index}
            src={color.url}
            name={color.name}
            alt={color.name}
            onClick={() => selectHairColor(color)}
          />
        ))}
      </div>
      {/* SHAPE */}
      {/* <label className="hairDiv formLabel" htmlFor="selectHair">
        Hair Style
      </label> */}
      {(() => {
        switch (selectedHair.colorUrl) {
          case 'https://i.imgur.com/xbfkL0x.jpg':
            return (
              <div>
                {selectingHairs ? (
                  <div className="hairMap">
                    {hairs
                      .filter((hair) => hair.color === 'blonde')
                      .map((hair, index) => (
                        <img
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
                          className="mappedHair"
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
