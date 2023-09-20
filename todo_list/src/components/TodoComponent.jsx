/* eslint-disable react/prop-types */
const TodoComponent = ({todo}) => {
    return (
        <div className="todo">
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>

            <div>
                 <button className="complete">Completar</button>
                <button className="remove">X</button>
           </div>
      </div>
    );
};

export default TodoComponent;