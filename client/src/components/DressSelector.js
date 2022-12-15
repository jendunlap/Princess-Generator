import { useState } from 'react'

const DressSelector = ({ dresses, dressColors, formState, setFormState }) => {
  const [selectingDress, setSelectingDress] = useState(false)
  const [selectedDress, setSelectedDress] = useState({
    color: 'blue',
    colorUrl: 'https://i.imgur.com/n5t5NYt.jpg',
    shape: 'Cinderella',
    shapeUrl: 'https://i.imgur.com/dz8Oml1.png'
  })

  const selectDressColor = (dressColor) => {
    let tempDress = { ...selectedDress }
    let tempState = { ...formState }
    tempDress.color = dressColor.name
    tempDress.colorUrl = dressColor.url
    dresses.forEach((dress) => {
      if (tempDress.color === dress.color && tempDress.shape === dress.name) {
        tempDress.shapeUrl = dress.url
        tempState.dress = dress.url
      }
    })
    setSelectedDress(tempDress)
    setFormState(tempState)
  }
  const selectDress = (dress) => {
    let tempState = { ...formState, dress: dress.url }
    let tempDress = { ...selectedDress }
    tempDress.shapeUrl = dress.url
    tempDress.shape = dress.name
    setSelectedDress(tempDress)
    setFormState(tempState)
    setSelectingDress(false)
  }

  return (
    <div>
      <div className="dressColorMap">
        {dressColors.map((color, index) => (
          <img
            className="mappedDresses"
            key={index}
            src={color.url}
            name={color.name}
            alt={color.name}
            onClick={() => selectDressColor(color)}
          />
        ))}
      </div>
      {(() => {
        switch (selectedDress.colorUrl) {
          case 'https://i.imgur.com/n5t5NYt.jpg':
            return (
              <div>
                {selectingDress ? (
                  <div className="dressMap">
                    {dresses
                      .filter((dress) => dress.color === 'pink')
                      .map((dress, index) => (
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
                    {dresses
                      .filter((dress) => dress.color === 'pink')
                      .map((dress, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/a2NEMMv.jpg':
            return (
              <div>
                {selectingDress ? (
                  <div className="dressMap">
                    {dresses
                      .filter((dress) => dress.color === 'yellow')
                      .map((dress, index) => (
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
                    {dresses
                      .filter((dress) => dress.color === 'yellow')
                      .map((dress, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/pgsKbpd.jpg':
            return (
              <div>
                {selectingDress ? (
                  <div className="dressMap">
                    {dresses
                      .filter((dress) => dress.color === 'green')
                      .map((dress, index) => (
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
                    {dresses
                      .filter((dress) => dress.color === 'green')
                      .map((dress, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/vYDlGcx.jpg':
            return (
              <div>
                {selectingDress ? (
                  <div className="dressMap">
                    {dresses
                      .filter((dress) => dress.color === 'blue')
                      .map((dress, index) => (
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
                    {dresses
                      .filter((dress) => dress.color === 'blue')
                      .map((dress, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/7yfPyvE.jpg':
            return (
              <div>
                {selectingDress ? (
                  <div className="dressMap">
                    {dresses
                      .filter((dress) => dress.color === 'turquoise')
                      .map((dress, index) => (
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
                    {dresses
                      .filter((dress) => dress.color === 'turquoise')
                      .map((dress, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/ONZuzJJ.jpg':
            return (
              <div>
                {selectingDress ? (
                  <div className="dressMap">
                    {dresses
                      .filter((dress) => dress.color === 'teal')
                      .map((dress, index) => (
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
                    {dresses
                      .filter((dress) => dress.color === 'teal')
                      .map((dress, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/UKifi94.jpg':
            return (
              <div>
                {selectingDress ? (
                  <div className="dressMap">
                    {dresses
                      .filter((dress) => dress.color === 'purple')
                      .map((dress, index) => (
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
                    {dresses
                      .filter((dress) => dress.color === 'purple')
                      .map((dress, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/LCHoeG1.jpg':
            return (
              <div>
                {selectingDress ? (
                  <div className="dressMap">
                    {dresses
                      .filter((dress) => dress.color === 'black')
                      .map((dress, index) => (
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
                    {dresses
                      .filter((dress) => dress.color === 'black')
                      .map((dress, index) => (
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
              </div>
            )
            break
          default:
            return (
              <div>
                {selectingDress ? (
                  <div className="dressMap">
                    {dresses
                      .filter((dress) => dress.color === 'blue')
                      .map((dress, index) => (
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
                    {dresses
                      .filter((dress) => dress.color === 'blue')
                      .map((dress, index) => (
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
              </div>
            )
            break
        }
      })()}
    </div>
  )
}

export default DressSelector
