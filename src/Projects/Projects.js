import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./Projects.css";
import GroupIcon from "@material-ui/icons/Group";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(projectName, projectKey, projectType, projectLead) {
  return {
    projectName,
    projectKey,
    projectType,
    projectLead,
    history: [
      {
        Sprint: "TSK sprint 1",
        Startdate: "2020-01-05",
        Enddate: "2020-01-20",
        Issues: "8",
      },
      {
        Sprint: "TSK sprint 2",
        Startdate: "2020-01-05",
        Enddate: "2020-01-20",
        Issues: "10",
      },
      {
        Sprint: "TSK sprint 3",
        Startdate: "2020-01-05",
        Enddate: "2020-01-20",
        Issues: "35",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" className="ProjectsRow">
          <a href="#">{row.projectName}</a>
        </TableCell>
        <TableCell className="ProjectsRow">
          <a href="#">{row.projectKey}</a>
        </TableCell>
        <TableCell className="ProjectsRow">{row.projectType}</TableCell>
        <TableCell className="ProjectsRow">
          <Avatar>
            {row.projectLead[0]}
            {row.projectLead[row.projectLead.length - 1]}
          </Avatar>
          <a href="#">{row.projectLead}</a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Project Details
                <GroupIcon
                  color="black"
                  className="ProjectsGroupIcon"
                ></GroupIcon>
                <InsertLinkIcon
                  color="black"
                  className="ProjectsInsertLinkIcon"
                ></InsertLinkIcon>
                <Badge
                  badgeContent={9}
                  color="primary"
                  className="ProjectsBadgeIcon"
                >
                  <MailIcon />
                </Badge>
                <MoreHorizIcon
                  color="black"
                  className="MoreIcon"
                ></MoreHorizIcon>
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Sprint</b>
                    </TableCell>
                    <TableCell>
                      <b>Start date</b>
                    </TableCell>
                    <TableCell>
                      <b>End date</b>
                    </TableCell>
                    <TableCell>
                      <b>Issues</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell
                        component="th"
                        scope="row"
                        className="ProjectsRow"
                      >
                        <a href="#">{historyRow.Sprint}</a>
                      </TableCell>
                      <TableCell>{historyRow.Startdate}</TableCell>
                      <TableCell>{historyRow.Enddate}</TableCell>
                      <TableCell>{historyRow.Issues}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectKey: PropTypes.string.isRequired,
    projectType: PropTypes.string.isRequired,
    projectLead: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData("Taskatic web application", "TSK12", "Software", "Vali S"),
  createData("React web development", "R13", "Software", "John B"),
  createData("Angular web development", "AR789", "Software", "Mark ST"),
  createData("Taskatic web application", "TSK12", "Software", "Vali S"),
  createData("React web development", "R13", "Software", "John B"),
  createData("Angular web development", "AR789", "Software", "Mark ST"),
  createData("Taskatic web application", "TSK12", "Software", "Vali S"),
];

export default function Projects() {
  return (
    <div>
      <Header />
      <div style={{ margin: "100px" }}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow className="ProjectsTableRow">
                <TableCell />
                <TableCell>
                  <h6>
                    <b>Project Name</b>
                  </h6>
                </TableCell>
                <TableCell>
                  <h6>
                    <b>Key</b>
                  </h6>
                </TableCell>
                <TableCell>
                  <h6>
                    <b>Type</b>
                  </h6>
                </TableCell>
                <TableCell>
                  <h6>
                    <b>Lead</b>
                  </h6>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </div>
  );
}
