package com.donate.fund_raise.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name="EducationFundRaise")
@Table(name="EducationFundRaise")
public class EducationFundRaise {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	@Column(name="edu_id")
	private int edu_id;
	
	@Column(name="cause")
	private String cause;
	
	@Column(name="raise_amount")
	private long raise_amount;
	
	@Column(name="title")
	private String title;
	
	@Column(name="story")
	private String story;
	
	@Column(name="account_holder_name")
	private String account_holder_name;
	
	@Column(name=" account_number")
	private long  account_number;
	
	@Column(name="ifsc_code")
	private String ifsc_code;
	
	@Column(name=" bank_details")
	private String  bank_details;

	public int getEdu_id() {
		return edu_id;
	}

	public void setEdu_id(int edu_id) {
		this.edu_id = edu_id;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getStory() {
		return story;
	}

	public void setStory(String story) {
		this.story = story;
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

	public EducationFundRaise(int edu_id, String cause, long raise_amount, String title, String story,
			String account_holder_name, long account_number, String ifsc_code, String bank_details) {
		super();
		this.edu_id = edu_id;
		this.cause = cause;
		this.raise_amount = raise_amount;
		this.title = title;
		this.story = story;
		this.account_holder_name = account_holder_name;
		this.account_number = account_number;
		this.ifsc_code = ifsc_code;
		this.bank_details = bank_details;
	}
	
	public EducationFundRaise() {
		
	}

}
