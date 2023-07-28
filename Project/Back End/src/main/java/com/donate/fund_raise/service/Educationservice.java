package com.donate.fund_raise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donate.fund_raise.entity.EducationFundRaise;
import com.donate.fund_raise.repository.EducationRepo;

import jakarta.persistence.EntityManager;

@Service
public class Educationservice {
	@Autowired
    private EducationRepo re;

    @Autowired
    EntityManager entityManager;
    
    public  EducationFundRaise saveEdu(EducationFundRaise m){
        return re.save(m);
    }
    public List<EducationFundRaise> getEdu(){
        return re.findAll();
    }
}
