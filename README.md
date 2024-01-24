ZSSN API - Zombie Survival Social Network
Description
ZSSN (Zombie Survival Social Network) is a REST API designed to help survivors in a post-apocalyptic world share resources. The API allows survivors to register, update their locations, list all survivors, and mark infected individuals.

Technologies Used
Node.js
Nest.js
MongoDB
Swagger (for API documentation)
ESLint (for linting)

Getting Started
Prerequisites
Node.js installed
MongoDB server running

Installation
Clone the repository:
git clone https://github.com/yourusername/zssn-api.git

Navigate to the project folder:
cd zssn-api

Install dependencies:
npm install

Set up database:
mongodb://127.0.0.1/zssn in AppModule

Start the server:
npm start
Open your browser and go to http://localhost:3000/api for Swagger API documentation.

API Endpoints
POST /survivors: Register a new survivor.
GET /survivors: List all survivors.
PATCH /survivors/:id/location: Update the location of a survivor.
PATCH /survivors/:id/markInfected: Mark a survivor as infected.
DELETE /survivors/:id: Delete a survivor.
