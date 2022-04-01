package com.web.onestop;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("SELECT u from User u Where u.email=?1")
	User findByEmail(String email);
       
}
