import { useState } from 'react'

const LipSelector = ({ lips, formState, setFormState }) => {
  const [selectingLips, setSelectingLips] = useState(false)
  const [selectedLips, setSelectedLips] = useState(false)

  const selectLips = (lips) => {
    let tempState = { ...formState, mouth: lips.url }
    setSelectedLips(lips.url)
    setFormState(tempState)
    setSelectingLips(false)
  }

  return (
    <div>
      {selectingLips ? (
        <div className="lipMap">
          {lips.map((lip, index) => (
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
          {lips.map((lip, index) => (
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
}

export default LipSelector
