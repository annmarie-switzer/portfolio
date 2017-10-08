from django.contrib import admin
from .models import Post, Category
# Register your models here.

class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = { 'slug': ('title',) }
    list_display = ('title', 'posted_date', 'display_categories')
    list_filter = ('posted_date', 'category')

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = { 'slug': ('name',) }


admin.site.register(Post, PostAdmin)
admin.site.register(Category, CategoryAdmin)
