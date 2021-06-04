import React from "react";

import { AccordionDetails, AccordionSummary } from "@material-ui/core";
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
            {comic.characters.items.map((item) => (
              <p>
                {console.log(item)}
                {item.name.length !== 0 ? (
                  item.name
                ) : (
                  <p>Not found in database</p>
                )}
              </p>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
