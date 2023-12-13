const { spawn } = require('child_process');
const path = require('path');

// Start the app.js as a child process
const appProcess = spawn('node', ['app.js'], {
  stdio: 'inherit'
});

// Handle Ctrl+C to terminate both processes
process.on('SIGINT', () => {
  appProcess.kill('SIGINT');
});

// Handle other termination signals to terminate both processes
process.on('SIGTERM', () => {
  appProcess.kill('SIGTERM');
});
