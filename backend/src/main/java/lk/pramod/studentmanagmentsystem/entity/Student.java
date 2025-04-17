package lk.pramod.studentmanagmentsystem.entity;

/*Author : Pramod Chamalka */

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NaturalId;

@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Data

public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;

    private String lastName;

    @NaturalId
    @Column(unique = true)
    private String email;

    private String department;

    public Student(Long id, String firstName, String lastName, String email, String department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
    }
    public Student() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
