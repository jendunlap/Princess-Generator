const Princess = (props) => {
  return (
    <div className="princessDiv">
      <div className="princessPortrait">
        <img src={props.skin} className="princessPortraitComponent" />
        <img src={props.eyes} className="princessPortraitComponent" />
        <img src={props.mouth} className="princessPortraitComponent" />
        <img src={props.hair} className="princessPortraitComponent" />
        <img src={props.dress} className="princessPortraitComponent" />
        <img src={props.accessories} className="princessPortraitComponent" />
      </div>
      <h1 className="princessPortraitName">{props.name}</h1>
    </div>
  )
}

export default Princess

// const Princess = (props) => {
//   return (
//     <div className="princessDiv">
//       <div className="princessPortrait">
//         <div className="princessPortraitComponent">
//           <img src={props.skin} />
//         </div>
//         <div className="princessPortraitComponent">
//           <img src={props.eyes} />{' '}
//         </div>
//         <div className="princessPortraitComponent">
//           <img src={props.mouth} />{' '}
//         </div>
//         <div className="princessPortraitComponent">
//           <img src={props.hair} />{' '}
//         </div>
//         <div className="princessPortraitComponent">
//           <img src={props.dress} />{' '}
//         </div>
//       </div>
//       <div className="princessName">
//         <h1>{props.name}</h1>
//       </div>
//     </div>
//   )
// }

// export default Princess
