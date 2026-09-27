import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography
} from "@mui/material";

function StudentTable({ data }) {
  const students = data.slice(0, 5);

  return (
    <Box 
    sx={{
        boxShadow: "0 4px 6px rgba(0.2, 0.2, 0.2, 0.2)",
        padding:"10px"
        }}>
         <Typography
          variant="h5"
          sx={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          Students
        </Typography>
    <TableContainer
  component={Paper}
  sx={{
    borderRadius: 2,
    boxShadow: "none",
  }}
>
      <Table>
        <TableHead>
          <TableRow 
          sx={{
      backgroundColor: "#eef4ff",
    }}>
             <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
    <TableCell sx={{ fontWeight: "bold" }}>English</TableCell>
    <TableCell sx={{ fontWeight: "bold" }}>Math</TableCell>
    <TableCell sx={{ fontWeight: "bold" }}>Biology</TableCell>
    <TableCell sx={{ fontWeight: "bold" }}>Chemistry</TableCell>
    <TableCell sx={{ fontWeight: "bold" }}>Physics</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>

              <TableCell>
                {student.first_name} {student.last_name}
              </TableCell>

              <TableCell>{student.english_score}</TableCell>

              <TableCell>{student.math_score}</TableCell>

              <TableCell>{student.biology_score}</TableCell>

              <TableCell>{student.chemistry_score}</TableCell>

              <TableCell>{student.physics_score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}

export default StudentTable;