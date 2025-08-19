-- Find the second highest salary from the employees table.
-- Table: employees(id, name, salary)
SELECT DISTINCT salary from employees ORDER BY DESC LIMIT 1 OFFSET 1;


-- Find employees who earn more than the average salary.
-- Table: employees(id, name, department_id)
SELECT name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);


-- List departments and count of employees in each department.
select department_id, count(*) as total_employees
from employees
group by department_id
order by total_employees DESC;

-- Find employees who don’t have a manager.
-- Table: employees(id, name, manager_id)
SELECT id, name from employees
where manager_id is null;


-- Find the highest salary in each department.
select department_id, max(salary) as max_salary
from employees
group by department_id;


-- Find employees who earn in the top 3 salaries. (top 3 salaries)
select DISTINCT salary
from employees
order by salary DESC
limit 3;

----------------------------- JOIN tables ------------------------------

-- . List all employees with their department names.
/*
Tables:
employees(id, name, department_id)
departments(id, department_name)
*/
select e.id, e.name, d.department_name
from employees e
inner join departments d on e.department_id = d.id;

/*
Q2. Find employees who don’t belong to any department.

Same tables as Q1.
*/

select e.id, e.name
from employees e
left join departments d on e.department_id = d.id
where d.id is null;


/*
List all orders with customer names, even if the customer data is missing.
Tables:
orders(order_id, customer_id, amount)
customers(id, customer_name)
*/

select o.order_id, o.amount, c.customer_id
from orders o
left join customers c on o.customer_id = c.id