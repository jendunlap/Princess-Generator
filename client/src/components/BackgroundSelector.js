import { useState } from 'react'

const BackgroundSelector = ({ backgrounds, formState, setFormState }) => {
  const [selectingBackground, setSelectingBackground] = useState(false)

  const selectBackground = (backgrounds) => {
    let tempState = { ...formState, background: backgrounds.url }
    setFormState(tempState)
    setSelectingBackground(false)
  }

  return (
    <div>
      {selectingBackground ? (
        <div className="backgroundMap">
          {backgrounds.map((background, index) => (
            <img
              className="mappedBackgrounds"
              key={index}
              src={background.color}
              alt={background.name}
              onClick={() => selectBackground(background)}
            />
          ))}
        </div>
      ) : (
        <div
          className="selectBackgroundButton"
          onClick={() => setSelectingBackground(true)}
        >
          {backgrounds.map((background, index) => (
            <img
              className="mappedBackgrounds"
              key={index}
              src={background.color}
              alt={background.name}
              onClick={() => selectBackground(background)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default BackgroundSelector
