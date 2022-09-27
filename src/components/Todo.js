import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export const TodoItem = (props) => {
  let todoItemStyle = {
    border: "none",
    fontSize:"1.25em"
  };

  let { title, desc, sNo } = props.todo;
  let { onDelete } = props;

  return (
    <>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        style={todoItemStyle}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title}</div>
          {desc}
        </div>
        <Button
          variant="danger"
          onClick={() => {
            onDelete(sNo);
          }}
        >
          Delete
        </Button>
      </ListGroup.Item>
      <hr />
    </>
  );
};

// Todo.propTypes
