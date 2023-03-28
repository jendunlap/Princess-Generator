const dresses = [
  {
    name: 'Cinderella',
    shape: 'https://i.imgur.com/A5XROUx.png',
    url: 'https://i.imgur.com/A5XROUx.png',
    color: 'pink'
  },
  {
    name: 'Cinderella',
    shape: 'https://i.imgur.com/S7YoXzE.png',
    url: 'https://i.imgur.com/S7YoXzE.png',
    color: 'red'
  },
  {
    name: 'Cinderella',
    shape: 'https://i.imgur.com/VjR49nt.png',
    url: 'https://i.imgur.com/VjR49nt.png',
    color: 'yellow'
  },
  {
    name: 'Cinderella',
    shape: 'https://i.imgur.com/BFCKRFt.png',
    url: 'https://i.imgur.com/BFCKRFt.png',
    color: 'green'
  },
  {
    name: 'Cinderella',
    shape: 'https://i.imgur.com/dz8Oml1.png',
    url: 'https://i.imgur.com/dz8Oml1.png',
    color: 'blue'
  },
  {
    name: 'Cinderella',
    shape: 'https://i.imgur.com/dBFN72g.png',
    url: 'https://i.imgur.com/dBFN72g.png',
    color: 'turquoise'
  },
  {
    name: 'Cinderella',
    shape: 'https://i.imgur.com/IYIWofV.png',
    url: 'https://i.imgur.com/IYIWofV.png',
    color: 'teal'
  },
  {
    name: 'Cinderella',
    shape: 'https://i.imgur.com/R9gvP9g.png',
    url: 'https://i.imgur.com/R9gvP9g.png',
    color: 'purple'
  },
  {
    name: 'Cinderella',
    shape: 'https://i.imgur.com/HCxehB4.png',
    url: 'https://i.imgur.com/HCxehB4.png',
    color: 'black'
  },
  {
    name: 'Ariel',
    shape: 'https://i.imgur.com/etAj4Py.png',
    url: 'https://i.imgur.com/etAj4Py.png',
    color: 'pink'
  },
  {
    name: 'Ariel',
    shape: 'https://i.imgur.com/pY1vz78.png',
    url: 'https://i.imgur.com/pY1vz78.png',
    color: 'red'
  },
  {
    name: 'Ariel',
    shape: 'https://i.imgur.com/2A6gDu4.png',
    url: 'https://i.imgur.com/2A6gDu4.png',
    color: 'yellow'
  },
  {
    name: 'Ariel',
    shape: 'https://i.imgur.com/0kSHCfU.png',
    url: 'https://i.imgur.com/0kSHCfU.png',
    color: 'green'
  },
  {
    name: 'Ariel',
    shape: 'https://i.imgur.com/JKQLJDH.png',
    url: 'https://i.imgur.com/JKQLJDH.png',
    color: 'blue'
  },
  {
    name: 'Ariel',
    shape: 'https://i.imgur.com/Z5UVxPf.png',
    url: 'https://i.imgur.com/Z5UVxPf.png',
    color: 'turquoise'
  },
  {
    name: 'Ariel',
    shape: 'https://i.imgur.com/iclNwkv.png',
    url: 'https://i.imgur.com/iclNwkv.png',
    color: 'teal'
  },
  {
    name: 'Ariel',
    shape: 'https://i.imgur.com/cGukj6K.png',
    url: 'https://i.imgur.com/cGukj6K.png',
    color: 'purple'
  },
  {
    name: 'Ariel',
    shape: 'https://i.imgur.com/2s8jWV9.png',
    url: 'https://i.imgur.com/2s8jWV9.png',
    color: 'black'
  },
  {
    name: 'Mulan',
    shape: 'https://i.imgur.com/F2lTymK.png',
    url: 'https://i.imgur.com/F2lTymK.png',
    color: 'pink'
  },
  {
    name: 'Mulan',
    shape: 'https://i.imgur.com/CPhcO3S.png',
    url: 'https://i.imgur.com/CPhcO3S.png',
    color: 'red'
  },
  {
    name: 'Mulan',
    shape: 'https://i.imgur.com/HjObU3R.png',
    url: 'https://i.imgur.com/HjObU3R.png',
    color: 'yellow'
  },
  {
    name: 'Mulan',
    shape: 'https://i.imgur.com/zc0LQn7.png',
    url: 'https://i.imgur.com/zc0LQn7.png',
    color: 'green'
  },
  {
    name: 'Mulan',
    shape: 'https://i.imgur.com/2U1mml7.png',
    url: 'https://i.imgur.com/2U1mml7.png',
    color: 'blue'
  },
  {
    name: 'Mulan',
    shape: 'https://i.imgur.com/68SjE3b.png',
    url: 'https://i.imgur.com/68SjE3b.png',
    color: 'turquoise'
  },
  {
    name: 'Mulan',
    shape: 'https://i.imgur.com/01ZSfk6.png',
    url: 'https://i.imgur.com/01ZSfk6.png',
    color: 'teal'
  },
  {
    name: 'Mulan',
    shape: 'https://i.imgur.com/pCKeDXW.png',
    url: 'https://i.imgur.com/pCKeDXW.png',
    color: 'purple'
  },
  {
    name: 'Mulan',
    shape: 'https://i.imgur.com/ayeOs9i.png',
    url: 'https://i.imgur.com/ayeOs9i.png',
    color: 'black'
  },
  {
    name: 'Tiana',
    shape: 'https://i.imgur.com/WE2tXBG.png',
    url: 'https://i.imgur.com/WE2tXBG.png',
    color: 'pink'
  },
  {
    name: 'Tiana',
    shape: 'https://i.imgur.com/SlLB86C.png',
    url: 'https://i.imgur.com/SlLB86C.png',
    color: 'red'
  },
  {
    name: 'Tiana',
    shape: 'https://i.imgur.com/Z2EyeKh.png',
    url: 'https://i.imgur.com/Z2EyeKh.png',
    color: 'yellow'
  },
  {
    name: 'Tiana',
    shape: 'https://i.imgur.com/8Tgxyfs.png',
    url: 'https://i.imgur.com/8Tgxyfs.png',
    color: 'green'
  },
  {
    name: 'Tiana',
    shape: 'https://i.imgur.com/RVpKB5d.png',
    url: 'https://i.imgur.com/RVpKB5d.png',
    color: 'blue'
  },
  {
    name: 'Tiana',
    shape: 'https://i.imgur.com/XNLeZPK.png',
    url: 'https://i.imgur.com/XNLeZPK.png',
    color: 'turquoise'
  },
  {
    name: 'Tiana',
    shape: 'https://i.imgur.com/BR4DEla.png',
    url: 'https://i.imgur.com/BR4DEla.png',
    color: 'teal'
  },
  {
    name: 'Tiana',
    shape: 'https://i.imgur.com/LUkP277.png',
    url: 'https://i.imgur.com/LUkP277.png',
    color: 'purple'
  },
  {
    name: 'Tiana',
    shape: 'https://i.imgur.com/jFrf1jk.png',
    url: 'https://i.imgur.com/jFrf1jk.png',
    color: 'black'
  },
  {
    name: 'Jasmine',
    shape: 'https://i.imgur.com/R6NE1Q0.png',
    url: 'https://i.imgur.com/R6NE1Q0.png',
    color: 'pink'
  },
  {
    name: 'Jasmine',
    shape: 'https://i.imgur.com/qAHmZQ0.png',
    url: 'https://i.imgur.com/qAHmZQ0.png',
    color: 'red'
  },
  {
    name: 'Jasmine',
    shape: 'https://i.imgur.com/IT6wucG.png',
    url: 'https://i.imgur.com/IT6wucG.png',
    color: 'yellow'
  },
  {
    name: 'Jasmine',
    shape: 'https://i.imgur.com/1G3JDYY.png',
    url: 'https://i.imgur.com/1G3JDYY.png',
    color: 'green'
  },
  {
    name: 'Jasmine',
    shape: 'https://i.imgur.com/wYPSWSG.png',
    url: 'https://i.imgur.com/wYPSWSG.png',
    color: 'blue'
  },
  {
    name: 'Jasmine',
    shape: 'https://i.imgur.com/d1vuq6Y.png',
    url: 'https://i.imgur.com/d1vuq6Y.png',
    color: 'turquoise'
  },
  {
    name: 'Jasmine',
    shape: 'https://i.imgur.com/P5iIXkO.png',
    url: 'https://i.imgur.com/P5iIXkO.png',
    color: 'teal'
  },
  {
    name: 'Jasmine',
    shape: 'https://i.imgur.com/4OXPQdh.png',
    url: 'https://i.imgur.com/4OXPQdh.png',
    color: 'purple'
  },
  {
    name: 'Jasmine',
    shape: 'https://i.imgur.com/0n5D5Wr.png',
    url: 'https://i.imgur.com/0n5D5Wr.png',
    color: 'black'
  },
  {
    name: 'Belle',
    shape: 'https://i.imgur.com/hggTtEk.png',
    url: 'https://i.imgur.com/hggTtEk.png',
    color: 'pink'
  },
  {
    name: 'Belle',
    shape: 'https://i.imgur.com/C0zRGiI.png',
    url: 'https://i.imgur.com/C0zRGiI.png',
    color: 'red'
  },
  {
    name: 'Belle',
    shape: 'https://i.imgur.com/eE9Rze4.png',
    url: 'https://i.imgur.com/eE9Rze4.png',
    color: 'yellow'
  },
  {
    name: 'Belle',
    shape: 'https://i.imgur.com/ZYeM1hx.png',
    url: 'https://i.imgur.com/ZYeM1hx.png',
    color: 'green'
  },
  {
    name: 'Belle',
    shape: 'https://i.imgur.com/EK41SMW.png',
    url: 'https://i.imgur.com/EK41SMW.png',
    color: 'blue'
  },
  {
    name: 'Belle',
    shape: 'https://i.imgur.com/A8WVwHb.png',
    url: 'https://i.imgur.com/A8WVwHb.png',
    color: 'turquoise'
  },
  {
    name: 'Belle',
    shape: 'https://i.imgur.com/aBp4Z4Y.png',
    url: 'https://i.imgur.com/aBp4Z4Y.png',
    color: 'teal'
  },
  {
    name: 'Belle',
    shape: 'https://i.imgur.com/MiyOWd8.png',
    url: 'https://i.imgur.com/MiyOWd8.png',
    color: 'purple'
  },
  {
    name: 'Belle',
    shape: 'https://i.imgur.com/jLphtpe.png',
    url: 'https://i.imgur.com/jLphtpe.png',
    color: 'black'
  },
  {
    name: 'Merida',
    shape: 'https://i.imgur.com/eiuoGcj.png',
    url: 'https://i.imgur.com/eiuoGcj.png',
    color: 'pink'
  },
  {
    name: 'Merida',
    shape: 'https://i.imgur.com/U1PddXt.png',
    url: 'https://i.imgur.com/U1PddXt.png',
    color: 'red'
  },
  {
    name: 'Merida',
    shape: 'https://i.imgur.com/H6V9h0n.png',
    url: 'https://i.imgur.com/H6V9h0n.png',
    color: 'yellow'
  },
  {
    name: 'Merida',
    shape: 'https://i.imgur.com/i4TU66w.png',
    url: 'https://i.imgur.com/i4TU66w.png',
    color: 'green'
  },
  {
    name: 'Merida',
    shape: 'https://i.imgur.com/RQ9bac9.png',
    url: 'https://i.imgur.com/RQ9bac9.png',
    color: 'blue'
  },
  {
    name: 'Merida',
    shape: 'https://i.imgur.com/giybTse.png',
    url: 'https://i.imgur.com/giybTse.png',
    color: 'turquoise'
  },
  {
    name: 'Merida',
    shape: 'https://i.imgur.com/wLXUklh.png',
    url: 'https://i.imgur.com/wLXUklh.png',
    color: 'teal'
  },
  {
    name: 'Merida',
    shape: 'https://i.imgur.com/Azh23Au.png',
    url: 'https://i.imgur.com/Azh23Au.png',
    color: 'purple'
  },
  {
    name: 'Merida',
    shape: 'https://i.imgur.com/Aj0Rn0y.png',
    url: 'https://i.imgur.com/Aj0Rn0y.png',
    color: 'black'
  },
  {
    name: 'Rapunzel',
    shape: 'https://i.imgur.com/wZ8fMVr.png',
    url: 'https://i.imgur.com/wZ8fMVr.png',
    color: 'pink'
  },
  {
    name: 'Rapunzel',
    shape: 'https://i.imgur.com/k82AvUT.png',
    url: 'https://i.imgur.com/k82AvUT.png',
    color: 'red'
  },
  {
    name: 'Rapunzel',
    shape: 'https://i.imgur.com/SOROe32.png',
    url: 'https://i.imgur.com/SOROe32.png',
    color: 'yellow'
  },
  {
    name: 'Rapunzel',
    shape: 'https://i.imgur.com/pv8hqcr.png',
    url: 'https://i.imgur.com/pv8hqcr.png',
    color: 'green'
  },
  {
    name: 'Rapunzel',
    shape: 'https://i.imgur.com/UnxvTA9.png',
    url: 'https://i.imgur.com/UnxvTA9.png',
    color: 'blue'
  },
  {
    name: 'Rapunzel',
    shape: 'https://i.imgur.com/GpC37IR.png',
    url: 'https://i.imgur.com/GpC37IR.png',
    color: 'turquoise'
  },
  {
    name: 'Rapunzel',
    shape: 'https://i.imgur.com/k4CUvpW.png',
    url: 'https://i.imgur.com/k4CUvpW.png',
    color: 'teal'
  },
  {
    name: 'Rapunzel',
    shape: 'https://i.imgur.com/Y00LAO1.png',
    url: 'https://i.imgur.com/Y00LAO1.png',
    color: 'purple'
  },
  {
    name: 'Rapunzel',
    shape: 'https://i.imgur.com/lwjUB0p.png',
    url: 'https://i.imgur.com/lwjUB0p.png',
    color: 'black'
  },
  {
    name: 'Moana',
    shape: 'https://i.imgur.com/TsSPsxA.png',
    url: 'https://i.imgur.com/TsSPsxA.png',
    color: 'pink'
  },
  {
    name: 'Moana',
    shape: 'https://i.imgur.com/bdlVb1u.png',
    url: 'https://i.imgur.com/bdlVb1u.png',
    color: 'red'
  },
  {
    name: 'Moana',
    shape: 'https://i.imgur.com/6816hbc.png',
    url: 'https://i.imgur.com/6816hbc.png',
    color: 'yellow'
  },
  {
    name: 'Moana',
    shape: 'https://i.imgur.com/hWzrq45.png',
    url: 'https://i.imgur.com/hWzrq45.png',
    color: 'green'
  },
  {
    name: 'Moana',
    shape: 'https://i.imgur.com/MMaTFW3.png',
    url: 'https://i.imgur.com/MMaTFW3.png',
    color: 'blue'
  },
  {
    name: 'Moana',
    shape: 'https://i.imgur.com/4GKBfpA.png',
    url: 'https://i.imgur.com/4GKBfpA.png',
    color: 'turquoise'
  },
  {
    name: 'Moana',
    shape: 'https://i.imgur.com/vg0qZkl.png',
    url: 'https://i.imgur.com/vg0qZkl.png',
    color: 'teal'
  },
  {
    name: 'Moana',
    shape: 'https://i.imgur.com/7J2p2TY.png',
    url: 'https://i.imgur.com/7J2p2TY.png',
    color: 'purple'
  },
  {
    name: 'Moana',
    shape: 'https://i.imgur.com/nRovFfc.png',
    url: 'https://i.imgur.com/nRovFfc.png',
    color: 'black'
  }
]

export default dresses
