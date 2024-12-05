import { useLoaderData } from "react-router";

const ReviewDetails = () => {
  const review = useLoaderData();
  const {
    gameTitle,
    thumbnail,
    description,
    genres,
    rating,
    userEmail,
    userName,
    publishingYear,
  } = review;

  return (
    <div>
      <div>
        <img className="w-full" src={thumbnail} alt="" />
      </div>
      <div>
        <h3>{gameTitle}</h3>
        <h5>{userName}</h5>
        <p>{userEmail}</p>
        <p>{genres}</p>
        <p>{rating}</p>
        <p>{publishingYear}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReviewDetails;
