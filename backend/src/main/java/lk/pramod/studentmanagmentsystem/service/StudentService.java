package lk.pramod.studentmanagmentsystem.service;

/*Author : Pramod Chamalka */

import lk.pramod.studentmanagmentsystem.entity.Student;

import java.util.List;

public interface StudentService {

    Student addStudent(Student student);

    List<Student> getAllStudents();

    Student getStudentById(long id);

    Student updateStudent(Student student, Long id);

    void deleteStudent(long id);
}
