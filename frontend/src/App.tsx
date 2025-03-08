// Peter Hamilton 

//imports
import React, { useEffect, useState } from "react";
import "./App.css";


interface Team {
  school: string;
  name: string; 
  city: string;
  state: string;
}

const App: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    import("./CollegeBasketballTeams.json")
      .then((data) => setTeams(data.teams)) // Access teams array
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="container">
      <h1>🏀 NCAA Basketball Teams 🏀</h1>
      {teams.map((team, index) => (
        <div key={index} className="team-card">
          <h2>{team.school}</h2>
          <p><strong>Mascot:</strong> {team.name}</p> 
          <p><strong>Location:</strong> {team.city}, {team.state}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
