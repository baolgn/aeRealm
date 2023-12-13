# aeRealm - User's Manual
## Table of Contents
1. Introduction
2. Project Overview
    - Project Structure
    - Dependencies
3. Installation
    - Prerequisites
    - Setting Up the Project
4. Configuration
    - Database Configuration
    - Environment Variables
5. Running the Project
    - Starting the Server
    - Accessing the Website
6. Functionality Overview
    - Navigation
    - Members Section
    - Interactive Features
7. Troubleshooting
    - Common Issues
    - Contact Information
8. Conclusion

<br>
<br>

# 1. Introduction<a name="introduction"></a>
Welcome to aeRealm, your ultimate destination for all things aespa! This user's manual will guide you through the setup, configuration, and usage of the aespa fansite project.

<br>

# 2. Project Overview<a name="project-overview"></a>
Project Structure<a name="project-structure"></a>
The project follows a modular structure, consisting of the following main files:

- __app.js__: Express.js server setup and routes.
- __server.js__: Launches the app.js as a child process.
- __post.js__: Handles post-related functionalities.
- __socket.js__: Manages socket connections and real-time updates.

## Dependencies<a name="dependencies"></a>
The project relies on several dependencies, including Express.js, Socket.io, and others. Refer to the package.json file for a complete list.

<br>

# 3. Installation<a name="installation"></a>
## Prerequisites<a name="prerequisites"></a>
Before installing, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Setting Up the Project<a name="setting-up-the-project"></a>
- Clone the repository: `git clone https://github.com/your-username/aerealm.git`
- Navigate to the project directory: `cd aerealm`
- Install dependencies: `npm install`

<br>

# 4. Configuration<a name="configuration"></a>
## Database Configuration<a name="database-configuration"></a>
The project uses a database for storing post-related data. Configure your database connection in the `app.js` file.
```
// Add your database configuration here
const db = require('your-database-library');
```
## Environment Variables<a name="environment-variables"></a>
Some configurations are set using environment variables. Create a .env file in the project root and add the following:
```
PORT=3000
```

<br>

# 5. Running the Project<a name="running-the-project"></a>
## Starting the Server<a name="starting-the-server"></a>
Run the following command to start the server:
```
npm start
```
## Accessing the Website<a name="accessing-the-website"></a>
Visit http://localhost:3000 in your web browser to access aeRealm.

<br>

# 6. Functionality Overview<a name="functionality-overview"></a>
## Navigation<a name="navigation"></a>
- __Home__: Navigate to the home page.
- __About__: Learn more about aespa.
- __Members__: Explore individual member profiles.
- __Discography__: View aespa's discography.
- __Schedule__: Stay updated on upcoming and past events.
- __Fan Merchandise__: Discover and purchase fan merchandise.
- __Guides__: Access voting and streaming guides.
- __Gallery__: Enjoy a collection of aespa images.
## Members Section<a name="members-section"></a>
- Click on a member's name to view detailed information and images.
## Interactive Features<a name="interactive-features"></a>
- __Likes and Shares__: Interact with posts by liking and sharing.
- __Real-time Updates__: Experience real-time updates on post interactions.
- __Comments__: View and add comments to posts.

<br>

# 7. Troubleshooting<a name="troubleshooting"></a>
## Common Issues<a name="common-issues"></a>
1. __Port Already in Use__: Change the port in the .env file.
2. __Database Connection__: Ensure the database connection details are correct.
## Contact Information<a name="contact-information"></a>
For further assistance or inquiries, please contact:
- bluto
- bao.lgn2005@gmail.com

<br>

# 8. Conclusion<a name="conclusion"></a>
Congratulations! You've successfully set up and explored aeRealm. Thank you for being a part of the aespa fandom. Enjoy your journey in the realm of aespa!
