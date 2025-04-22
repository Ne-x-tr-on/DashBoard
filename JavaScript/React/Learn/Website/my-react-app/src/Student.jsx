import PropTypes from 'prop-types';

function Students(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

// Default props if none are provided
Students.defaultProps = {
  name: "Guest",
  age: 0,
};

// PropTypes for validation
Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Students;
