import * as React from "react";
import styles from "./newDealsButton/NewDealButton.module.scss";

interface Props {
  link: string;
}

function NewDealButton({ link }: Props) {
  return (
    <a className={`button is-large is-danger ${styles.button}`} href={link}>
      New Deal
    </a>
  );
}

export default NewDealButton;
