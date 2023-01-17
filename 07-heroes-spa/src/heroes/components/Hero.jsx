import { Link, useNavigate } from "react-router-dom";

export const Hero = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImage = `/assets/heroes/${id}.jpg`;

  const navigate = useNavigate();
  const navigateToHero = () => {
    navigate(`/hero/${id}`);
  };

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card" role="button" onClick={navigateToHero}>
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImage} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && <p>{characters}</p>}

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link className="link-info" to={`/hero/${id}`}>
                more info..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
