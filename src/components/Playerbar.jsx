import { Col, Container, Row } from "react-bootstrap";
import play from "../assets/playerbuttons/play.png";
import prev from "../assets/playerbuttons/prev.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { addfavAction, removefavAction } from "../redux/actions";

const Playerbar = () => {
  const playerbarSong = useSelector((state) => state.playerbar.playerSong);
  console.log(playerbarSong);
  const favourites = useSelector((state) => state.fav.favourites);
  const dispatch = useDispatch();
  useEffect(() => {}, [playerbarSong]);
  return (
    <Container
      fluid
      className="fixed-bottom bg-container m-0 p-0 "
      style={{ maxWidth: "100vw" }}
    >
      <div>
        <Row className="h-100 m-0">
          {playerbarSong && (
            <Col lg={2} className="offset-lg-2 d-flex align-items-center">
              <img src={playerbarSong.album.cover_small} alt="" />
              <div style={{ width: "200px" }} className="text-light ms-2">
                <p className="mb-0">{playerbarSong.title}</p>
                <p className=" mb-0">{playerbarSong.artist.name}</p>
              </div>
              {favourites.includes(playerbarSong.title) ? (
                <HeartFill
                  onClick={() => {
                    dispatch(removefavAction(playerbarSong.title));
                  }}
                  className="text-success fs-3 pe-1"
                />
              ) : (
                <Heart
                  onClick={() => {
                    dispatch(addfavAction(playerbarSong.title));
                  }}
                  className="text-light fs-3 pe-1"
                />
              )}
            </Col>
          )}
          <Col
            lg={playerbarSong ? 8 : 10}
            className={playerbarSong ? "" : "offset-lg-2"}
          >
            <Row
              className={`h-100 flex-column  justify-content-center ${
                !playerbarSong ? " align-items-center " : "offset-1"
              }`}
              style={{ height: "100%" }}
            >
              <Col xs={6} md={playerbarSong ? 6 : 4} className="playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src={shuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={prev} alt="prev" />
                  </a>
                  <a href="#">
                    <img src={play} alt="play" />
                  </a>
                  <a href="#">
                    <img src={next} alt="next" />
                  </a>
                  <a href="#">
                    <img src={repeat} alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Playerbar;
