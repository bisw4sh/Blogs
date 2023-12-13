import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import showdown from "showdown";

const converter = new showdown.Converter();

export default async function singleMarkdown(id) {
  let responseObj = {};
  try {
    const fileData = await fs.readFile(
      path.join(process.cwd(), "assets/markdowns", `${id}.md`),
      "utf8"
    );

    const parsedData = matter(fileData);
    const content = parsedData.content;
    const htmlContent = converter.makeHtml(content);

    // Read the image file as a buffer
    const imgBuffer = await fs.readFile(
      path.join(process.cwd(), "assets/img", parsedData.data.img)
    );

    responseObj = {
      ...responseObj,
      id: id,
      title: parsedData.data.title,
      author: parsedData.data.author,
      category: parsedData.data.category,
      img: imgBuffer.toString("base64"), // Convert buffer to base64 string
      date: parsedData.data.date,
      content: htmlContent,
    };
  } catch (error) {
    console.log(error);
  }

  return responseObj;
}
