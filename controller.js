import axios from 'axios';

export const getDetails = async (res) => {
    try {
        const { catFact } = await axios.get('https://catfact.ninja/fact', { timeout: 5000 })
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching cat fact' });
    }

    const details = {
        status: "success",
        user: {
            email: process.env.EMAIL,
            name: process.env.NAME,
            stack: process.env.STACK,
        },
        timestamp: new Date().toISOString(),
        fact: catFact || "Could not fetch cat fact at this time."
    };

    res.status(200).json(details);
};