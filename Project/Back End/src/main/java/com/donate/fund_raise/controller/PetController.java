package com.donate.fund_raise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.donate.fund_raise.entity.PetFundRaise;
import com.donate.fund_raise.service.Petservice;
@CrossOrigin
@RestController
public class PetController {
	
		@Autowired
	    Petservice ser;
	    
	    @PostMapping("/petfund")
	    public String saveMed(@RequestBody PetFundRaise m){
	        ser.savePet(m);
	        return "Saved";
	    }

	    @GetMapping("/findallpet")
	    public List<PetFundRaise> getPet(){
	        List<PetFundRaise>allPet = ser.getPet();
	        return allPet;
	    }

}
