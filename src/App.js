
import MultiSelect from './component/Task';



function App() {
  return (
    <div className="App">
      <MultiSelect  readonly={true} values={["Australia","Nepal"]}/>
    </div>
  );
}

export default App;

