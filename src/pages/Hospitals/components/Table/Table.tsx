import { usePagination, useSortBy, useTable } from "react-table";
import '../../../../styles/Table.scss';

interface Props {
  columns: any,
  data: any,
}

const Table = ({ columns, data }: Props) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data
    },
    useSortBy,
    usePagination
  ) as any;

  return (
    <div id="table-div">
      <div className="table-responsive">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{column.render("Header")}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                      </svg>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination py-4 d-flex justify-content-center align-items-center">
        <button onClick={() => gotoPage(0)} className={!canPreviousPage ? "disabled" : ""}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} className={!canPreviousPage ? "disabled" : ""}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} className={!canNextPage ? "disabled" : ""}>
          {">"}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} className={!canNextPage ? "disabled" : ""}>
          {">>"}
        </button>
        <span className="ms-3">Page {pageIndex + 1} of {pageOptions.length}</span>
        <span className="mx-2">|</span>
        <span>Go to page:</span>
        <input
          type="number"
          inputMode="numeric"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          max={pageOptions.length}
        />
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Table;