import placholderImg from "/placeholder.webp";
type Props = {
  id: number;
  title: string;
  author: string;
  category: string;
  img: string;
  date: string;
};

export default function Blog({
  id,
  title,
  author,
  category,
  img,
  date,
}: Props) {
  function handleImageReq(): string{
    return '';
  }

  return (
    <div className="w-full flex justify-center items-center">
      <li
        key={id}
        className="bg-slate-700 m-4 p-4 rounded-lg text-white flex justify-start items-center gap-3 w-1/2"
      >
        <img
          src={handleImageReq() !== "" ? handleImageReq() : placholderImg}
          alt={img}
          className="w-1/6"
        />
        <div>
          <p>Title: {title}</p>
          <p>Author: {author}</p>
          <p>Category: {category}</p>
          <p>Date: {date.slice(0, 10)}</p>
        </div>
      </li>
    </div>
  );
}
