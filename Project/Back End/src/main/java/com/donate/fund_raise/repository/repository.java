package com.donate.fund_raise.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.donate.fund_raise.entity.User;

@Repository
public interface repository  extends JpaRepository<User,Integer>{

}
