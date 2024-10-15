const svgLoader = () => {
  const SvgComponent = (svgPath) => (
    <svg>
      <use xlinkHref={`#${svgPath}`} />
    </svg>
  );

  return SvgComponent;
};

export default svgLoader;