package com.manhattan.training;

public class Customer {
	private Integer customerId;
	private String customerName;
	private Integer balance;
	
	
	public Integer getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public Integer getBalance() {
		return balance;
	}
	public void setBalance(Integer balance) {
		this.balance = balance;
	}
	
	public Customer() {
		super();
	}
	
	public Customer(Integer customerId, String customerName, Integer balance) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.balance = balance;
	}
	

}
