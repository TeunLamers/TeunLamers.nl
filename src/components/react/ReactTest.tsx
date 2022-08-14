interface Props {
  children?: React.ReactNode;
}

export const ReactTest = (props: Props) => {
  return (
    <div>
      <h1>React test</h1>
      { props.children }
    </div>
  );
};
