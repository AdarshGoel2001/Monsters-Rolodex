import { CardList } from "./components/card-list/card-list.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { SearchBox } from "./components/card-list/search box/searchbox.jsx";
import "./App.css";
//https://robohash.org/7?set=set2
//https://jsonplaceholder.typicode.com/users
function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const loadNames = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setMonsters(myJson);
      });
  };

  useEffect(() => {
    loadNames();
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        handlechange={(e) => {
          setSearchField(e.target.value);
        }}
      ></SearchBox>
      {filteredMonsters.length > 0 && (
        <CardList monsters={filteredMonsters}></CardList>
      )}
    </div>
  );
}

export default App;
