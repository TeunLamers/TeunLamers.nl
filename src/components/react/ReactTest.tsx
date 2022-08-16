interface Props {
  children?: React.ReactNode;
}

export const ReactTest = (props: Props) => {
  return (
    <div>
      <h1 className="bg-red">React test</h1>
      { props.children }
    </div>
  );
};
