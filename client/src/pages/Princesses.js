import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Princess from '../components/Princess'

const Princesses = () => {
  const [princesses, setPrincesses] = useState([])

  let navigate = useNavigate()
  let { princessId } = useParams()

  const getPrincesses = async () => {
    const response = await axios.get(`/princesses`)
    setPrincesses(response.data.princesses)
    console.log(response.data.princesses)
  }

  const viewPrincess = (id) => {
    navigate(`/princesses/${id}`)
  }

  useEffect(() => {
    getPrincesses()
  }, [princessId])

  return (
    <div className="princessGrid">
      {princesses
        .filter((princess) => princess.base === true)
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
              crown={princess.crown}
              background={princess.background}
              frame={princess.frame}
              onClick={viewPrincess}
            />
          </div>
        ))}
    </div>
  )
}

export default Princesses
