import * as fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export default async function parseData() {
  let dataArr = [];
  try {
    const files = await fs.readdir(
      path.join(process.cwd(), "assets/markdowns")
    );

    for (const file of files) {
      const src = path.join(process.cwd(), "assets/markdowns", file);
      const fileData = await fs.readFile(src, "utf8");
      const parsedData = matter(fileData);
      // const content = parsedData.content.replace(/[\r\n]/g, "");

      console.log(file.slice(0, -3));
      const index = parseInt(file.slice(0, -3));

      dataArr.push({
        id: index,
        title: parsedData.data.title,
        author: parsedData.data.author,
        category: parsedData.data.category,
        img: parsedData.data.img,
        date: parsedData.data.date,
      });
      console.log(dataArr);
    }
  } catch (err) {
    console.log(err);
  }

  return dataArr;
}
