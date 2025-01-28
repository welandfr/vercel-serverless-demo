export default async function handler(req, res) {
    const { id } = req.query;
  
    if (req.method === 'GET') {
      return res.status(200).json({ message: `Bike with id ${id}` });
    }
  
    if (req.method === 'DELETE') {
      return res.status(200).json({ message: `Bike with id ${id} deleted` });
    }
  
    res.status(405).json({ error: 'Method not allowed' });
  }