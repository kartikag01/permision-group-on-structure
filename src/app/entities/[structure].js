export default function handler(req, res) {
    res.status(200).json({
        data: {
            "England": ["Topco", "Midco"],
            "Luxemborg": ["Holdco", "Google", "Meta"]
        }
    });
}