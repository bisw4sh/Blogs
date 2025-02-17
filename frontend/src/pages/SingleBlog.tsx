import { useState, useEffect } from "react";
import placeholderImg from "/placeholder.webp";
import DOMPurify from "dompurify";

type DataObj = {
  id: number;
  title: string;
  author: string;
  category: string;
  img: string;
  date: string;
  content: string;
};

export default function SingleBlog() {
  const url = window.location.href;
  const matchResult = url.match(/\/([^/]+)$/);
  const extractedText = matchResult ? matchResult[1] : "1";
  const [dataObj, setDataObj] = useState<DataObj | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`/api/${extractedText}`);
        const parsedData = await data.json();
        setDataObj(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [extractedText]); // Include extractedText in the dependency array

  if (!dataObj) {
    // Render loading or error state here
    return <div>Loading...</div>;
  }

  const handleImageReq = (img: string): string =>
    `data:image/png;base64,${img}`;
  const sanitizedContent = DOMPurify.sanitize(dataObj.content);

  return (
    <div className="min-h-[96vh] py-4 flex justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <li
          key={dataObj.id}
          className="bg-slate-700 m-4 p-4 rounded-lg text-white flex max-md:flex-col justify-center items-center gap-3 w-5/6 max-md:w-full"
        >
          <img
            src={handleImageReq(dataObj.img) || placeholderImg}
            alt={dataObj.img}
            className="md:w-1/6 max-md:w-1/2 rounded-lg self-start cursor-pointer"
          />

          <div>
            <p>Title: {dataObj.title}</p>
            <p>Author: {dataObj.author}</p>
            <p>Category: {dataObj.category}</p>
            <p>Date: {dataObj.date.slice(0, 10)}</p>
            <p
              className={"sanitizedContent p-2 rounded-xl"}
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>
        </li>
      </div>
    </div>
  );
}
