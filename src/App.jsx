import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import supabase from "./utils/supabase.js";

function App() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function checkUser() {
            const { data, error } = await supabase.auth.getUser();
            if (error || !data.user) {
                navigate('/login'); // Redirect to login page
            } else {
                setUser(data.user);
            }
        }
        checkUser();
    }, [navigate]);

    if (!user) return null; // Prevent UI flicker before redirect

    async function handleLogout() {
        await supabase.auth.signOut();
        navigate('/login');
    }

    return (
        <>
            <main>
                <h1>Clelia</h1>
                <h3>Hello {user.email}</h3>
                <button> Lock </button>
                <button> Unlock </button>
                <aside>
                    <button> Map </button>
                    <button> Controls </button>
                </aside>
                <button onClick={handleLogout}>Logout</button>
                <footer>Lea Renergy s.r.l.</footer>
            </main>
        </>
    );
}

export default App;
