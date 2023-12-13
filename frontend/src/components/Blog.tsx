import { Link } from 'react-router-dom'
import placeholderImg from "/placeholder.webp";
import DOMPurify from "dompurify";
import { useState } from "react";
type Props = {
  id: number;
  title: string;
  author: string;
  category: string;
  img: string;
  date: string;
  content: string;
};

export default function Blog({
  id,
  title,
  author,
  category,
  img,
  date,
  content,
}: Props) {
  const [show, setShow] = useState(false);
  const handleImageReq = (img: string): string =>
    `data:image/png;base64,${img}`;
  const sanitizedContent = DOMPurify.sanitize(content);

  // console.log(content)

  return (
    <div
      className="w-full flex justify-center items-center"
      onClick={() => setShow(!show)}
    >
      <li
        key={id}
        className="bg-slate-700 m-4 p-4 rounded-lg text-white flex justify-start items-center gap-3 w-1/2 max-md:w-full"
      >
        <img
          src={handleImageReq(img) || placeholderImg}
          alt={img}
          className="md:w-1/6 max-md:w-1/2 rounded-lg self-start cursor-pointer"
        />

        <div>
          <p>Title: {title}</p>
          <p>Author: {author}</p>
          <p>Category: {category}</p>
          <p>Date: {date.slice(0, 10)}</p>
          <Link to={`/singleblog/${id}`} className='text-teal-500 text-lg font-md'>See More</Link>
          <p
            className={`sanitizedContent bg-slate-800 p-2 rounded-xl ${
              !show ? "hidden" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          >
            {/* Content: <br /> {sanitizedContent} */}
          </p>
        </div>
      </li>
    </div>
  );
}
