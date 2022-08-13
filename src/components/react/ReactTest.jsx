import { isPropertySignature } from "typescript";

export const ReactTest = (props) => {
  return (
    
    <div>
      <h1>React test</h1>
      { props.children }
    </div>
  );
};
