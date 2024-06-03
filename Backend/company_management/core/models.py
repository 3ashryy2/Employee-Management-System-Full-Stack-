from datetime import timezone
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('manager', 'Manager'),
        ('employee', 'Employee'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

class Company(models.Model):
    name = models.CharField(max_length=255)
    num_departments = models.PositiveIntegerField(default=0)
    num_employees = models.PositiveIntegerField(default=0)

class Department(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='departments')
    name = models.CharField(max_length=255)
    num_employees = models.PositiveIntegerField(default=0)

class Employee(models.Model):
    STATUS_CHOICES = [
        ('application_received', 'Application Received'),
        ('interview_scheduled', 'Interview Scheduled'),
        ('hired', 'Hired'),
        ('not_accepted', 'Not Accepted'),
    ]
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='employees')
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='employees')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15)
    address = models.TextField()
    designation = models.CharField(max_length=255)
    hired_on = models.DateField(null=True, blank=True)
    days_employed = models.PositiveIntegerField(default=0, editable=False)

    def save(self, *args, **kwargs):
        if self.hired_on:
            self.days_employed = (timezone.now().date() - self.hired_on).days
        super().save(*args, **kwargs)
