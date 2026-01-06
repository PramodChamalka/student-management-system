import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../comman/Search";

const StudentsView = () => {
	const [students, setStudents] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadStudents();
	}, []);

	const loadStudents = async () => {
		try {
			const result = await axios.get(
				"http://localhost:5001/students",
				{
					validateStatus: () => {
						return true;
					},
				}
			);
			console.log("Load students response:", result.status);
			console.log("Students data:", result.data);
			console.log("Data type:", typeof result.data);
			console.log("Is array:", Array.isArray(result.data));
			
			if (result.status === 302 || result.status === 200) {
				if (result.data && Array.isArray(result.data)) {
					setStudents(result.data);
					console.log("Students state updated with", result.data.length, "students");
				} else {
					console.error("Invalid data format:", result.data);
				}
			}
		} catch (error) {
			console.error("Error loading students:", error);
		}
	};

	const handleDelete = async (id) => {
		console.log("Delete clicked for student ID:", id);
		
		if (!window.confirm("Are you sure you want to delete this student?")) {
			console.log("Delete cancelled by user");
			return;
		}
		
		try {
			console.log("Sending delete request...");
			const response = await axios.delete(
				`http://localhost:5001/students/delete/${id}`
			);
			console.log("Delete response:", response);
			loadStudents();
		} catch (error) {
			console.error("Error deleting student:", error);
			alert("Failed to delete student. Please try again.");
		}
	};

	return (
		<section>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Depatment</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{students
						.filter((st) =>
							st.firstName
								.toLowerCase()
								.includes(search)
						)
						.map((student, index) => (
							<tr key={student.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{student.firstName}</td>
								<td>{student.lastName}</td>
								<td>{student.email}</td>
								<td>{student.department}</td>
								<td className="mx-2">
									<Link
										to={`/student-profile/${student.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/edit-student/${student.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
										onClick={() =>
											handleDelete(student.id)
										}>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default StudentsView;