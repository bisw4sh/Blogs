import { useEffect, useState } from "react";
import Blog from "./Blog";
import loadingSvg from '/loading.svg'

type DataArr = {
  id : number;
  title: string;
  author: string;
  category: string;
  img: string;
  date: string;
  content: string;
};

export default function Blogs() {
  // Assuming getData returns an array of DataArr
  const [dataArr, setDataArr] = useState<DataArr[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://blogs-frontedn.onrender.com//api");
        const parsedData: DataArr[] = await data.json()
        setDataArr(parsedData)
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {dataArr !== null ? (
          dataArr?.map(
            ({ id, title, author, category, img, date, content }) => (
              <Blog
                key={id}
                id={id}
                title={title}
                author={author}
                category={category}
                img={img}
                date={date}
                content={content}
              />
            )
          )
        ) : (
          <img
            className="self-center h-16 animate-spin"
            src={loadingSvg}
          />
        )}
      </ul>
    </div>
  );
}
