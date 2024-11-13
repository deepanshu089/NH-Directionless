import React, { useEffect, useState } from 'react';

const MoreScreenTime = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  const alertTime = 6000000; // Time in milliseconds (e.g., 60000 ms = 1 minute)

  useEffect(() => {
    // Start a timer that increments every second
    const timer = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1000);
    }, 1000);

    // Clear timer on component unmount
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Trigger an alert if the time spent exceeds alertTime
    if (timeSpent >= alertTime) {
      alert('You have spent a lot of time on this component!');
      setTimeSpent(0); // Reset the time if you want to re-trigger the alert later
    }
  }, [timeSpent]);

  return (
    <div>
      <h1>More Screen Time Component</h1>
      <p>Keep track of your screen time here.</p>
    </div>
  );
};

export default MoreScreenTime;
