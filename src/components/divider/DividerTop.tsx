interface Props {
  className?: string;
}
export const DividerTop = ({ className }: Props) => {
  return <div className={`dividerTop ${className ?? ""}`} />;
};
