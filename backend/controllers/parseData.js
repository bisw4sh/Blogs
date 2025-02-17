import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import showdown from "showdown";
import url from "node:url";

const converter = new showdown.Converter();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function parseData() {
  const dataArr = [];
  try {
    const files = await fs.readdir(
      path.join(__dirname, "..", "assets/markdowns")
    );

    for (const file of files) {
      const src = path.join(process.cwd(), "assets/markdowns", file);
      const fileData = await fs.readFile(src, "utf8");
      const parsedData = matter(fileData);
      const content = parsedData.content;
      const htmlContent = converter.makeHtml(content);

      const index = Number.parseInt(file.slice(0, -3));

      // Read the image file as a buffer
      const imgBuffer = await fs.readFile(
        path.join(process.cwd(), "assets/img", parsedData.data.img)
      );

      dataArr.push({
        id: index,
        title: parsedData.data.title,
        author: parsedData.data.author,
        category: parsedData.data.category,
        img: imgBuffer.toString("base64"), // Convert buffer to base64 string
        date: parsedData.data.date,
        content: htmlContent,
      });
    }
  } catch (err) {
    console.log(err);
  }

  return dataArr;
}
