const Princess = (props) => {
  return (
    <div className="princessDiv" onClick={() => props.onClick(props.id)}>
      <div className="princessPortrait">
        <img src={props.skin} className="princessPortraitComponent" />
        <img src={props.eyes} className="princessPortraitComponent" />
        <img src={props.mouth} className="princessPortraitComponent" />
        <img src={props.hair} className="princessPortraitComponent" />
        <img src={props.dress} className="princessPortraitComponent" />
        <img src={props.accessories[0]} className="princessPortraitComponent" />
        <img src={props.accessories[1]} className="princessPortraitComponent" />
        <img src={props.accessories[2]} className="princessPortraitComponent" />
      </div>
      <h1 className="princessPortraitName">{props.name}</h1>
    </div>
  )
}

export default Princess
