import React from "react";

export const CompleteTodos = (props) => {
  const { completes, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {completes.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              {todo}
              <div>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
