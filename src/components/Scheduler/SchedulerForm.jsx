// SchedulerForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SchedulerForm = ({ onGenerate }) => {
    const [primarySubjects, setPrimarySubjects] = useState('');
    const [secondarySubjects, setSecondarySubjects] = useState('');
    const [tertiarySubjects, setTertiarySubjects] = useState('');
    const [hoursPerDay, setHoursPerDay] = useState('');
    const [daysPerWeek, setDaysPerWeek] = useState('');
    const [totalWeeks, setTotalWeeks] = useState('');

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            primarySubjects: primarySubjects.split(',').map(subject => subject.trim()),
            secondarySubjects: secondarySubjects.split(',').map(subject => subject.trim()),
            tertiarySubjects: tertiarySubjects.split(',').map(subject => subject.trim()),
            hoursPerDay: parseInt(hoursPerDay),
            daysPerWeek: parseInt(daysPerWeek),
            totalWeeks: parseInt(totalWeeks),
        };
        onGenerate(data); 
        navigate('/schedule-generate'); 
    };

    return (
      <div
      className="relative flex flex-col items-center min-h-screen text-white p-8 "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqjpptmkh/image/upload/v1731157218/lehas15ezgnujte222xn.avif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <form onSubmit={handleSubmit} className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-white text-center mb-4">Generate Study Plan</h2>
            <input
                type="text"
                placeholder="Primary subjects (comma-separated)"
                value={primarySubjects}
                onChange={(e) => setPrimarySubjects(e.target.value)}
                className="w-full p-3 mb-4 text-gray-900 rounded"
                required
            />
            <input
                type="text"
                placeholder="Secondary subjects (comma-separated)"
                value={secondarySubjects}
                onChange={(e) => setSecondarySubjects(e.target.value)}
                className="w-full p-3 mb-4 text-gray-900 rounded"
            />
            <input
                type="text"
                placeholder="Tertiary subjects (comma-separated)"
                value={tertiarySubjects}
                onChange={(e) => setTertiarySubjects(e.target.value)}
                className="w-full p-3 mb-4 text-gray-900 rounded"
            />
            <input
                type="number"
                placeholder="Enter hours per day"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(e.target.value)}
                className="w-full p-3 mb-4 text-gray-900 rounded"
                required
            />
            <input
                type="number"
                placeholder="Enter days per week"
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(e.target.value)}
                className="w-full p-3 mb-4 text-gray-900 rounded"
                required
            />
            <button
                type="submit"
                className="w-full py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
            >
                Generate Plan
            </button>
        </form>
        </div>
    );
};

export default SchedulerForm;
