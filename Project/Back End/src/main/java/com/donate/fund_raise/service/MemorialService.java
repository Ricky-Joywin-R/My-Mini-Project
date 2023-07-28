package com.donate.fund_raise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donate.fund_raise.entity.MemorialFundRaise;
import com.donate.fund_raise.repository.MemorialRepo;

import jakarta.persistence.EntityManager;


@Service
public class MemorialService {
	@Autowired
    private MemorialRepo re;

    @Autowired
    EntityManager entityManager;
    
    public  MemorialFundRaise saveMem(MemorialFundRaise m){
        return re.save(m);
    }
    public List<MemorialFundRaise> getMem(){
        return re.findAll();
    }
}
