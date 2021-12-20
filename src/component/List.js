import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  Image,
  InputGroup,
  ListGroup,
  Modal,
} from "react-bootstrap";
import "./List.css";

function List() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  useEffect(() => {
    setList(
        [
            {
                id: "1",
                image:
                  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                name: "Name 1",
              },
              {
                id: "2",
                image:
                  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                name: "Name 1",
              },
              {
                id: "3",
                image:
                  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                name: "Name 1",
              },
              {
                id: "4",
                image:
                  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                name: "Name 1",
              },
        ]
    );
  }, []);

  const handleChange1 = (e) => {
    e.preventDefault(); 
    setName(e.target.value); 
  };

  const handleChange2 = (e) => {
    e.preventDefault();
    setName1(e.target.value);
  };

  const handleChange3 = (e) => {
    e.preventDefault();
    setName2(e.target.value);
  };

  const Add = () => {
      const data = name + name1 + name2;
      const newItem = [{
        id: "5",
        image:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        name: data,
      }, ...list]
      setList(newItem);
      console.log(list.length)
  }

  const Delete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList)
  }

  return (
    <Container>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <InputGroup>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            onChange={handleChange1}
          />
        </InputGroup>
        <InputGroup>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            onChange={handleChange2}
          />
        </InputGroup>
        <InputGroup>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            onChange={handleChange3}
          />
        </InputGroup>
        <Button variant="primary" onClick={Add}>Add</Button>
      </Modal>
      <ListGroup as="ul">
        {list.map(function (d, idx) {
          return (
            <Container>
              <ListGroup.Item action as="li">
                <Col>
                  <Image src={d.image} className="imageSize" />
                  <div>{d.name}</div>
                  <Button onClick={() => Delete(idx)}>Delete</Button>
                  
                </Col>
              </ListGroup.Item>
            </Container>
          );
        })}
      </ListGroup>
    </Container>
  );
}

export default List;
