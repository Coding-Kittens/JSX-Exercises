const App = ()=>{
   return (
    <div>
      <Person name='AVeryLongNameToTestTheSixCharacterLimit' age={18} hobbies={['SCUBA diving', 'rock climbing']}/>
      <br/>
      <Person name='Nick' age={17} hobbies={['gaming', 'making chainmail']}/>
      <br/>
      <Person name='Rose' age={21} hobbies={['making games', 'art']}/>
      <br/>
      <Person name='Jhon' age={10}/>
  </div>
)
}


ReactDOM.render(<App/>,document.getElementById('root'))
