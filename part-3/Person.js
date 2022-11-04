const Person = ({name,age,hobbies})=>{
  return (
    <div>
      <p>Learn some information about this person.</p>
      <p>My name is {name.length>8? name.slice(0,6):name}. I am {age}</p>
      <h3>{age>=18? "please go vote!":"you must be 18"}</h3>
      <h3>Hobbies</h3>
      <ul>
        {hobbies? hobbies.map(hobby => <li>{hobby}</li>): <li>No hobbies!</li>}
      </ul>
    </div>
  )
}
