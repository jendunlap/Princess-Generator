import { useState } from 'react'

const NecklaceSelector = ({ necklaces, formState, setFormState }) => {
  const [selectingNecklaces, setSelectingNecklaces] = useState(false)

  const selectNecklaces = (necklaces) => {
    let tempState = { ...formState, necklace: necklaces.url }
    setFormState(tempState)
    setSelectingNecklaces(false)
  }

  return (
    <div>
      <div>
        {selectingNecklaces ? (
          <div className="necklaceMap">
            {necklaces.map((necklace, index) => (
              <img
                className="mappedNecklaces"
                key={index}
                src={necklace.shape}
                alt={necklace.name}
                onClick={() => selectNecklaces(necklace)}
              />
            ))}
          </div>
        ) : (
          <div
            className="selectNecklaceButton"
            onClick={() => setSelectingNecklaces(true)}
          >
            {necklaces.map((necklace, index) => (
              <img
                className="mappedNecklaces"
                key={index}
                src={necklace.shape}
                alt={necklace.name}
                onClick={() => selectNecklaces(necklace)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default NecklaceSelector
