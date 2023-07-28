package com.donate.fund_raise.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name="MedicalFundRaise")
@Table(name="MedicalFundRaise")
public class MedicalFundRaise {
	@Id
    @Column(name="mf_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
private int mf_id;

@Column(name="relation")
private String relation;
@Column(name="raise_amount")
private long raise_amount;

@Column(name="fund_title")
private String fund_title;

@Column(name="patient_story")
private String patient_story;

@Column(name="account_holder_name")
private String account_holder_name;

@Column(name="account_number")
private long account_number;

@Column(name="ifsc_code")
private String ifsc_code;

@Column(name="bank_details")
private String bank_details;

public int getMf_id() {
	return mf_id;
}

public void setMf_id(int mf_id) {
	this.mf_id = mf_id;
}

public String getRelation() {
	return relation;
}

public void setRelation(String relation) {
	this.relation = relation;
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

public String getPatient_story() {
	return patient_story;
}

public void setPatient_story(String patient_story) {
	this.patient_story = patient_story;
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

public MedicalFundRaise(int mf_id, String relation, long raise_amount, String fund_title, String patient_story ,String account_holder_name,long account_number,String ifsc_code,String bank_details) {
	super();
	this.mf_id = mf_id;
	this.relation = relation;
	this.raise_amount = raise_amount;
	this.fund_title = fund_title;
	this.patient_story = patient_story;
	this.account_holder_name=account_holder_name;
	this.account_number=account_number;
	this.ifsc_code = ifsc_code;
	this.bank_details = bank_details;	
}
public MedicalFundRaise() {
	
}


}

