package com.donate.fund_raise.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donate.fund_raise.entity.MedicalFundRaise;
import com.donate.fund_raise.repository.MdicalRepo;
import jakarta.persistence.EntityManager;

@Service
public class Medicalservice {

    @Autowired
    private MdicalRepo re;

    @Autowired
    EntityManager entityManager;
    
    public  MedicalFundRaise saveMed(MedicalFundRaise m){
        return re.save(m);
    }
    public List<MedicalFundRaise> getMed(){
        return re.findAll();
    }
    public void deleteMedicalFundRaiseById(int mf_id) {
    	re.deleteById(mf_id);
    }
    public MedicalFundRaise saveOrUpdate(int mf_id,MedicalFundRaise medicalfundraise) {
    	return re.saveAndFlush(medicalfundraise);
    }
}