import React from 'react';

const Settings = () => {
  return (
    <section id="settings">
      <h2>Settings</h2>
      <div>
        <label>Theme:</label>
        <select>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <button>Logout</button>
    </section>
  );
};

export default Settings;