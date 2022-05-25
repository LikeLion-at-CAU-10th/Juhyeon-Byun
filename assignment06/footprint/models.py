from django.db import models

# Create your models here.

class Footprint(models.Model):
    footprint_id = models.AutoField(primary_key=True)
    receiver = models.TextField(null=False)
    message = models.TextField(null=False)
    sent_at = models.DateTimeField(auto_now_add=True, blank=False)
    