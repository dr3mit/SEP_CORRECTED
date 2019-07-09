export default () => {
  return (
    <div>
      <table>
        {props.Students.map(student => {
          return (
            <tr>
              <td>Student name: {student.name}.</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
