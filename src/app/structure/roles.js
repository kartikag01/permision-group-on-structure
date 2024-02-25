export default function handler(req, res) {
    res.status(200).json({ data: ["Full access", "No access", "Basic access"] });
}