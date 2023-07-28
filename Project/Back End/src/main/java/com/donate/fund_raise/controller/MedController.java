package com.donate.fund_raise.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.donate.fund_raise.entity.MedicalFundRaise;

import com.donate.fund_raise.service.Medicalservice;

@CrossOrigin
@RestController
public class MedController {
	@Autowired
    Medicalservice ser;
    
    @PostMapping("/medfund")
    public String saveMed(@RequestBody MedicalFundRaise m){
        ser.saveMed(m);
        return "Saved";
    }

    @GetMapping("/findallmed")
    public List<MedicalFundRaise> getAll(){
        List<MedicalFundRaise>allMed = ser.getMed();
        return allMed;
    }
    @DeleteMapping("/medfund/{mf_id}")
    public void deleteMedicalFundRaise(@PathVariable("mf_id")int mf_id) {
    	ser.deleteMedicalFundRaiseById(mf_id);
    }
    @PutMapping("/update/{mf_id}")
    public MedicalFundRaise updateMedicalFundRaise(@PathVariable int mf_id,@RequestBody MedicalFundRaise medicalfundraise) {
    	return ser.saveOrUpdate(mf_id,medicalfundraise);
    }
}
