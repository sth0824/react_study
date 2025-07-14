from django.views.generic.base import TemplateView
from django.apps import apps  # 추가

# -- TemplateView
class HomeView(TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        dictVerbose = {}

        for app in apps.get_app_configs():
            if 'site-packages' not in app.path:  # 네가 만든 앱만 대상으로 함
                dictVerbose[app.label] = app.verbose_name

        context['verbose_dict'] = dictVerbose
        return context
