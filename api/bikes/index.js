export default async function handler(req, res) {

    if (req.method == "POST") {
        res.status(200).json({status: `Created new bike: ${req.body.brand}`});
    }

    if (req.method == "GET") { 

        res.status(200).json([
            { brand: "Nishiki", model: "Road Master", price: 400 },
            { brand: "Scott", model: "Peak", price: 500 }
        ]);
    }

    

}