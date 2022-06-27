import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = await client.db();
    const example = await db.collection("example").find({}).limit(20).toArray();
    res.json(example);
  } catch (error) {
    // comment to verify I can push changes
    console.error(error);
    res.json({ error: "Not connected!" });
  }
};
