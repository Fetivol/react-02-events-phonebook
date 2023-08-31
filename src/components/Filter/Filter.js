export const Filter = ({ filter, onChange }) => {
  console.log(filter);
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => {
            onChange(e.target.value);
          }}
        ></input>
      </label>
    </div>
  );
};
