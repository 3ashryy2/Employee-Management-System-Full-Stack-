from django.test import TestCase
from core.models import Company, Department, Employee
from django.utils import timezone

class CompanyModelTest(TestCase):
    def setUp(self):
        self.company = Company.objects.create(name="Test Company")

    def test_company_creation(self):
        self.assertEqual(self.company.name, "Test Company")
        self.assertEqual(self.company.num_departments, 0)
        self.assertEqual(self.company.num_employees, 0)

class DepartmentModelTest(TestCase):
    def setUp(self):
        self.company = Company.objects.create(name="Test Company")
        self.department = Department.objects.create(company=self.company, name="Test Department")

    def test_department_creation(self):
        self.assertEqual(self.department.name, "Test Department")
        self.assertEqual(self.department.company, self.company)
        self.assertEqual(self.department.num_employees, 0)

class EmployeeModelTest(TestCase):
    def setUp(self):
        self.company = Company.objects.create(name="Test Company")
        self.department = Department.objects.create(company=self.company, name="Test Department")
        self.employee = Employee.objects.create(
            company=self.company,
            department=self.department,
            status='hired',
            name="Test Employee",
            email="test@example.com",
            mobile_number="1234567890",
            address="123 Test Street",
            designation="Tester",
            hired_on=timezone.now().date()
        )

    def test_employee_creation(self):
        self.assertEqual(self.employee.name, "Test Employee")
        self.assertEqual(self.employee.email, "test@example.com")
        self.assertEqual(self.employee.mobile_number, "1234567890")
        self.assertEqual(self.employee.company, self.company)
        self.assertEqual(self.employee.department, self.department)
