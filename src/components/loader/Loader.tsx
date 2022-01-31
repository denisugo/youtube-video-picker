import ContentLoader from "react-content-loader";

function Loader() {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 400 400"
      backgroundColor="#a0a4ac"
      foregroundColor="#ecebeb"
    >
      <rect x="5" y="0" rx="3" ry="3" width="390" height="400" />
    </ContentLoader>
  );
}

export default Loader;
