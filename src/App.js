import Todo from "./components/Todo"; //Vi importerar Todo komponenten så att vi kan använda den i vår html kod.

//En komponent måste returnera något som är läsbart i browsern, exempelvis enkel Html kod.
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Learn React'/>

    </div>
  )
}

export default App; //export för att göra den tillgänglig utanför denna specifika appen
