package com.donate.fund_raise.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.donate.fund_raise.entity.PetFundRaise;
import com.donate.fund_raise.repository.PetRepo;

import jakarta.persistence.EntityManager;
@Service
public class Petservice {

    @Autowired
    private PetRepo re;

    @Autowired
    EntityManager entityManager;
    
    public  PetFundRaise savePet(PetFundRaise m){
        return re.save(m);
    }
    public List<PetFundRaise> getPet(){
        return re.findAll();
    }
}