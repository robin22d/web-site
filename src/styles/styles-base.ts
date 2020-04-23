import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default
    }
  })
);

export default useStylesBase;
