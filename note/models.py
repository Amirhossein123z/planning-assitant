from django.db import models
from django.contrib.auth.models import User




class Note(models.Model):

    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="notes")

    title=models.CharField(max_length=100)

    description=models.TextField(max_length=500,blank=False,null=False)

    created_date=models.DateTimeField(auto_now_add=True)

    updated_date=models.DateTimeField(auto_now=True)
    
    is_archived=models.BooleanField(default=False)



    class Meta:

        ordering = ['-created_date']

        verbose_name = 'Note'

        verbose_name_plural= 'Notes'



    def __str__(self):

        if self.is_archived:

            return f"📁{ self.title}"

        return self.title


    def get_short_title(self):

            if len(self.title) > 5:
                
                return self.title[:5] + "..."

            return self.title


    def get_short_description(self):
        
        if len(self.description) > 30:

            return self.description[:30] + "..."

        return self.description    
