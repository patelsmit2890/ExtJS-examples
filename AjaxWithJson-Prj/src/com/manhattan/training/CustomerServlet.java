package com.manhattan.training;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CustomerServlet
 */
@WebServlet("/CustomerServlet")
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
		int custId = Integer.parseInt(request.getParameter("id"));
		Customer customer = custList.findCustomer(custId);
		request.setAttribute("cust", customer);	
		RequestDispatcher dispatcher = request.getRequestDispatcher("/showCustomer.jsp");
		dispatcher.forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int custId = Integer.parseInt(request.getParameter("id"));
		Customer customer = custList.findCustomer(custId);
		request.setAttribute("cust", customer);	
		RequestDispatcher dispatcher = request.getRequestDispatcher("/showCustomer.jsp");
		dispatcher.forward(request, response);
	}

}
