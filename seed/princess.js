const db = require('../db')
const Princess = require('../models/princess')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const princesses = [
    {
      name: 'Ariel',
      skin: 'https://i.imgur.com/RTl5lDC.png',
      eyes: 'https://i.imgur.com/GwdMpTf.png',
      hair: 'https://i.imgur.com/2xg5wTi.png',
      mouth: 'https://i.imgur.com/KjjJArX.png',
      dress: 'https://i.imgur.com/nY062A3.png'
    },
    {
      name: 'Cinderella',
      skin: 'https://i.imgur.com/RTl5lDC.png',
      eyes: 'https://i.imgur.com/kcsVArA.png',
      hair: 'https://i.imgur.com/z6P0ctP.png',
      mouth: 'https://i.imgur.com/FepOqy4.png',
      dress: 'https://i.imgur.com/oCEy2BE.png',
      accessories: ['https://i.imgur.com/mkhElZL.png']
    }
  ]

  await Princess.insertMany(princesses)
  console.log('Princesses Reign!')
}
const run = async () => {
  await main()
  db.close()
}

run()
