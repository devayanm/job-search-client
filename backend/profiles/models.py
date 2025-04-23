from django.db import models
from authentication.models import User
from skills.models import Skill

# Student Profile model remains the same

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    profile_summary = models.TextField(blank=True, null=True)
    
    skills = models.ManyToManyField(Skill, related_name='student_skills', blank=True)
    
    cgpa = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True)
    degree = models.CharField(max_length=100, blank=True, null=True)
    branch = models.CharField(max_length=100, blank=True, null=True)
    college = models.CharField(max_length=100, blank=True, null=True)
    
    resume_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.first_name or ''} {self.last_name or ''}".strip()

class TPOProfile(models.Model):
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='tpo_profile')
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    college = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"

class CompanyProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='company_profile')
    company_name = models.CharField(max_length=100, blank=True, null=True)
    website_url = models.URLField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.company_name
    
class AdminProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='admin_profile')

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"
