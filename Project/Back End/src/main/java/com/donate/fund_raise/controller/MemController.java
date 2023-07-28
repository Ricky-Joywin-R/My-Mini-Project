package com.donate.fund_raise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.donate.fund_raise.entity.MemorialFundRaise;
import com.donate.fund_raise.service.MemorialService;



@CrossOrigin
@RestController
public class MemController {
	@Autowired
    MemorialService ser;
    
    @PostMapping("/memfund")
    public String saveMem(@RequestBody MemorialFundRaise m){
        ser.saveMem(m);
        return "Saved";
    }

    @GetMapping("/findallmem")
    public List<MemorialFundRaise> getAll(){
        List<MemorialFundRaise>allMem = ser.getMem();
        return allMem;
    }
}
