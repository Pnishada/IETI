from django.contrib import admin
from .models import SliderImage

class SliderImageAdmin(admin.ModelAdmin):
    list_display = ('heading', 'subheading', 'src', 'id')
    search_fields = ('heading', 'subheading')
    list_filter = ('heading',)
    ordering = ('-id',)

admin.site.register(SliderImage, SliderImageAdmin)
