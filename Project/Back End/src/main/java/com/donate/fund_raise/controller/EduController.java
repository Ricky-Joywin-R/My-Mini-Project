package com.donate.fund_raise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.donate.fund_raise.entity.EducationFundRaise;
import com.donate.fund_raise.service.Educationservice;


@CrossOrigin
@RestController
public class EduController {
	@Autowired
    Educationservice ser;
    
    @PostMapping("/edufund")
    public String saveEdu(@RequestBody EducationFundRaise m){
        ser.saveEdu(m);
        return "Saved";
    }

    @GetMapping("/findalledu")
    public List<EducationFundRaise> getEdu(){
        List<EducationFundRaise>allEdu = ser.getEdu();
        return allEdu;
    }
}
