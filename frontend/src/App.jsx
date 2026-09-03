
import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://18.61.160.249:5000";

function App() {
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/api/internships`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch internships");
                }
                return response.json();
            })
            .then(data => {
                setInternships(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError("Unable to load internships");
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

            {loading && (
                <p>Loading internships...</p>
            )}

            {!loading && error && (
                <p>{error}</p>
            )}

            {!loading && !error && internships.length === 0 && (
                <p>No internships available.</p>
            )}

            {!loading && !error && internships.map(internship => (
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
            ))}

        </div>
    );
}

export default App;