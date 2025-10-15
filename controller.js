import axios from 'axios';

// Function to get user details and a random cat fact
export const getDetails = async (res) => {
    try {
        // Fetch data from Cat Facts API with timeout protection
        const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });

        // The cat fact is stored in response.data.fact
        const catFact = response.data.fact;

        // Build the response object
        const details = {
            status: "success",
            user: {
                email: process.env.EMAIL, // From environment variables
                name: process.env.NAME,
                stack: process.env.STACK,
            },
            timestamp: new Date().toISOString(), // Current UTC time in ISO 8601 format
            fact: catFact || "No cat fact available at the moment." // Fallback if fact missing
        };

        // Send a 200 OK response with JSON content
        res.status(200).json(details);

    } catch (error) {
        // Handle errors (e.g., network issues or API down)
        console.error("Error fetching cat fact:", error.message);

        // Return a fallback response so the endpoint still works
        return res.status(200).json({
            status: "success",
            user: {
                email: process.env.EMAIL,
                name: process.env.NAME,
                stack: process.env.STACK,
            },
            timestamp: new Date().toISOString(),
            fact: "Could not fetch cat fact at this time."
        });
    }
};
