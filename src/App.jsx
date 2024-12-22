import { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import { fetchData } from "./services/fetchData";
import "./App.css";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchData();
      setProjects(data);
      setLoading(false);
    };
    loadProjects();
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Kickstarter Projects</h1>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <Table data={projects} rowsPerPage={5} />
      )}
    </div>
  );
};

export default App;
