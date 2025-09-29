import Button from "./Button";

function ProfileCard({ image, title, description }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <Button label={"Go to"} variant={"primary"}></Button>
    </div>
  );
}

export default ProfileCard;
