import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      "& > *": {
        margin: theme.spacing(1),
        float: "right",
      },
    },
  })
);
