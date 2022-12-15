const Princess = (props) => {
  return (
    <div className="princessDiv" onClick={() => props.onClick(props.id)}>
      <div className="princessPortrait">
        <img src={props.background} className="princessPortraitComponent" />
        <img src={props.skin} className="princessPortraitComponent" />
        <img src={props.eyes} className="princessPortraitComponent" />
        <img src={props.mouth} className="princessPortraitComponent" />
        <img src={props.hair} className="princessPortraitComponent" />
        <img src={props.dress} className="princessPortraitComponent" />
        <img src={props.necklace} className="princessPortraitComponent" />
        <img src={props.earring} className="princessPortraitComponent" />
        <img src={props.crown} className="princessPortraitComponent" />
        {/* <img src={props.frame} className="princessPortraitFrame" />
        <img
          src="https://i.imgur.com/jf1dRaF.png"
          className="princessPortraitFrame"
        /> */}
      </div>
      <h1 className="princessPortraitName">{props.name}</h1>
    </div>
  )
}

export default Princess
