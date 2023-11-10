// import { useState, useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import Princess from '../components/Princess'
// import Client from '../services/Taco.js'

// const Gallery = () => {
//   const [princesses, setPrincesses] = useState(null)

//   let navigate = useNavigate()
//   let { princessId } = useParams()

//   const getPrincesses = async () => {
//     const response = await Client.get(`/myprincesses`)
//     setPrincesses(response.data.princesses)
//     console.log(response.data.princesses)
//   }

//   const viewPrincess = (id) => {
//     navigate(`/myprincesses/${id}`)
//   }

//   useEffect(() => {
//     getPrincesses()
//   }, [princessId])

//   return (
//     <div>
//       {!princesses ? null : (
//         <div className="princessGrid">
//           {princesses
//             .filter((princess) => princess.base === false)
//             .sort((a, b) => a.name.localeCompare(b.name))
//             .map((princess) => (
//               <div className="princessGridCard">
//                 <Princess
//                   id={princess._id}
//                   key={princess._id}
//                   base={princess.base}
//                   name={princess.name}
//                   skin={princess.skin}
//                   eyes={princess.eyes}
//                   hair={princess.hair}
//                   mouth={princess.mouth}
//                   dress={princess.dress}
//                   necklace={princess.necklace}
//                   earring={princess.earring}
//                   background={princess.background}
//                   frame={princess.frame}
//                   onClick={viewPrincess}
//                 />
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Gallery

import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Princess from '../components/Princess'
import Client from '../services/Taco.js'

const Gallery = ({ user }) => {
  const [princesses, setPrincesses] = useState(null)

  let navigate = useNavigate()
  let { princessId } = useParams()

  const getPrincesses = async () => {
    try {
      const response = await Client.get(`/myprincesses`)
      setPrincesses(response.data.princesses)
      console.log(response.data.princesses)
    } catch (error) {}
  }

  const signIn = () => {
    navigate('/login')
  }

  const viewPrincess = (id) => {
    navigate(`/myprincesses/${id}`)
  }

  useEffect(() => {
    getPrincesses()
  }, [princessId])

  return (
    <div>
      {!user ? (
        <div>
          <p className="homeHeader">SIGN IN to VIEW!</p>
          <button className="addToGallery" onClick={signIn}>
            Sign In!
          </button>
        </div>
      ) : !princesses ? null : (
        <div className="princessGrid">
          {princesses
            .filter((princess) => princess.base === false)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((princess) => (
              <div className="princessGridCard" key={princess._id}>
                <Princess
                  id={princess._id}
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
                  onClick={() => viewPrincess(princess._id)}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default Gallery
