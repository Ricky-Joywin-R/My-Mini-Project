package com.donate.fund_raise.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.donate.fund_raise.entity.MemorialFundRaise;

@Repository
public interface MemorialRepo extends JpaRepository<MemorialFundRaise,Integer> {

}
