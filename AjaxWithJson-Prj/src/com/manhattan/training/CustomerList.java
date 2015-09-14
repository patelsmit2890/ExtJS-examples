package com.manhattan.training;

import java.util.HashMap;
import java.util.Map;

public class CustomerList {

	private Map<Integer,Customer> list = new HashMap<>();

	public CustomerList(){
		super();
		list.put(1, new Customer(1,"Deva",6000));
		list.put(2, new Customer(2,"Raju",7000));
		list.put(3, new Customer(3,"Amar",8000));
	}
	public Customer findCustomer(int id){
		return list.get(id);
	}
}


