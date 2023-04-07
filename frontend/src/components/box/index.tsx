type BoxProps = {
  date: string;
  numDate: string | number | any;
  className?: string;
  onClick: any;
};
export default function Box({ date, numDate, className, onClick }: BoxProps) {
  return (
    <div className={`${className}`} onClick={onClick}>
      <div className="text-3xl font-bold ">{numDate}</div>
      <span className="my-2"></span>
      <div className="text-sm font-normal text-gray-500 lowercase">{date}</div>
    </div>
  );
}
