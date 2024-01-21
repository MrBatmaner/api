export default function handler(req, res) {
  res.status(200).json({ name: "This is the user you requested" });
}
