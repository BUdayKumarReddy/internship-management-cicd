import { useEffect, useState } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {

    const [internships, setInternships] = useState([]);

    useEffect(() => {

    fetch(`${API_URL}/api/internships`)
        .then(response => response.json())
        .then(data => {
            setInternships(data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
}, []);

    return (

        <div className="container">

            <h1>Internship Management System</h1>

            <p>
                Project-based CI/CD demonstration
            </p>

            <h2>Available Internships</h2>

            {internships.length === 0 ? (

                <p>No internships available.</p>

            ) : (

                internships.map(internship => (

                    <div className="card" key={internship.id}>

                        <h3>{internship.title}</h3>

                        <p>
                            Company: {internship.company}
                        </p>

                        <p>
                            Location: {internship.location}
                        </p>

                        <p>
                            Duration: {internship.duration}
                        </p>

                    </div>

                ))

            )}

        </div>

    );
}

export default App;