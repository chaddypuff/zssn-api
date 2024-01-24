<!DOCTYPE html>
<html>

<body>

  <h1>ZSSN API - Zombie Survival Social Network</h1>

  <h2>Description</h2>

  <p>ZSSN (Zombie Survival Social Network) is a REST API designed to help survivors in a post-apocalyptic world share resources.
    The API allows survivors to register, update their locations, list all survivors, and mark infected individuals.</p>

  <h2>Technologies Used</h2>

  <ul>
    <li>Node.js</li>
    <li>Nest.js</li>
    <li>MongoDB</li>
    <li>Swagger (for API documentation)</li>
    <li>ESLint (for linting)</li>
  </ul>

  <h2>Getting Started</h2>

  <h3>Prerequisites</h3>

  <ul>
    <li>Node.js installed</li>
    <li>MongoDB server running</li>
  </ul>

  <h3>Installation</h3>

  <ol>
    <li>Clone the repository:</li>
    <code>git clone https://github.com/yourusername/zssn-api.git</code>

    <li>Navigate to the project folder:</li>
    <code>cd zssn-api</code>

    <li>Install dependencies:</li>
    <code>npm install</code>

    <li>Set up database:</li>
    <ul>
      <li>Add the following configuration:</li>
    </ul>
    <pre>your_mongodb_connection_string in AppModule</pre>
  </ol>

  <h3>Usage</h3>

  <ol>
    <li>Start the server:</li>
    <code>npm start</code>

    Open your browser and go to http://localhost:3000/api for Swagger API documentation.
  </ol>

  <h2>API Endpoints</h2>

  <ul>
    <li><strong>POST /survivors</strong>: Register a new survivor.</li>
    <li><strong>GET /survivors</strong>: List all survivors.</li>
    <li><strong>PATCH /survivors/:id/location</strong>: Update the location of a survivor.</li>
    <li><strong>PATCH /survivors/:id/markInfected</strong>: Mark a survivor as infected.</li>
    <li><strong>DELETE /survivors/:id</strong>: Delete a survivor.</li>
  </ul>
  </html>
