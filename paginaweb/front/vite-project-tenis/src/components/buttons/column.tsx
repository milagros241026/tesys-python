import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    username: '@MUI',
    age: 38,
    desk: 'D-546',
  },
  {
    id: 2,
    username: '@MUI-X',
    age: 25,
    desk: 'D-042',
  },
];

const columns: GridColDef[] = [
  { field: 'username', headerName: 'Usuario', flex: 1, hideable: false },
  { field: 'age', headerName: 'Edad', type: 'number', width: 100 },
  { field: 'desk', headerName: 'Escritorio', width: 130 },
];

export default function VisibleColumnsBasicExample() {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        showToolbar
      />
    </div>
  );
}

