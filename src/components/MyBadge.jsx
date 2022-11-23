import Badge from "react-bootstrap/Badge";

const MyBadge = ({ text, color }) => (
  <>
    <Badge variant={color}>{text}</Badge>
  </>
);

export default MyBadge;
