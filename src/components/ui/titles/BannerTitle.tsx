import "./BannerTitle.scss";

interface Props {
  title: string;
  className?: string;
}

export const BannerTitle = ({ title, className }: Props) => {
  return (
    <div className={`banner-title ${className ?? ""}`}>
      <span />
      <h1>{title}</h1>
      <span />
    </div>
  );
};
