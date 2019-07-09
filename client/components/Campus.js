//returns campuseS table
export default () => {
  return (
    <div>
      <table>
        {props.Campuses.map(campus => {
          return (
            <tr>
              <td>Campus name: {campus.name}.</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
