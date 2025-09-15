from django.db import models

# Define Course model
class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

# Define ContactForm model
class ContactForm(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return f"Message from {self.name}"

# Define Gallery model
class Gallery(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='gallery_images/')
    description = models.TextField()

    def __str__(self):
        return self.title

class News(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    content = models.TextField()  # Content field added
    published_date = models.DateField()  # Corrected 'published_date' field
    image = models.ImageField(upload_to='news_images/')
    link = models.URLField()

    def __str__(self):
        return self.title