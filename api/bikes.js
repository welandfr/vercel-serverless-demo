export default async function handler(req, res) {

    if (req.method == "POST") {
        res.status(200).json({status: "created new bike"});
    }

    if (req.method == "GET") { 

        res.status(200).json([
            { brand: "Nishiki", model: "Road Master", price: 400 },
            { brand: "Scott", model: "Peak", price: 500 }
        ]);
    }

    if (req.method == "DELETE") {
        res.status(200).json({status: "deleted bike"});
    }
}