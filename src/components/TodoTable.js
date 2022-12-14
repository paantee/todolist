import React from "react";

function TodoTable(props) {

return (
    <div>
     <table>
        <tbody>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Priority</th>
        </tr>
      {Array.isArray(props.todos)
         ? props.todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.description}</td>
                <td>{todo.priority}</td>
                <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
              </tr> );
        }) : null}
      </tbody>
    </table>
    </div>
)


}

export default TodoTable;