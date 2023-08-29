const productRouter = require("express").Router();
const Mock = require("mockjs");

productRouter.get("/list", (req, res) => {
  const data = Mock.mock({
    "list|10-60": [
      {
        id: "@increment",
        name: "@string('lower', 3, 20)",
        "brand|1": [
          "苹果",
          "华为",
          "小米",
          "三星",
          "索尼",
          "oppo",
          "红米",
          "一加",
          "vivo",
        ],
        "size|1": ["128G", "256G", "1TB"],
        desc: "@paragraph",
        image: Mock.Random.image(
          "512x512",
          "#FF6600",
          "@string('lower', 3, 20)"
        ),
        img:`https://picsum.photos/512/512`
      },
    ],
  });
  res.send(data);
});
module.exports = productRouter;
