import React, { useState } from "react";
import { UserText } from "./styles";

const Paragraph = React.forwardRef(({ textContent, enterHandler }, ref) => {
  const [selection, setSelection] = useState(null);

  return (
    <UserText contentEditable={true} ref={ref} onKeyDown={(e) => enterHandler(e)} >
      {textContent}
    </UserText>
  );
});

export default Paragraph;
