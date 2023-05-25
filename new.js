{studentsData.length > 0 ? (
  studentsData.map((user) => (
    <tr key={user._id}>
      {/* <td>
        <img
          src={user.image}
          alt={user.first_name + " " + user.last_name}
        />
      </td> */}
      <td>{user.fname}</td>
      <td>{user.lname}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>

    </tr>
  ))
) : (
  <tr>
    <td colSpan={5}>No Users</td>
  </tr>
)}