type BoxProps = {
  date: string;
  numDate: string | number | any;
  className?: string;
};
export default function Box({ date, numDate, className }: BoxProps) {
  return (
    <div className={`${className}`}>
      <div>{date}</div>
      <div>{numDate}</div>
    </div>
  );
}
