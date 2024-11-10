const fetch = require('node-fetch');

exports.handler = async function(event) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" }),
        };
    }

    const { address } = JSON.parse(event.body);
    
    if (!address) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Address is required" }),
        };
    }

    const input = {
        addresses: [address],
        extractBuildingUnits: "all",
    };

    try {
        const response = await fetch("https://api.apify.com/v2/acts/maxcopell~zillow-detail-scraper/run-sync-get-dataset-items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.APIFY_TOKEN}`
            },
            body: JSON.stringify(input),
        });

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error('Property details fetch error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: "Failed to fetch property details",
                details: error.message 
            }),
        };
    }
};