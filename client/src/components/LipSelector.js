import { useState } from 'react'

const LipSelector = ({ lips, lipColors, formState, setFormState }) => {
  const [selectingLips, setSelectingLips] = useState(false)
  const [selectedLip, setSelectedLip] = useState({
    color: 'hotpink',
    colorUrl: 'https://i.imgur.com/h4rEyWg.png',
    shape: 'Cinderella',
    shapeUrl: 'https://i.imgur.com/hwQXj9l.png'
  })

  const selectLipColor = (lipColor) => {
    let tempLip = { ...selectedLip }
    let tempState = { ...formState }
    tempLip.color = lipColor.name
    tempLip.colorUrl = lipColor.url
    lips.forEach((lip) => {
      if (tempLip.color === lip.color && tempLip.shape === lip.name) {
        tempLip.shapeUrl = lip.url
        tempState.mouth = lip.url
      }
    })
    setSelectedLip(tempLip)
    setFormState(tempState)
  }
  const selectLips = (lip) => {
    let tempState = { ...formState, mouth: lip.url }
    let tempLip = { ...selectedLip }
    tempLip.shapeUrl = lip.url
    tempLip.shape = lip.name
    setSelectedLip(tempLip)
    setFormState(tempState)
    setSelectingLips(false)
  }

  return (
    <div>
      <div className="lipColorMap">
        {lipColors.map((color, index) => (
          <img
            className="mappedLips"
            key={index}
            src={color.url}
            name={color.name}
            alt={color.name}
            onClick={() => selectLipColor(color)}
          />
        ))}
      </div>
      {(() => {
        switch (selectedLip.colorUrl) {
          case 'https://i.imgur.com/h4rEyWg.png':
            return (
              <div>
                {selectingLips ? (
                  <div className="lipMap">
                    {lips
                      .filter((lip) => lip.color === 'beige')
                      .map((lip, index) => (
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
                    {lips
                      .filter((lip) => lip.color === 'beige')
                      .map((lip, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/wgF1D3E.png':
            return (
              <div>
                {selectingLips ? (
                  <div className="lipMap">
                    {lips
                      .filter((lip) => lip.color === 'lightorange')
                      .map((lip, index) => (
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
                    {lips
                      .filter((lip) => lip.color === 'lightorange')
                      .map((lip, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/QEqlbwi.png':
            return (
              <div>
                {selectingLips ? (
                  <div className="lipMap">
                    {lips
                      .filter((lip) => lip.color === 'lightpink')
                      .map((lip, index) => (
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
                    {lips
                      .filter((lip) => lip.color === 'lightpink')
                      .map((lip, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/CslXS27.png':
            return (
              <div>
                {selectingLips ? (
                  <div className="lipMap">
                    {lips
                      .filter((lip) => lip.color === 'brightpink')
                      .map((lip, index) => (
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
                    {lips
                      .filter((lip) => lip.color === 'brightpink')
                      .map((lip, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/PI0UrNH.png':
            return (
              <div>
                {selectingLips ? (
                  <div className="lipMap">
                    {lips
                      .filter((lip) => lip.color === 'hotpink')
                      .map((lip, index) => (
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
                    {lips
                      .filter((lip) => lip.color === 'hotpink')
                      .map((lip, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/dpqzdxW.png':
            return (
              <div>
                {selectingLips ? (
                  <div className="lipMap">
                    {lips
                      .filter((lip) => lip.color === 'red')
                      .map((lip, index) => (
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
                    {lips
                      .filter((lip) => lip.color === 'red')
                      .map((lip, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/0qEMtm5.png':
            return (
              <div>
                {selectingLips ? (
                  <div className="lipMap">
                    {lips
                      .filter((lip) => lip.color === 'burgundy')
                      .map((lip, index) => (
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
                    {lips
                      .filter((lip) => lip.color === 'burgundy')
                      .map((lip, index) => (
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
              </div>
            )
            break
          case 'https://i.imgur.com/RLRmyEH.png':
            return (
              <div>
                {selectingLips ? (
                  <div className="lipMap">
                    {lips
                      .filter((lip) => lip.color === 'dark')
                      .map((lip, index) => (
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
                    {lips
                      .filter((lip) => lip.color === 'dark')
                      .map((lip, index) => (
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
              </div>
            )
            break
        }
      })()}
    </div>
  )
}

export default LipSelector
