import { useMemo, useState } from 'react';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { ArrowUpDown, Download, Plus, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button } from '../ui/Button.jsx';
import { StatusBadge } from '../ui/StatusBadge.jsx';
import { EmptyState } from '../common/EmptyState.jsx';

export function DataTable({ rows, columns, onAdd, onEdit, onDelete }){
  const [globalFilter,setGlobalFilter]=useState('');
  const [rowSelection,setRowSelection]=useState({});
  const tableColumns=useMemo(()=>[
    {id:'select', header:({table})=><input type="checkbox" checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()}/>, cell:({row})=><input type="checkbox" checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()}/>},
    ...columns.slice(0,7).map((key)=>({accessorKey:key, header:()=>key.replaceAll('_',' '), cell:({getValue})=> key.includes('status')?<StatusBadge value={getValue()}/>:<span className="line-clamp-1">{String(getValue() ?? '')}</span>})),
    {id:'actions', header:'Actions', cell:({row})=><div className="flex gap-2"><button onClick={()=>onEdit(row.original)} className="rounded-xl bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/10">Edit</button><button onClick={()=>onDelete([row.original.id])} className="rounded-xl bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-rose-500/10">Delete</button></div>}
  ],[columns,onEdit,onDelete]);
  const table=useReactTable({data:rows,columns:tableColumns,state:{globalFilter,rowSelection},onGlobalFilterChange:setGlobalFilter,onRowSelectionChange:setRowSelection,getCoreRowModel:getCoreRowModel(),getFilteredRowModel:getFilteredRowModel(),getSortedRowModel:getSortedRowModel(),getPaginationRowModel:getPaginationRowModel(),enableRowSelection:true});
  const selected=table.getSelectedRowModel().rows.map(r=>r.original.id);
const exportCsv = () => {
  const csv = [
    columns.join(','),
    ...rows.map((r) =>
      columns.map((c) => JSON.stringify(r[c] ?? '')).join(',')
    ),
  ].join('\n');

  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = 'export.csv';
  a.click();

  toast.success('CSV exported');
};
  return <section className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><input value={globalFilter} onChange={(e)=>setGlobalFilter(e.target.value)} placeholder="Search records..." className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none dark:border-slate-700 dark:bg-slate-950"/><div className="flex flex-wrap gap-2"><Button variant="secondary" onClick={exportCsv}><Download className="h-4 w-4"/>Export CSV</Button>{selected.length>0&&<Button variant="danger" onClick={()=>onDelete(selected)}><Trash2 className="h-4 w-4"/>Delete {selected.length}</Button>}<Button onClick={onAdd}><Plus className="h-4 w-4"/>Add New</Button></div></div>{rows.length===0?<EmptyState/>:<div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm"><thead className="sticky top-0 bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950"><tr>{table.getHeaderGroups()[0].headers.map(h=><th key={h.id} className="px-4 py-3"><button className="inline-flex items-center gap-1" onClick={h.column.getToggleSortingHandler()}>{flexRender(h.column.columnDef.header,h.getContext())}{h.column.getCanSort()&&<ArrowUpDown className="h-3 w-3"/>}</button></th>)}</tr></thead><tbody>{table.getRowModel().rows.map(row=><tr key={row.id} className="border-t border-slate-100 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/60">{row.getVisibleCells().map(cell=><td key={cell.id} className="px-4 py-3 text-slate-700 dark:text-slate-200">{flexRender(cell.column.columnDef.cell,cell.getContext())}</td>)}</tr>)}</tbody></table></div>}<div className="mt-4 flex items-center justify-between text-sm text-slate-500"><span>Page {table.getState().pagination.pageIndex+1} of {table.getPageCount() || 1}</span><div className="flex gap-2"><Button variant="secondary" onClick={()=>table.previousPage()} disabled={!table.getCanPreviousPage()}>Previous</Button><Button variant="secondary" onClick={()=>table.nextPage()} disabled={!table.getCanNextPage()}>Next</Button></div></div></section>
}
