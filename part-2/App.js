const App = ()=>{
   return (
    <div>
      <Tweet username='ghostHunter' name='Edison' message='Any one know of a haunted house I could explore?' date='11/1/2022'/>

      <Tweet username='deerDasiy' name='Dasiy' message='I went exploring this weekend, I found an abandond house!' date='11/1/2022'>
        <Tweet username='ghostHunter' name='Edison' message='Cool, was it haunted?' date='11/2/2022'>
          <Tweet username='deerDasiy' name='Dasiy' message="I don't know I didn't go inside." date='11/2/2022'/>
        </Tweet>
      </Tweet>

    <Tweet username='codingKittens' name='Rose' message='Cats are the best' date='11/3/2022'>
      <Tweet username='dragonsAreCool' name='Nick' message='Yes, but what about Dragons!' date='11/3/2022'/>
      <Tweet username='timeTravaler' name='William' message='Dragon cats?' date='11/3/2022'/>
    </Tweet>
  </div>
)
}


ReactDOM.render(<App/>,document.getElementById('root'))
