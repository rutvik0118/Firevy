import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';

export const DataTable = ({
  columns,
  data,
  searchPlaceholder = 'Search records...',
  searchKey = 'name',
  actions,
  pageSize = 10,
  emptyMessage = 'No records found'
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;
    const term = searchTerm.toLowerCase();
    return data.filter((item) => {
      if (typeof searchKey === 'function') return searchKey(item, term);
      const val = item[searchKey];
      return val ? String(val).toLowerCase().includes(term) : false;
    });
  }, [data, searchTerm, searchKey]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortField) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (aVal === bVal) return 0;
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;
      const comparison = aVal > bVal ? 1 : -1;
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [filteredData, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="data-table-container">
      {/* Table Toolbar */}
      <div className="table-toolbar">
        <div className="search-bar-wrap" style={{ maxWidth: '320px', width: '100%' }}>
          <Search size={15} className="search-icon" />
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

        {actions && <div style={{ display: 'flex', gap: '0.5rem' }}>{actions}</div>}
      </div>

      {/* Table responsive view */}
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  style={{
                    cursor: col.sortable ? 'pointer' : 'default',
                    width: col.width || 'auto',
                    textAlign: col.align || 'left'
                  }}
                  onClick={() => col.sortable && col.field && handleSort(col.field)}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      justifyContent: col.align === 'right' ? 'flex-end' : 'flex-start'
                    }}
                  >
                    <span>{col.header}</span>
                    {col.sortable && <ArrowUpDown size={12} style={{ opacity: 0.6 }} />}
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
                    <td
                      key={colIdx}
                      style={{
                        textAlign: col.align || 'left'
                      }}
                    >
                      {col.render ? col.render(row) : row[col.field]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Table Pagination */}
      <div className="table-pagination">
        <div>
          Showing {sortedData.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} to{' '}
          {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="btn btn-secondary btn-icon-sm"
          >
            <ChevronLeft size={14} />
          </button>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 600 }}>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="btn btn-secondary btn-icon-sm"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
