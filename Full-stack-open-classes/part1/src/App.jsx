 

  const App=()=>{
    const now=new Date()
    const a= 10
    const b= 20

    return(
    <div>
      <p>Hello Villagers its {now.toSring()}</p>
      <P>
        {a} plus {b} is {a + b}
      </P>
    </div>
    )
  }
export default App;
