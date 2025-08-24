import React, { useState } from "react";
import "../Ex5/Ex5.css";

const students = [
  {
    id: 1,
    code: "SV001",
    name: "Nguyen A",
    dob: "1/2/200",
    email: "abc@gmail.com",
    status: "Đang hoạt động",
  },
  {
    id: 2,
    code: "SV002",
    name: " B",
    dob: "1/1/2002",
    email: "abc@gmail.com",
    status: "Ngừng hoạt động",
  },
];

const StudentRow = ({ student, index }) => (
  <tr>
    <td>{index + 1}</td>
    <td>{student.code}</td>
    <td>{student.name}</td>
    <td>{student.dob}</td>
    <td>{student.email}</td>
    <td>
      <span className={student.status === "Đang hoạt động" ? "ex5-status-active" : "ex5-status-inactive"}>
        {student.status}
      </span>
    </td>
    <td className="ex5-actions">
      <button>Chặn</button>
      <button className="edit">Sửa</button>
      <button className="delete">Xóa</button>
    </td>
  </tr>
);

const StudentTable = ({ students }) => (
  <table className="ex5-table">
    <thead>
      <tr>
        <th>STT</th>
        <th>Mã sinh viên</th>
        <th>Tên sinh viên</th>
        <th>Ngày sinh</th>
        <th>Email</th>
        <th>Trạng thái</th>
        <th>Chức năng</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student: any, idx: number) => (
        <StudentRow key={student.id} student={student} index={idx} />
      ))}
    </tbody>
  </table>
);

const Pagination = () => (
  <div className="ex5-pagination">
    <button>{"<"}</button>
    <button className="active">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>{">"}</button>
  </div>
);

const Toolbar = () => (
  <div className="ex5-toolbar">
   
    <select>
      <option>Sắp xếp theo tuổi</option>
    </select>
    <input placeholder="Tìm kiếm từ khóa theo tên hoặc email" />
  </div>
);
const Exersice05 = () => {
  const [data] = useState(students);

  return (
    <div className="ex5-container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h3 className="ex5-title" style={{ margin: 0 }}>Quản lý sinh viên</h3>
        <button style={{ background: '#1677ff', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 16px', cursor: 'pointer' }}>Thêm mới sinh viên</button>
      </div>
      <Toolbar />
      <StudentTable students={data} />
      <Pagination />
    </div>
  );
};

export default Exersice05;