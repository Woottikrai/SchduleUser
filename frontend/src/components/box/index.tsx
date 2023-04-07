type BoxProps = {
  date: string;
  numDate: string | number | any;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | any;
};
export default function Box({ date, numDate, className, onClick }: BoxProps) {
  return (
    <div className={`${className}`} onClick={onClick}>
      <div className="text-5xl font-bold text-black">{numDate}</div>
      <div className="text-lg font-normal text-gray-500 my-2">{date}</div>
    </div>
  );
}
