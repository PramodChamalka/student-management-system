package lk.pramod.studentmanagmentsystem.service.impl;

/*Author : Pramod Chamalka */

import lk.pramod.studentmanagmentsystem.entity.Student;
import lk.pramod.studentmanagmentsystem.exception.StudentAlradyExistsException;
import lk.pramod.studentmanagmentsystem.exception.StudentNotFoundException;
import lk.pramod.studentmanagmentsystem.repository.StudentRepository;
import lk.pramod.studentmanagmentsystem.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
//@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public Student addStudent(Student student) {

        if(StudentAlradyExists(student.getEmail())){
            throw new StudentAlradyExistsException(student.getEmail() +" Already Exist");
        }
        return studentRepository.save(student);
    }

    private boolean StudentAlradyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(long id) {
        return studentRepository.findById(id)
                .orElseThrow(()->new StudentNotFoundException("Sorry Student not Found"));
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        return studentRepository.findById(id).map(st->{
            st.setFirstName(student.getFirstName());
            st.setLastName(student.getLastName());
            st.setEmail(student.getEmail());
            st.setDepartment(student.getDepartment());
            return studentRepository.save(st);
        }).orElseThrow(() -> new StudentNotFoundException("Student not found with this id : "+id));
    }

    @Override
    public void deleteStudent(long id) {
        if(!studentRepository.existsById(id)){
            throw new StudentNotFoundException("Student not found with this id : "+id);
        }

    }
}
