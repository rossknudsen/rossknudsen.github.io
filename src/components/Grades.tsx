import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import grades, { Grade } from "../data/Grades";
import Typography from "@mui/material/Typography";

type ColDef = GridColDef<Grade> & { field: keyof Grade };

const columns: ColDef[] = [
  { field: "code", headerName: "Code", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 300,
  },
  {
    field: "grade",
    headerName: "Grade",
    width: 90,
  },
];

const compSci = grades.filter((x) => x.type === "cs");
const math = grades.filter((x) => x.type === "math");
const finance = grades.filter((x) => x.type === "fin");

interface TableProps {
  grades: Grade[];
}

const Table = ({ grades }: TableProps) => {
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
      <Table grades={math} />;
    </>
  );
};

export default Grades;
