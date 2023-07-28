package com.donate.fund_raise.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name="PetFundRaise")
@Table(name="PetFundRaise")
public class PetFundRaise {
	@Id
    @Column(name="pet_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
private int pet_id;

@Column(name="cause")
private String cause;

@Column(name="raise_amount")
private long raise_amount;

@Column(name="fund_title")
private String fund_title;

@Column(name="pet_story")
private String pet_story;

@Column(name="account_holder_name")
private String account_holder_name;

@Column(name="account_number")
private long account_number;

@Column(name="ifsc_code")
private String ifsc_code;

@Column(name="bank_details")
private String bank_details;

public int getPet_id() {
	return pet_id;
}

public void setPet_id(int pet_id) {
	this.pet_id = pet_id;
}

public String getCause() {
	return cause;
}

public void setCause(String cause) {
	this.cause = cause;
}

public long getRaise_amount() {
	return raise_amount;
}

public void setRaise_amount(long raise_amount) {
	this.raise_amount = raise_amount;
}

public String getFund_title() {
	return fund_title;
}

public void setFund_title(String fund_title) {
	this.fund_title = fund_title;
}

public String getPet_story() {
	return pet_story;
}

public void setPet_story(String pet_story) {
	this.pet_story = pet_story;
}



public String getAccount_holder_name() {
	return account_holder_name;
}

public void setAccount_holder_name(String account_holder_name) {
	this.account_holder_name = account_holder_name;
}

public long getAccount_number() {
	return account_number;
}

public void setAccount_number(long account_number) {
	this.account_number = account_number;
}

public String getIfsc_code() {
	return ifsc_code;
}

public void setIfsc_code(String ifsc_code) {
	this.ifsc_code = ifsc_code;
}

public String getBank_details() {
	return bank_details;
}

public void setBank_details(String bank_details) {
	this.bank_details = bank_details;
}

public PetFundRaise(int pet_id, String cause, long raise_amount, String fund_title, String pet_story ,String account_holder_name,long account_number,String ifsc_code,String bank_details) {
	super();
	this.pet_id = pet_id;
	this.cause = cause;
	this.raise_amount = raise_amount;
	this.fund_title = fund_title;
	this.pet_story = pet_story;
	this.account_holder_name=account_holder_name;
	this.account_number=account_number;
	this.ifsc_code = ifsc_code;
	this.bank_details = bank_details;	
}
public PetFundRaise(){
	
}


}

