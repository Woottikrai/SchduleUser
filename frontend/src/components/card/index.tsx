import "./card.css";
type CardProps = {
  className?: string;
  id: string | number;
  title: string;
  description: string;
  position: string;
};
export default function Card({
  className,
  title,
  description,
  position,
  id,
}: CardProps) {
  return (
    <div className={`${className}`}>
      <h1 className="text-md font-semibold">{title}</h1>
      <p className="text-md font-normal text-gray-500 mb-5">{description}</p>
      <span>{position}</span>
    </div>
  );
}
