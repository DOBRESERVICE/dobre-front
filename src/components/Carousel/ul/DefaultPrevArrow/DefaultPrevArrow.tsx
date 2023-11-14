export const DefaultPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green', height: '100%' }}
      onClick={onClick}
    ></div>
  );
};
