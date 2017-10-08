from django.db import models
from django.utils import timezone
from django.urls import reverse

# Create your models here.

class Post(models.Model):
	title = models.CharField(max_length=100)
	slug = models.SlugField(max_length=100)
	body = models.TextField()
	posted_date = models.DateTimeField(auto_now_add=True)
	category = models.ManyToManyField('Category')

	def __str__(self):
		return self.title

	def display_categories(self):
		category_list = [category.name for category in self.category.all()]
		category_list = sorted(category_list, key=str.lower)
		return ', '.join(category_list)

	display_categories.short_description = 'Category'

	def get_absolute_url(self):
		# return reverse('blog_post', {'slug': self.slug})
		return reverse('blog_post', args=[str(self.slug)])

	def create_summary(self):
		return self.body[:200] + "..."


class Category(models.Model):
	name = models.CharField(max_length=100)
	slug = models.SlugField(max_length=100)

	class Meta:
		verbose_name_plural = 'categories'

	def __str__(self):
		return self.name




