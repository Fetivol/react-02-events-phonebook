export const ContactsList = ({ componentsData, onDelete }) => {
  console.log(componentsData);
  return (
    <div>
      <ul>
        {componentsData.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button
                type="button"
                onClick={() => {
                  onDelete(id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
