const generateContent = require("../services/api.services");
module.exports.genCont = async (req, res) => {
  try {
    let { code } = req.body;
    const data = await generateContent(code);
    res.json({ data });
  } catch (err) {
    res.json({ error: err });
  }
};
