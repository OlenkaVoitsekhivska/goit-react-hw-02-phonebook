function Filter({ filter, onChange }) {
  return (
    <label htmlFor="filterInput">
      FILTRATION
      <input type="text" id="filterInput" onChange={onChange} value={filter} />
    </label>
  );
}

export default Filter;
