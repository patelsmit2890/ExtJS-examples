package com.manhattan.training;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.WebServlet;

/**
 * Servlet implementation class CustomerServlet
 */
@WebServlet("/")
public class CustomerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private CustomerList custList = new CustomerList();

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CustomerServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//int custId = Integer.parseInt(request.getParameter("id"));
		int custId=5;
		Customer customer = custList.findCustomer(custId);
		request.setAttribute("cust", customer);	
		RequestDispatcher dispatcher = request.getRequestDispatcher("/showCustomer.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		int custId = Integer.parseInt(request.getParameter("id"));
		Customer customer = custList.findCustomer(custId);
		request.setAttribute("cust", customer);	
		RequestDispatcher dispatcher = request.getRequestDispatcher("/showCustomer.jsp");
		dispatcher.forward(request, response);
	}

}
