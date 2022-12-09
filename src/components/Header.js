import { useState } from "react";

const Header = (props) => {
  const [headerData, setHeaderData ] = useState(props.dataset);
  return (
    <div>
      <h3>{headerData.source_name}</h3>
      <p>{headerData.source_description}</p>
    </div>
  );
};

export default Header;
