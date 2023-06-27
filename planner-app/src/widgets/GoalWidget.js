import React, { useState } from 'react';

const GoalWidget = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals([...goals, newGoal]);
      setNewGoal('');
    }
  };

  const removeGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  return (
    <div className='goals-container' style={{ 
      width: "400px",
    }}>
      <h2>Goals</h2>
      <ul style={{marginLeft: "20px"}}>
        {goals.map((goal, index) => (
          <li key={index}>
            {goal}
            <button 
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "15px",
                cursor: "pointer",
                marginLeft: "20px"
              }}
            onClick={() => removeGoal(index)}> Remove Goal</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          className='text-input'
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <button
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "15px",
            cursor: "pointer",
          }}
        onClick={addGoal}>Add Goal</button>
      </div>
    </div>
  );
};

export default GoalWidget;
