import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Register.css';

const Register = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize navigation hook

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
        } else {
            setError('');
            alert('Registration Successful');
            navigate('/login'); // Redirect to login page
        }
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <h1>User Registration</h1>

                <label>First Name:</label>
                <input type="text" name="firstname" id="firstname" required />
                <br />

                <label>Last Name:</label>
                <input type="text" name="lastname" id="lastname" required />
                   <br />
                   
                <label>Contact Number:</label>
                <input type="text" name="contactnumber" id="contactnumber" required />
                <br />

                <label>Email:</label>
                <input type="email" name="email" id="email" required />
                <br />

                <label>Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
                <br />

                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    name="password2" 
                    id="password2" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                />
                <br />

                {error && <p style={{ color: 'red' }}>{error}</p>}
                
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
