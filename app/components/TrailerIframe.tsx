interface TrailerIframeProps {
  trailerKey: string;
}

const iframeStyle = {
  height: "50vh",
  width: "100%",
};

const TrailerIframe = ({ trailerKey }: TrailerIframeProps) => {
  if (!trailerKey) {
    return null;
  }

  const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={trailerUrl}
        frameBorder="0"
        allowFullScreen
        title="Movie Trailer"
        style={iframeStyle}
      ></iframe>
    </div>
  );
};

export default TrailerIframe;
