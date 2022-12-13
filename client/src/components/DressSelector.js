import { useState } from 'react'

const DressSelector = ({ dresses, formState, setFormState }) => {
  const [selectingDress, setSelectingDress] = useState(false)
  const [selectedDress, setSelectedDress] = useState(false)

  const selectDress = (dresses) => {
    let tempState = { ...formState, dress: dresses.url }
    setSelectedDress(dresses.url)
    setFormState(tempState)
    setSelectingDress(false)
  }

  return (
    <div>
      {selectingDress ? (
        <div className="dressMap">
          {dresses.map((dress, index) => (
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
          {dresses.map((dress, index) => (
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
}

export default DressSelector
