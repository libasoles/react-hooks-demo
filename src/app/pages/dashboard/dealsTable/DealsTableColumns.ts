import { Column, RowRenderProps } from "react-table";
import DealInterface from "../../../../types/Deal";

import {
  formatDate,
  formatPercentage,
  formatPrice
} from "../../../../core/formatters";
import { Permissions } from "../../../../auth/useAuthorization";
import { useAuthorization } from "../../../../auth";

function getColumns(styles: { [className: string]: string }) {
  let columns: Column<DealInterface>[] = [
    {
      Header: "Company Name",
      accessor: "companyName",
      headerClassName: styles.tableHeader
    },
    {
      Header: "Advance Amount",
      accessor: "advanceAmount",
      Cell: ({ value }) => formatPrice(value),
      headerClassName: styles.tableHeader,
      className: styles.right
    },
    {
      Header: "Factor Rate",
      accessor: "factor",
      headerClassName: styles.tableHeader,
      className: styles.right
    },
    {
      Header: "Repayable Amount",
      accessor: "totalRepayment",
      headerClassName: styles.tableHeader,
      Cell: ({ value }) => formatPrice(value),
      className: styles.right
    },
    {
      Header: "Split %",
      accessor: "cardPercentage",
      headerClassName: styles.tableHeader,
      Cell: ({ value }) => formatPercentage(value),
      className: styles.right
    },
    {
      Header: "Commission %",
      accessor: "chosenCommission",
      headerClassName: styles.tableHeader,
      Cell: ({ value }: RowRenderProps) => formatPercentage(value),
      className: styles.right
    },
    {
      Header: "Commission Amount",
      accessor: "commissionAmount",
      headerClassName: styles.tableHeader,
      Cell: ({ value }: RowRenderProps) => formatPrice(value),
      className: styles.right
    },
    {
      Header: "Created Date",
      accessor: "createdAt",
      headerClassName: styles.tableHeader,
      Cell: ({ value }) => formatDate(value),
      className: styles.right
    },
    {
      Header: "Current Stage",
      accessor: "stage",
      headerClassName: styles.tableHeader,
      className: styles.right
    },
    {
      Header: "Last Modified Date",
      accessor: "modifiedAt",
      headerClassName: styles.tableHeader,
      Cell: ({ value }) => formatDate(value),
      className: styles.right
    }
  ];

  const { userCan } = useAuthorization();

  function byPermission(column: Column<DealInterface>) {
    let keep = true;
    if (!userCan(Permissions.ReadCommission)) {
      const restrictedColumns = ["chosenCommission", "commissionAmount"];
      keep = !restrictedColumns.includes(<string>column.accessor);
    }
    return keep;
  }

  return columns.filter(byPermission);
}

export { getColumns };
