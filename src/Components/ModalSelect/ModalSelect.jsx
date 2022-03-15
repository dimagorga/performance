import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ModalSelect({ variables }) {
  const [select, setSelect] = useState("");

  return (
    <label>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        {variables.map((o) => (
          <option key={o.name} value={o.name}>
            {o.name}
          </option>
        ))}
      </select>
    </label>
  );
}
