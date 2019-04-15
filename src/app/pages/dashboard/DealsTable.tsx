import * as React from "react";
import ReactTable from "react-table";

import DealInterface from "../../../types/Deal";
import styles from "./dealsTable/DealsTable.module.scss";
import { getColumns } from "./dealsTable/DealsTableColumns";

type Props = {
  data: Array<DealInterface>;
};

function DealsTable({ data }: Props) {
  let columns = getColumns(styles);

  return (
    <ReactTable
      data={data}
      columns={columns}
      showPagination={false}
      minRows={5}
      className={`table is-fullwidth is-hoverable ${styles.table}`}
    />
  );
}

export default DealsTable;
