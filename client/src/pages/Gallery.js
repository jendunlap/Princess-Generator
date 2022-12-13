import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Princess from '../components/Princess'
import Client from '../services/api'

const Gallery = () => {
  const [princesses, setPrincesses] = useState([])

  let navigate = useNavigate()
  let { princessId } = useParams()

  const getPrincesses = async () => {
    const response = await Client.get(`http://localhost:3001/myprincesses`)
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
    <div className="princessGrid">
      {princesses
        .filter((princess) => princess.base === false)
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
              accessories={princess.accessories}
              background={princess.background}
              frame={princess.frame}
              onClick={viewPrincess}
            />
          </div>
        ))}
    </div>
  )
}

export default Gallery
