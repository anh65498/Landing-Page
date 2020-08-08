import React, { Fragment } from "react";
import {
  makeStyles,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import HeroImage from "../assets/HeroImage.png";

const useStyles = makeStyles((theme) => ({
  flexBox: {
    display: "flex",
  },
  flexBoxCenter: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    height: "70vh",
  },
  /**** TITLE *******/

  /***** Hero PARAGRAPH */
  heroParagraph: {
    padding: theme.spacing(2, 0),
    color: theme.palette.text.primary,
  },
  heroMedia: {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    // objectFit: "cover",
    height: "65vh",
    width: "100%",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

  /* Divider */
  dividerContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(5),
  },
  projectTitle: {
    alignText: "center",
    display: "inline",
    padding: theme.spacing(0, 5),
  },
  line: {
    border: "none",
    borderTop: `3px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.secondary,
    overflow: "visible",
    textAlign: "center",
    width: "50%",
  },

  /* Stack Button */
  chipsWrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(1),
  },
  /* 6 cards */
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  moreProjects: {
    justifyContent: "center",
    marginTop: theme.spacing(7),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

const LandingPage = (props) => {
  const classes = useStyles();
  // Stack Buttons
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "React" },
    { key: 1, label: "Bootstrap" },
    { key: 2, label: "Material-UI" },
    { key: 2, label: "NodeJS/Express" },
    { key: 3, label: "MongoDB" },
    { key: 4, label: "FireBase" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Fragment>
      <CssBaseline />
      <main>
        {/* Hero Box */}
        <Container maxWidth="lg">
          <Box className={classes.heroContent} boxShadow={3}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Typography variant="h4" align="center" gutterBottom>
                  ANH PHAM
                </Typography>
                <Typography
                  variant="subtitle1"
                  paragraph
                  align="left"
                  className={classes.heroParagraph}
                >
                  Website Builder
                </Typography>
                <Typography>UI/UX Designer</Typography>
                <Typography>Software Engineer</Typography>
              </Grid>
              <Grid item xs={4} className={classes.heroMedia}></Grid>
            </Grid>
          </Box>
        </Container>
        {/* End hero Box */}
        <Container className={classes.cardGrid} maxWidth="lg">
          <Box className={classes.dividerContainer}>
            <hr className={classes.line} />
            <Typography variant="h4" className={classes.projectTitle}>
              PROJECTS
            </Typography>
            <hr className={classes.line} />
          </Box>

          {/* Stack Buttons */}
          <Paper component="ul" className={classes.chipsWrapper}>
            {chipData.map((data) => {
              // let icon;

              // if (data.label === "React") {
              //   icon = <TagFacesIcon />;
              // }

              return (
                <li key={data.key}>
                  <Chip
                    //   icon={icon}
                    label={data.label}
                    onDelete={
                      data.label === "React" ? undefined : handleDelete(data)
                    }
                    className={classes.chip}
                  />
                </li>
              );
            })}
          </Paper>
          {/* 6 projects */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Title
                    </Typography>
                    <Typography align="left">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate impedit magnam culpa
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.flexBoxCenter}>
                    <Button
                      size="medium"
                      color="primary"
                      className={classes.learnMoreButton}
                      variant="contained"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Fragment>
  );
};

export default LandingPage;
