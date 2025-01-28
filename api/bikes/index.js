export default async function handler(req, res) {

    if (req.method == "POST") {
        return res.status(200).json({status: `Created new bike: ${req.body.brand}`});
    }

    if (req.method == "GET") { 

        return res.status(200).json([
            { brand: "Nishiki", model: "Road Master", price: 400 },
            { brand: "Scott", model: "Peak", price: 500 }
        ]);
    }

    res.status(405).json({ error: 'Method not allowed' });

}