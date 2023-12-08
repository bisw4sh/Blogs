import * as fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

type DataArr = {
  title: string;
  author: string;
  category: string;
  img: string;
  date: string;
  content: string;
};

export default async function getData(): Promise<DataArr[]> {
  let dataArr: DataArr[] = [];

  try {
    const files = await fs.readdir(
      path.join(process.cwd(), "public/markdowns")
    );
    for await (const file of files) {
      const src = path.join(process.cwd(), "public/markdowns", file);
      const fileData = await fs.readFile(src, "utf8");
      const parsedData = matter(fileData);
      const content = parsedData.content.replace(/[\r\n]/g, "");
      console.log(content)

      dataArr.push({
        title: parsedData.data.title,
        author: parsedData.data.author,
        category: parsedData.data.category,
        img: parsedData.data.img,
        date: parsedData.data.date,
        content: content,
      });
    }
  } catch (err) {
    console.log(err);
  }
  return dataArr;
}
