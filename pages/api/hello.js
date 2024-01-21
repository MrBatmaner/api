// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from "moment";
import Cors from "cors";
import runMiddleware from "../../middleware/runMiddleware";

const cors = Cors({
  method: ["GET", "HEAD", "POST"],
});

export default async (req, res) => {
  await runMiddleware(req, res, cors);
  console.log(req.method);

  const time = moment().format("LLL");

  res.status(200).json({ name: "Joker", time });
};
