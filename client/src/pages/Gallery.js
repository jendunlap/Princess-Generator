import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Princess from '../components/Princess'
import Client from '../services/Taco.js'

const Gallery = () => {
  const [princesses, setPrincesses] = useState(null)

  let navigate = useNavigate()
  let { princessId } = useParams()

  const getPrincesses = async () => {
    const response = await Client.get(`/myprincesses`)
    setPrincesses(response.data.princesses)
    console.log(response.data.princesses)
  }

  const viewPrincess = (id) => {
    navigate(`/myprincesses/${id}`)
  }

  useEffect(() => {
    getPrincesses()
  }, [princessId])

  return (
    <div>
      {!princesses ? null : (
        <div className="princessGrid">
          {princesses
            .filter((princess) => princess.base === false)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((princess) => (
              <div className="princessGridCard">
                <Princess
                  id={princess._id}
                  key={princess._id}
                  base={princess.base}
                  name={princess.name}
                  skin={princess.skin}
                  eyes={princess.eyes}
                  hair={princess.hair}
                  mouth={princess.mouth}
                  dress={princess.dress}
                  necklace={princess.necklace}
                  earring={princess.earring}
                  background={princess.background}
                  frame={princess.frame}
                  onClick={viewPrincess}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default Gallery
