import Image from "next/image";
import Link from "next/link";

interface CityCardProps {
  id: number;
  imageURL?: string;
  city?: string;
  description?: string;
  isLoading?: boolean; // Add a prop to indicate loading state
  isSide?: boolean; //Side or Base
  haveBtn?: boolean;
}

const truncateDescription = (text: string, maxLen: number) =>
  text.length > maxLen ? text.slice(0, maxLen) + "..." : text;

function CityCard({
  id = 1,
  imageURL = "",
  city = "",
  description = "",
  isLoading = false, // Default to false
  isSide = false,
  haveBtn = false,
}: CityCardProps) {
  if (isLoading) {
    return (
      <div
        className={`card ${
          isSide ? "card-side" : "bg-base-100"
        }   w-94 shadow-sm`}
      >
        <figure>
          <div className="skeleton h-32 w-full"></div>
        </figure>
        <div className="card-body">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`card ${
        isSide ? "card-side h-36" : "bg-base-100"
      }   w-94 shadow-sm hover:shadow-lg`}
    >
      <figure className={`card ${
        isSide ? "relative w-full card-side h-36" : "relative h-[250px] w-full bg-base-100"
      }   w-94 shadow-sm hover:shadow-lg`} >
        <Image src={imageURL} alt={city} layout="fill" objectFit="cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{city}</h2>
        <p>{truncateDescription(description, 100)}</p>
        <div className="card-actions justify-end">
          {haveBtn && (
            <Link href={`/hotel/${id}`}>
              <button className="btn btn-primary">See More ...</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CityCard;
