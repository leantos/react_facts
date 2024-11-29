function Page(){
  return(
    <>
      <header>
        <img src="react.webp" width="40px"/>
      </header>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on GitHub</li>
        <li>is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <footer>
        <small>Copyrighted 2024</small>
      </footer>
    </>
  )
}

function App() {
  return(
    <Page/>
  );
}

export default App;