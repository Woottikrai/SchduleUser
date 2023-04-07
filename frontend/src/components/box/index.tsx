type BoxProps = {
  date: string;
  numDate: string | number | any;
  className?: string;
  onClick: any;
};
export default function Box({ date, numDate, className, onClick }: BoxProps) {
  return (
    <div className={`${className}`} onClick={onClick}>
      <div>{date}</div>
      <div>{numDate}</div>
    </div>
  );
}
