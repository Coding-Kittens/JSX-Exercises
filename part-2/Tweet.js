const Tweet = (props)=>{
  return (
    <div>
      <div className="tweet">
        <p className='name'><b>{props.username}</b>: {props.name}</p>
        <p>{props.message}</p>
        <p className='date' >{props.date}</p>
      </div>
        {props.children? <div className = "replies">{props.children}</div> : null}
    </div>
  )
}
