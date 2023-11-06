/* eslint-disable react/prop-types */

const Title = (props) => {
  return (
    <div className="d-flex mb-5 justify-content-between align-items-center gap-4">
      <h4 className="title">{props.title}</h4>
      <div className="line"></div>
    </div>
  );
};

export default Title;
