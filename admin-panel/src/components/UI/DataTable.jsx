import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown, ChevronLeft, ChevronRight, Download, FileJson, FileSpreadsheet } from 'lucide-react';

const DataTable = ({
  columns = [],
  data = [],
  searchKey = '',
  searchPlaceholder = 'Search records...',
  title = '',
  actions,
  pageSize = 10,
  emptyMessage = 'No data available'
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' | 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize);

  // Filter Data
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLowerCase();
    return data.filter((row) => {
      if (searchKey && row[searchKey]) {
        return String(row[searchKey]).toLowerCase().includes(lower);
      }
      return Object.values(row).some((val) =>
        String(val || '').toLowerCase().includes(lower)
      );
    });
  }, [data, searchTerm, searchKey]);

  // Sort Data
  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      if (aVal === bVal) return 0;
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;
      const comparison = String(aVal).localeCompare(String(bVal), undefined, { numeric: true });
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [filteredData, sortColumn, sortDirection]);

  // Paginate Data
  const totalPages = Math.ceil(sortedData.length / rowsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);

  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  // Export handlers
  const exportToCSV = () => {
    if (data.length === 0) return;
    const headers = columns.map((c) => c.header || c.accessor).join(',');
    const rows = sortedData.map((row) =>
      columns
        .map((c) => {
          const val = row[c.accessor];
          return `"${String(val ?? '').replace(/"/g, '""')}"`;
        })
        .join(',')
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${title.toLowerCase().replace(/\s+/g, '_') || 'export'}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToJSON = () => {
    if (data.length === 0) return;
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(sortedData, null, 2))}`;
    const link = document.createElement('a');
    link.setAttribute('href', jsonString);
    link.setAttribute('download', `${title.toLowerCase().replace(/\s+/g, '_') || 'export'}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass-card data-table-container">
      {/* Table Toolbar */}
      <div className="table-toolbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '240px' }}>
          <div className="search-bar-wrap" style={{ flex: 1, maxWidth: '360px' }}>
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="form-input"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            Showing {sortedData.length} of {data.length} records
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {actions}
          <button
            onClick={exportToCSV}
            className="btn btn-secondary btn-sm"
            title="Export to CSV"
          >
            <FileSpreadsheet size={15} />
            <span>CSV</span>
          </button>
          <button
            onClick={exportToJSON}
            className="btn btn-secondary btn-sm"
            title="Export to JSON"
          >
            <FileJson size={15} />
            <span>JSON</span>
          </button>
        </div>
      </div>

      {/* Table Responsive Wrapper */}
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={col.accessor || idx}
                  style={{
                    cursor: col.sortable !== false ? 'pointer' : 'default',
                    width: col.width || 'auto',
                    ...col.headerStyle
                  }}
                  onClick={() => col.sortable !== false && handleSort(col.accessor)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <span>{col.header}</span>
                    {col.sortable !== false && (
                      <ArrowUpDown
                        size={13}
                        style={{
                          opacity: sortColumn === col.accessor ? 1 : 0.35,
                          color: sortColumn === col.accessor ? 'var(--accent-cyan)' : 'inherit'
                        }}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIdx) => (
                <tr key={row._id || row.id || rowIdx}>
                  {columns.map((col, colIdx) => (
                    <td key={col.accessor || colIdx} style={col.cellStyle}>
                      {col.render ? col.render(row[col.accessor], row, rowIdx) : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{emptyMessage}</p>
                  {searchTerm && (
                    <p style={{ fontSize: '0.8125rem', marginTop: '0.25rem' }}>
                      Try adjusting your search criteria
                    </p>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Table Pagination Controls */}
      <div className="table-pagination">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>Rows per page:</span>
          <select
            className="form-select"
            style={{ width: '70px', padding: '0.25rem 0.5rem', fontSize: '0.8125rem' }}
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <button
              className="btn btn-secondary btn-icon-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              title="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="btn btn-secondary btn-icon-sm"
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              title="Next Page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
