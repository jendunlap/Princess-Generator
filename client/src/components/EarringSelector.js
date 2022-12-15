import { useState } from 'react'

const EarringSelector = ({ earrings, formState, setFormState }) => {
  const [selectingEarrings, setSelectingEarrings] = useState(false)

  const selectEarrings = (earrings) => {
    let tempState = { ...formState, earring: earrings.url }
    setFormState(tempState)
    setSelectingEarrings(false)
  }

  return (
    <div>
      <div>
        {selectingEarrings ? (
          <div className="earringMap">
            {earrings.map((earring, index) => (
              <img
                className="mappedEarrings"
                key={index}
                src={earring.shape}
                alt={earring.name}
                onClick={() => selectEarrings(earring)}
              />
            ))}
          </div>
        ) : (
          <div
            className="selectEarringButton"
            onClick={() => setSelectingEarrings(true)}
          >
            {earrings.map((earring, index) => (
              <img
                className="mappedEarrings"
                key={index}
                src={earring.shape}
                alt={earring.name}
                onClick={() => selectEarrings(earring)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default EarringSelector
