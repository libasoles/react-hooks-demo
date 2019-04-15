import * as React from "react";

import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinningCircle} />
    </div>
  );
}

export default Loading;
