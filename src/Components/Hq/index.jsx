import React from "react";

import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiAccordion from "@material-ui/core/Accordion";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.module.scss";

const Accordion = withStyles({
  root: {
    fontSize: "small",
    borderRadius: "5px",
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    minHeight: 40,
    "&$expanded": {
      minHeight: 40,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
}))(MuiAccordionDetails);

export const Hq = ({ comic }) => {
  return (
    <div className={styles.hqWrapper}>
      <div className={styles.hq}>
        <h4 className={styles.hqTitle}>{comic.title}</h4>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={`${comic.title}`}
        />

        <div className={styles.comicInfo}>
          <p>${comic.prices[0].price}</p>
          <p>{comic.pageCount} pages</p>
        </div>

        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Characters</p>
          </AccordionSummary>
          <AccordionDetails>
            {comic.characters.available > 0 ? (
              comic.characters.items.map((item) => (
                <ul>
                  <li style={{ marginLeft: "12px" }}>{item.name}</li>
                </ul>
              ))
            ) : (
              <p>Not found in api database</p>
            )}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
