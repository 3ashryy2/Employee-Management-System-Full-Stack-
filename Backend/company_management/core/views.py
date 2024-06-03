from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Company, Department, Employee
from .serializers import CompanySerializer, DepartmentSerializer, EmployeeSerializer
from .permissions import IsAdminOrManager

class CompanyViewSet(viewsets.ModelViewSet):
    """
    retrieve:
    Return the given company.

    list:
    Return a list of all the existing companies.

    create:
    Create a new company.

    update:
    Update the given company.

    partial_update:
    Update part of the given company.

    destroy:
    Delete the given company.
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [IsAuthenticated, IsAdminOrManager]

class DepartmentViewSet(viewsets.ModelViewSet):
    """
    retrieve:
    Return the given department.

    list:
    Return a list of all the existing departments.

    create:
    Create a new department.

    update:
    Update the given department.

    partial_update:
    Update part of the given department.

    destroy:
    Delete the given department.
    """
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    permission_classes = [IsAuthenticated, IsAdminOrManager]

class EmployeeViewSet(viewsets.ModelViewSet):
    """
    retrieve:
    Return the given employee.

    list:
    Return a list of all the existing employees.

    create:
    Create a new employee.

    update:
    Update the given employee.

    partial_update:
    Update part of the given employee.

    destroy:
    Delete the given employee.
    """
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated, IsAdminOrManager]
