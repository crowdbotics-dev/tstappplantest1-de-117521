from django.conf import settings
from django.db import models
class Srk(models.Model):
    'Generated Model'
    suppliment = models.CharField(max_length=100,)
    rel_user_n_n = models.ManyToManyField("users.User",blank=True,related_name="srk_rel_user_n_n",)
    rel_user_1_1 = models.OneToOneField("users.User",blank=True,null=True,on_delete=models.CASCADE,related_name="srk_rel_user_1_1",)
