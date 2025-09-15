from django.contrib import admin
from .models import Course, ContactForm, Gallery, News

# Register Course model in admin
class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'start_date', 'end_date', 'price')  # Fields to display in the list
    search_fields = ('name', 'description')  # Fields to be searchable
    list_filter = ('start_date', 'end_date')  # Filters by start and end date
    ordering = ('start_date',)  # Default ordering by start_date

admin.site.register(Course, CourseAdmin)

# Register ContactForm model in admin
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')  # Fields to display in the list
    search_fields = ('name', 'email')  # Fields to be searchable
    list_filter = ('email',)  # Add filter by email for convenience

admin.site.register(ContactForm, ContactFormAdmin)

# Register Gallery model in admin
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('title', 'image', 'description')  # Fields to display in the list
    search_fields = ('title',)  # Make title searchable
    list_filter = ('title',)  # Filter by title
    readonly_fields = ('image',)  # Make image field read-only in the admin for security

admin.site.register(Gallery, GalleryAdmin)

# Register News model in admin
class NewsAdmin(admin.ModelAdmin):
    # Correctly specify the fields to display
    list_display = ('title', 'published_date', 'content', 'description', 'image', 'link')

    # Enable search on specific fields
    search_fields = ('title', 'description', 'content')

    # Allow filtering by published_date
    list_filter = ('published_date',)

    # Order the list view by published_date
    ordering = ('-published_date',)  # Order descending by published_date

admin.site.register(News, NewsAdmin)