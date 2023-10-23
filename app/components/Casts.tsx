import Image from "next/image";




  interface Cast {
    id: number;
    name: string;
    character: string;
    profile_path: string;
  }

  interface CastsProps {
    casts: Cast[];
  }

  const Casts = ({ casts }: CastsProps) => {
    const castsList = casts?.slice(0, 12);

    const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

    const getCastImageUrl = (imageUrl: string) => {
      return imageUrl
        ? `${IMAGE_BASE_URL}${imageUrl}`
        : "https://via.placeholder.com/300x500";
    };
      return (
        <div className="container">
          <div className="row">
            {castsList?.map((cast: Cast) => (
              <div
                key={cast.id}
                className="col-6 col-sm-4 col-md-3 col-lg-2 p-4"
              >
                <div className="text-center">
                  <Image
                    alt={cast.name}
                    src={getCastImageUrl(cast.profile_path)}
                    width={68}
                    height={76}
                    className="rounded-circle"
                  />
                  <p className="text-lg font-weight-bold mt-2">{cast.name}</p>
                  <p className="text-muted small">{cast.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  };

  export default Casts;
