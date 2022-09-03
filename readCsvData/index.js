const fs = require("fs");
const { parse } = require("csv-parse")

fs.createReadStream("./csv/test.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", row => {
    const data = row[row.length - 1]
    const [,,jsonStr] = data.split('test/')
    const msgData = JSON.parse(jsonStr)
    const body = JSON.parse(msgData.body)
    console.log(body)
  })