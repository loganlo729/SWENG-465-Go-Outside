// Import the express library
const express = require('express'); 

// Initialize the Express application
const app = express();


app.use(express.json()); 

// Create basic 
let events = [];
let communities = [];

// Define the port the server will listen on
const PORT = 10533; 

// GET request for events
app.get('/api/events', (req, res) => {
	res.send(events);
});

// POST request for events
app.post('/api/events', (req, res) => {
	const {eventName, category, host} = req.body;
	const newEvent = {
        	eventName: eventName,
        	category: category,
        	host: host
    	};
	// Push to array
	events.push(newEvent);

	// Return status
	res.status(201).json({
		message: 'Event created successfully',
		event: newEvent
	});
});

// GET request for communities
app.get('/api/communities', (req, res) => {
	res.send(communities);
});

// POST request for communities
app.post('/api/communities', (req, res) => {
	const {communityName, category, host} = req.body;
	const newCommunity = {
        	communityName: communityName,
        	category: category,
        	host: host
    	};
	// Push to array
	communities.push(newCommunity);

	// Return status
	res.status(201).json({
		message: 'Community created successfully',
		community: newCommunity
	});
});

// Tell the server to listen for incoming network requests
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});