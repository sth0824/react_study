from django.contrib import admin
from polls.models import Question, Choice

# Choice 모델을 Question에 인라인으로 표시 (테이블 형식)
class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 2

class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Question Statement', {'fields': ['question_text']}),
        # ('Date Information', {'fields': ['pub_date']}),  # collapse 없이 보기
        ('Date Information', {
            'fields': ['pub_date'],
            'classes': ['collapse'],  # ← 접혀서 표시됨
        }),
    ]
    inlines = [ChoiceInline]  # Choice 모델을 함께 표시
    list_display = ('question_text', 'pub_date')  # 목록 컬럼
    list_filter = ['pub_date']  # 사이드 필터
    search_fields = ['question_text']  # 상단 검색창

admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice)
