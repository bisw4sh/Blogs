import { useEffect, useState } from "react";
import Blog from "./Blog";

type DataArr = {
  id : number;
  title: string;
  author: string;
  category: string;
  img: string;
  date: string;
};

export default function Blogs() {
  // Assuming getData returns an array of DataArr
  const [dataArr, setDataArr] = useState<DataArr[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('/api')
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
        {(dataArr !== null) ? (dataArr?.map(
          ({id, title, author, category, img, date }) => (
            <Blog
              key={id}
              id={id}
              title={title}
              author={author}
              category={category}
              img={img}
              date={date}
            />
          )
        )) : ( 'It is loading')}
      </ul>
    </div>
  );
}
