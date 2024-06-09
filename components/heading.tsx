interface HeadingProps {
  title: string;
  subTitle: string;
  center?: string;
}

export const Heading = ({ title, subTitle, center }: HeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-lg font-normal">{title}</div>
      <div className="font-light text-neutral-500 ">{subTitle}</div>
    </div>
  );
};
