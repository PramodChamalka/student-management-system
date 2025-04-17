package lk.pramod.studentmanagmentsystem.repository;

/*Author : Pramod Chamalka */

import lk.pramod.studentmanagmentsystem.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {


    Optional<Student> findByEmail(String email);
}
