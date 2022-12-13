import { useState } from 'react'

export const HairSelector = ({ hairs, formState, setFormState }) => {
  const [selectingHairs, setSelectingHairs] = useState(false)
  const [selectedHairs, setSelectedHairs] = useState(false)

  const selectHairs = (hairs) => {
    let tempState = { ...formState, hair: hairs.url }
    setSelectedHairs(hairs.url)
    setFormState(tempState)
    setSelectingHairs(false)
  }

  return (
    <div>
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
    </div>
  )
}

export default HairSelector
