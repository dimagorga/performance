// import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ModalSelect({ name, value, getVariable }) {
  // const [select, setSelect] = useState("");

  const onChangeSelect = (e) => {
    const selectName = e.target.selectedOptions[0].text;
    return selectName;
  };

  return (
    <label htmlFor="67">
      <select onChange={onChangeSelect} name={name}>
        {value.map((variable) => {
          return (
            <option key={uuidv4()} value={variable.id}>
              {variable.name}
            </option>
          );
        })}
      </select>
    </label>
  );
}
