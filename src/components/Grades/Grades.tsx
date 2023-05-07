import { DataGrid, GridColDef } from "@mui/x-data-grid";
import grades, { Grade } from "../../data/Grades";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

type ColDef = GridColDef<Grade> & { field: keyof Grade };

const allColumns: ColDef[] = [
  { field: "code", headerName: "Code", width: 90, sortable: false },
  {
    field: "title",
    headerName: "Title",
    width: 280,
    sortable: false,
  },
  {
    field: "grade",
    headerName: "Grade",
    width: 60,
    sortable: false,
  },
];

const compSci = grades.filter((x) => x.type === "cs");
const math = grades.filter((x) => x.type === "math");
const finance = grades.filter((x) => x.type === "fin");

interface TableProps {
  grades: Grade[];
}

const Table = ({ grades }: TableProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const columns = matches ? allColumns.filter((x, i) => i != 0) : allColumns;
  
  return (
    <DataGrid
      rows={grades}
      columns={columns}
      getRowId={(g) => g.code}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 50,
          },
        },
      }}
      pageSizeOptions={[50]}
      disableRowSelectionOnClick
      hideFooter
    />
  );
};

const Grades = () => {
  return (
    <>
      <Typography variant="h5">Computer Science</Typography>
      <Table grades={compSci} />
      <Typography variant="h5">Finance</Typography>
      <Table grades={finance} />
      <Typography variant="h5">Math</Typography>
      <Table grades={math} />
    </>
  );
};

export default Grades;
