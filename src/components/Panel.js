

function Panel({ children, ...rest }) {
  // const finalClassNames = classNames(
  //   'border rounded p-3 shadow bg-white w-full',
  //   className
  // );

  return (
    <div {...rest} >
      {children}
    </div>
  );
}

export default Panel;
