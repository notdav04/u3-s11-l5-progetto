import { useState, useEffect } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeSong } from "../redux/actions";

const Main = () => {
  const [rock, setRock] = useState([]);
  const [pop, setPop] = useState([]);
  const [hiphop, setHiphop] = useState([]);
  const dispatch = useDispatch();

  const fetchSongs = async (artistName, SectionName) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        const responseObj = await response.json();
        if (SectionName === "rock") {
          setRock(responseObj.data.slice(0, 4));
        } else if (SectionName === "pop") {
          setPop(responseObj.data.slice(0, 4));
        } else if (SectionName === "hiphop") {
          setHiphop(responseObj.data.slice(0, 4));
        }
      } else {
        throw new Error(
          `Errore nella fetch sezione ${SectionName}: ${response.statusText}`
        );
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchSongs("queen", "rock");
    fetchSongs("katyperry", "pop");
    fetchSongs("eminem", "hiphop");
  }, []);
  return (
    <Col xs={12} md={9} className="offset-md-3 mainpage">
      <Container fluid>
        <Row>
          <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <h2 className="text-light mt-5">Rock Classics</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
              {rock.length > 0 &&
                rock.map((element, index) => {
                  return (
                    <Col key={index}>
                      <Card
                        text="light
                    "
                        onClick={() => {
                          dispatch(changeSong(element));
                        }}
                        style={{
                          width: "18rem",
                          height: "400px",
                          backgroundColor: "transparent",
                          border: "none"
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={element.album.cover_medium}
                        />
                        <Card.Body>
                          <Card.Title>{element.title}</Card.Title>
                          <Card.Text>{element.artist.name}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <h2 className="text-light">Pop Classics</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
              {pop.length > 0 &&
                pop.map((element, index) => {
                  return (
                    <Col key={index}>
                      <Card
                        text="light
                    "
                        onClick={() => {
                          dispatch(changeSong(element));
                        }}
                        style={{
                          width: "18rem",
                          height: "400px",
                          backgroundColor: "transparent",
                          border: "none"
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={element.album.cover_medium}
                        />
                        <Card.Body>
                          <Card.Title>{element.title}</Card.Title>
                          <Card.Text>{element.artist.name}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <h2 className="text-light">HipHop Classics</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
              {hiphop.length > 0 &&
                hiphop.map((element, index) => {
                  return (
                    <Col key={index}>
                      <Card
                        text="light
                    "
                        onClick={() => {
                          dispatch(changeSong(element));
                        }}
                        style={{
                          width: "18rem",
                          height: "400px",
                          backgroundColor: "transparent",
                          border: "none"
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={element.album.cover_medium}
                        />
                        <Card.Body>
                          <Card.Title>{element.title}</Card.Title>
                          <Card.Text>{element.artist.name}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default Main;
