
import useNavigation from '../hooks/use-navigation';

function Link({ to, children }) {
  const { navigate } = useNavigation();

  // const classes = classNames(
  //   'text-blue-500',
  //   className,
  //   currentPath === to && activeClassName
  // );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a  href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
