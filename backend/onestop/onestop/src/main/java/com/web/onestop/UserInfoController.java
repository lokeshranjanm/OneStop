package com.web.onestop;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserInfoController {
	    @Autowired
	    private UserRepository userRepo;
	    
//	    @GetMapping("/gr/{empno}")
//	  		public User getUser(@PathVariable int empno) 
//	  		{ 
//	  	
//	  			return employeeServiceInterface.getEmployeeDetails(empno);
//	  			
//	  		}
	   
	    @GetMapping("/register")
	    public String showRegistrationForm(Model model) {
	        model.addAttribute("user", new User());
	         
	        return "signup_form";
	    }
	  	    
	  	    @PostMapping("/ar")
	  		public String addUser(@RequestBody User user)
	  		{     
	  	    	userRepo.save(user);
	  	    	return "Success";
	  			
	  			
	  		}
	  	  @PostMapping("/process_register")
	  	public String processRegister(User user) {
	  	    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	  	    String encodedPassword = passwordEncoder.encode(user.getPassword());
	  	    user.setPassword(encodedPassword);
	  	     
	  	    userRepo.save(user);
	  	     
	  	    return "register_success";
	  	}
	  	  
	  	@GetMapping("/users")
	  	public String listUsers(Model model) {
	  	    List<User> listUsers = userRepo.findAll();
	  	    model.addAttribute("listUsers", listUsers);
	  	     
	  	    return "users";
	  	}

	
}
