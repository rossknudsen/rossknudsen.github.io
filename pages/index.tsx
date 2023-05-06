import { makeStyles } from '@mui/styles';
import Main from '../src/components/Main';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Main />
  );
}
