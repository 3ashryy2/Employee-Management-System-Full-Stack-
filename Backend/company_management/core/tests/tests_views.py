from django.utils import timezone
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from core.models import Company, Department, Employee
from django.contrib.auth import get_user_model

User = get_user_model()

class CompanyAPITestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='admin', password='password', role='admin')
        self.client.force_authenticate(user=self.user)
        self.company = Company.objects.create(name="Test Company")

    def test_get_companies(self):
        response = self.client.get('/api/companies/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_company(self):
        data = {"name": "New Company"}
        response = self.client.post('/api/companies/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Company.objects.count(), 2)

class DepartmentAPITestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='admin', password='password', role='admin')
        self.client.force_authenticate(user=self.user)
        self.company = Company.objects.create(name="Test Company")
        self.department = Department.objects.create(company=self.company, name="Test Department")

    def test_get_departments(self):
        response = self.client.get('/api/departments/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_department(self):
        data = {"company": self.company.id, "name": "New Department"}
        response = self.client.post('/api/departments/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Department.objects.count(), 2)

class EmployeeAPITestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='admin', password='password', role='admin')
        self.client.force_authenticate(user=self.user)
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

    def test_get_employees(self):
        response = self.client.get('/api/employees/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_employee(self):
        data = {
            "company": self.company.id,
            "department": self.department.id,
            "status": "hired",
            "name": "New Employee",
            "email": "new@example.com",
            "mobile_number": "0987654321",
            "address": "456 New Street",
            "designation": "New Tester",
            "hired_on": timezone.now().date()
        }
        response = self.client.post('/api/employees/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Employee.objects.count(), 2)
