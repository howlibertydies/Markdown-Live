import './App.css'

function App() { 
  const edit = () => {
    console.log("edited");
  }

  return (
    <div className="editor" onInput={edit} contentEditable="true">
      
    </div>
  )
}

export default App
