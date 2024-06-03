# core/signals.py
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Company, Department, Employee

@receiver(post_save, sender=Department)
def update_company_departments(sender, instance, **kwargs):
    instance.company.num_departments = instance.company.departments.count()
    instance.company.save()

@receiver(post_save, sender=Employee)
def update_counts_on_employee_save(sender, instance, **kwargs):
    instance.company.num_employees = instance.company.employees.count()
    instance.company.save()
    instance.department.num_employees = instance.department.employees.count()
    instance.department.save()

@receiver(post_delete, sender=Employee)
def update_counts_on_employee_delete(sender, instance, **kwargs):
    instance.company.num_employees = instance.company.employees.count()
    instance.company.save()
    instance.department.num_employees = instance.department.employees.count()
    instance.department.save()
