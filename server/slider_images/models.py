from django.db import models

class SliderImage(models.Model):
    src = models.ImageField(upload_to='slider_images/')  # Path to store images
    heading = models.CharField(max_length=200)  # Image caption (Heading)
    subheading = models.CharField(max_length=300)  # Image caption (Subheading)

    def __str__(self):
        return self.heading
